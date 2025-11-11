import { docs, meta } from "@/.source";
import { DocsBody } from "fumadocs-ui/page";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { TableOfContents } from "@/components/_blog/table-of-contents";
import { MobileTableOfContents } from "@/components/_blog/mobile-toc";
import { AuthorCard } from "@/components/_blog/author-card";
import { ReadMoreSection } from "@/components/_blog/read-more-section";
import { PromoContent } from "@/components/_blog/promo-content";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import { FlickeringGrid } from "@/components/_blog/magicui/flickering-grid";
import { HashScrollHandler } from "@/components/_blog/hash-scroll-handler";
import Background from "@/components/ui/elements/background";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// _TODO: Test new source- implementation
const _mdxSource = createMDXSource(docs, meta) as unknown;
const _maybeFiles = (_mdxSource as { files?: unknown }).files;
const blogSource = loader({
  baseUrl: "/blog",
  source: (Array.isArray(_maybeFiles)
    ? { files: _maybeFiles as unknown[] }
    : typeof _maybeFiles === "function"
      ? { files: (_maybeFiles as () => unknown[])() }
      : _mdxSource) as unknown as Parameters<typeof loader>[0]["source"],
});

interface BlogData {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  thumbnail?: string;
  author?: string;
  // MDX body can be a React component
  body?: unknown;
}

interface BlogPage {
  url?: string;
  data: BlogData;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const page = blogSource.getPage([slug]) as unknown as BlogPage | undefined;

  if (!page) {
    notFound();
  }

  const MDX = page.data.body as unknown as
    | React.ComponentType<Record<string, unknown>>
    | undefined;
  const date = new Date(page.data.date ?? Date.now());
  const formattedDate = formatDate(date);

  const NEGATIVE_MARGIN = "-mt-20";
  const PADDING_TOP = "pt-20";

  return (
    <main
      className={`${NEGATIVE_MARGIN} _blogpost-page relative z-1 min-h-screen overflow-visible bg-transparent`}
    >
      <HashScrollHandler />
      <Background className="">
        <div className="_flickering-grid absolute top-0 left-0 z-0 h-[200px] w-full [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
          <FlickeringGrid
            className="absolute top-2 left-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.2}
            flickerChance={0.05}
          />
        </div>
      </Background>

      <section
        className={`${PADDING_TOP} _page-header+controls border-border relative z-10 space-y-4 border-b px-[calc(var(--gutter-x)-40px)]`}
      >
        <div className="_header-wrapper mx-auto flex max-w-7xl flex-col gap-6 p-6">
          <div className="_btn+time text-muted-foreground flex flex-wrap items-center gap-3 gap-y-5 text-sm">
            <Button variant="outline" asChild className="_back-btn h-6 w-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to all articles</span>
              </Link>
            </Button>
            {page.data.tags && page.data.tags.length > 0 && (
              <div className="_tags text-muted-foreground flex flex-wrap gap-3">
                {page.data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground flex h-6 w-fit items-center justify-center rounded-md border px-3 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <time className="_date text-muted-foreground font-medium">
              {formattedDate}
            </time>
          </div>

          <h1 className="_page-title text-4xl font-medium tracking-tighter text-balance md:text-5xl lg:text-6xl">
            {page.data.title}
          </h1>

          {page.data.description && (
            <p className="_description text-muted-foreground max-w-4xl md:text-lg md:text-balance">
              {page.data.description}
            </p>
          )}
        </div>
      </section>

      <section className="_page-contents divide-border relative z-10 mx-auto flex max-w-7xl divide-x px-4 md:px-0">
        <div className="_line border-border pointer-events-none absolute left-1/2 mx-auto h-full w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 border-x p-0 lg:w-full" />

        <section className="_main-blog-contents w-full overflow-hidden p-0">
          {page.data.thumbnail && (
            <div className="relative h-[500px] w-full overflow-hidden border border-transparent object-cover">
              <Image
                src={page.data.thumbnail}
                alt={page.data.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="_docs-body p-6 px-[calc(var(--gutter-x)-10px)] lg:p-10">
            <div className="_docs-body--wrapper prose dark:prose-invert prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance prose-lg max-w-none">
              <DocsBody>{MDX ? <MDX /> : null}</DocsBody>
            </div>
          </div>

          <div className="_read-more mt-10 pb-35">
            <ReadMoreSection
              currentSlug={[slug]}
              currentTags={page.data.tags}
            />
          </div>
        </section>

        <aside className="_aside bg-muted/60 dark:bg-muted/20 hidden w-[350px] flex-shrink-0 p-6 pb-30 lg:block lg:p-10">
          <div className="sticky top-20 space-y-8">
            {page.data.author && isValidAuthor(page.data.author) && (
              <AuthorCard author={getAuthor(page.data.author)} />
            )}
            <div className="border-border bg-card rounded-lg border p-6">
              <TableOfContents />
            </div>
            <PromoContent variant="desktop" />
          </div>
        </aside>
      </section>

      <MobileTableOfContents />
    </main>
  );
}

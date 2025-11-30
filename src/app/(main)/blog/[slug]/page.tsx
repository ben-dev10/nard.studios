import { DocsBody } from "fumadocs-ui/page";
import { blogSource } from "@/lib/blog-source";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { TableOfContents } from "@/components/_blog/table-of-contents";
import { MobileTableOfContents } from "@/components/_blog/mobile-toc";
import { AuthorCard } from "@/components/_blog/author-card";
import { ReadMoreSection } from "@/components/_blog/read-more-section";
// import { PromoContent } from "@/components/_blog/promo-content";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import { HashScrollHandler } from "@/components/hash-scroll-handler";
import Background from "@/components/ui/elements/background";
import BlogFlickeringGrid from "@/app/_components/blog-flickering-grid";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/*
 * generateMetadata() as it name suggests, generates all the metadata that would be
 *  used in the meta tags after build
 */
interface BlogDataMeta {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  thumbnail?: string;
  author?: string;
}

interface BlogPageMeta {
  data: BlogDataMeta;
  url?: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const page = blogSource.getPage([slug]) as unknown as
      | BlogPageMeta
      | undefined;

    if (!page) {
      return {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      };
    }

    const ogUrl = `${siteConfig.url}/blog/${slug}`;
    const ogImage = `${ogUrl}/opengraph-image`;

    return {
      title: page.data.title,
      description: page.data.description,
      keywords: [
        page.data.title,
        ...(page.data.tags || []),
        "Blog",
        "Article",
        "Web Development",
        "Programming",
        "Technology",
        "Software Engineering",
      ],
      authors: [
        {
          name: page.data.author || "nard",
          url: siteConfig.url,
        },
      ],
      creator: page.data.author || "nard",
      publisher: "nard.studios",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: page.data.title,
        description: page.data.description,
        type: "article",
        url: ogUrl,
        publishedTime: page.data.date,
        authors: [page.data.author || "nard.studios"],
        tags: page.data.tags,
        images: [
          {
            url: page.data.thumbnail || ogImage,
            width: 1200,
            height: 630,
            alt: page.data.title,
          },
        ],
        siteName: siteConfig.name,
      },
      twitter: {
        card: "summary_large_image",
        title: page.data.title,
        description: page.data.description,
        images: [page.data.thumbnail || ogImage],
        creator: "@_nard_q",
        site: "@_nard_q",
      },
      alternates: {
        canonical: ogUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

// ------------------------------------------ //
/*
 * BlogPost() is the main function that would generate the page template for a given blogpost.
 */
interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogData {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  thumbnail?: string;
  author?: string;
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
      className={`${NEGATIVE_MARGIN} _blogpost-page relative overflow-visible bg-transparent`}
    >
      <HashScrollHandler />
      <Background className="_flickering-grid-bg">
        <div className="_flickering-grid absolute top-0 left-0 z-0 h-[200px] w-full [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
          <BlogFlickeringGrid />
        </div>
      </Background>

      <section
        className={`${PADDING_TOP} _page-header+controls border-border relative z-5 space-y-4 border-b px-[calc(var(--gutter-x)-40px)]`}
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

      <section className="_page-contents divide-border relative mx-auto flex max-w-7xl divide-x px-4 md:px-0">
        <div className="_line border-border pointer-events-none absolute left-1/2 mx-auto h-full w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 border-x p-0 lg:w-full" />

        <section className="_main-blog-contents w-full overflow-hidden p-0">
          {page.data.thumbnail && (
            <div className="relative w-full overflow-hidden border border-transparent object-cover">
              <Image
                src={page.data.thumbnail}
                alt={page.data.title}
                width={2400}
                height={1260}
                className="aspect-[1200/630] object-cover"
                priority
              />
            </div>
          )}

          <article className="_docs-body p-6 px-[calc(var(--gutter-x)-10px)] lg:p-10">
            {/* prose-p:text-balance   -   tailwind-prose plugin update */}
            <div className="_docs-body--wrapper prose dark:prose-invert prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-lg max-w-none">
              <DocsBody>{MDX ? <MDX /> : null}</DocsBody>
            </div>
          </article>

          <aside className="_read-more mt-10 pb-35">
            <ReadMoreSection
              currentSlug={[slug]}
              currentTags={page.data.tags}
            />
          </aside>
        </section>

        <aside className="_aside bg-muted/60 dark:bg-muted/20 hidden w-[350px] flex-shrink-0 p-6 pb-30 lg:block lg:p-10">
          <div className="sticky top-20 space-y-8">
            {page.data.author && isValidAuthor(page.data.author) && (
              <AuthorCard author={getAuthor(page.data.author)} />
            )}
            <div className="border-border bg-card rounded-lg border p-6">
              <TableOfContents />
            </div>
            {/* <PromoContent variant="desktop" /> */}
          </div>
        </aside>
      </section>

      <MobileTableOfContents />
    </main>
  );
}

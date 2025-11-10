import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { BlogCard } from "@/components/_blog/blog-card";
import { TagFilter } from "@/components/_blog/tag-filter";
import { FlickeringGrid } from "@/components/_blog/magicui/flickering-grid";
import Background from "@/components/ui/elements/background";
import { LoadingSpinner } from "@/components/_ui/icons";

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

const _mdxSource = createMDXSource(docs, meta);
const blogSource = loader({
  baseUrl: "/blog",
  // createMDXSource returns an object with a `files()` function in this
  // environment. Ensure we pass an object with an actual array `files` so
  // fumadocs-core's loader can call `files.map(...)` safely.
  source: Array.isArray((_mdxSource as any).files)
    ? { files: (_mdxSource as any).files }
    : typeof (_mdxSource as any).files === "function"
      ? { files: (_mdxSource as any).files() }
      : (_mdxSource as any),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages = blogSource.getPages() as unknown as BlogPage[];
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((blog) => blog.data.tags || [])),
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredBlogs =
    selectedTag === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.data.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce(
    (acc, tag) => {
      if (tag === "All") {
        acc[tag] = sortedBlogs.length;
      } else {
        acc[tag] = sortedBlogs.filter((blog) =>
          blog.data.tags?.includes(tag),
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const NEGATIVE_MARGIN = "-mt-20";
  const PADDING_TOP = "pt-30";

  return (
    <main
      className={`${NEGATIVE_MARGIN} _blog-homepage relative z-1 bg-transparent`}
    >
      <Background>
        <div className="absolute top-0 left-0 z-0 h-[200px] w-full [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
          <FlickeringGrid
            className="absolute top-0 left-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.2}
            flickerChance={0.05}
          />
        </div>
      </Background>

      <section
        className={`${PADDING_TOP} _contents border-border relative z-10 flex min-h-[250px] flex-col justify-center gap-6 border-b p-6`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-medium tracking-tighter md:text-5xl">
              nard.studios Blog
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Latest news and updates from Magic UI.
            </p>
          </div>
        </div>
        {allTags.length > 0 && (
          <div className="mx-auto w-full max-w-7xl">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </section>

      <div className="_articles container-7xl w-full px-6 lg:px-0">
        <Suspense
          fallback={
            <div className="container-7xl p-10">
              <LoadingSpinner />
            </div>
          }
        >
          <div
            className={`border-border relative grid grid-cols-1 overflow-hidden border-x md:grid-cols-2 lg:grid-cols-3 ${
              filteredBlogs.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredBlogs.map((blog) => {
              const date = new Date(blog.data.date);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.url}
                  url={blog.url}
                  title={blog.data.title}
                  description={blog.data.description}
                  date={formattedDate}
                  thumbnail={blog.data.thumbnail}
                  showRightBorder={filteredBlogs.length < 3}
                />
              );
            })}
          </div>
        </Suspense>
      </div>

      <section className="_aside+cta border-t">
        <div className="_aside-wrapper container-7xl p-10 py-15 pb-70">
          <h3>End of articles</h3>
        </div>
      </section>
    </main>
  );
}

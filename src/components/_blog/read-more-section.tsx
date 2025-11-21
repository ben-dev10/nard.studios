/* eslint-disable @next/next/no-img-element */
import { blogSource } from "@/lib/blog-source";
import Link from "next/link";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogData {
  title: string;
  description?: string;
  date?: string;
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

interface ReadMoreSectionProps {
  currentSlug: string[];
  currentTags?: string[];
  title?: string;
  borders?: string;
  maxPosts?: number;
}

export function ReadMoreSection({
  currentSlug,
  currentTags = [],
  title = "Read more",
  borders = "border-border border-t",
  maxPosts = 3,
}: ReadMoreSectionProps) {
  const allPages = blogSource.getPages() as unknown as BlogPage[];

  const currentUrl = `/blog/${currentSlug.join("/")}`;

  const otherPosts = allPages
    .filter((page) => page.url !== currentUrl)
    .map((page) => {
      const tagOverlap = currentTags.filter((tag) =>
        page.data.tags?.includes(tag),
      ).length;

      return {
        ...page,
        relevanceScore: tagOverlap,
        date: new Date(page.data.date ?? Date.now()),
      };
    })
    .sort((a, b) => {
      if (a.relevanceScore !== b.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return b.date.getTime() - a.date.getTime();
    })
    .slice(0, maxPosts);

  if (otherPosts.length === 0) {
    return null;
  }

  return (
    <section className={`${borders} px-[calc(var(--gutter-x)-40px)]`}>
      <div className="p-6 lg:p-10">
        <h2 className="mb-8 text-2xl font-medium">{title}</h2>

        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => {
            const formattedDate = formatDate(post.date);

            return (
              <Link
                key={post.url}
                href={post.url}
                className="group grid cursor-pointer grid-cols-1 items-center gap-4 lg:grid-cols-12"
              >
                {post.data.thumbnail && (
                  <div className="col-span-1 flex-shrink-0 lg:col-span-4">
                    <div className="relative h-full w-full">
                      <img
                        src={post.data.thumbnail}
                        alt={post.data.title}
                        className="h-full w-full rounded-lg object-cover transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  </div>
                )}
                <div className="col-span-1 flex-1 space-y-2 lg:col-span-8">
                  <h3 className="text-card-foreground group-hover:text-primary line-clamp-2 text-lg font-semibold underline-offset-4 transition-colors group-hover:underline">
                    {post.data.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-sm underline-offset-4 group-hover:underline">
                    {post.data.description}
                  </p>
                  <time className="text-muted-foreground block text-xs font-medium">
                    {formattedDate}
                  </time>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

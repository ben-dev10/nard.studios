import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  showRightBorder?: boolean;
}

export function BlogCard({
  url,
  title,
  description,
  date,
  thumbnail,
  showRightBorder = true,
}: BlogCardProps) {
  return (
    <Link
      href={url}
      className={cn(
        "group before:bg-border after:bg-border relative block before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-0 after:h-px after:w-screen after:content-['']",
        showRightBorder && "border-border border-b-0 md:border-r",
      )}
    >
      <div className="flex flex-col">
        {thumbnail && (
          <div className="relative w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              width={2400}
              height={1260}
              className="aspect-[1200/630] object-cover"
            />
          </div>
        )}

        <div className="flex flex-col gap-2 p-6">
          <h3 className="text-card-foreground text-xl font-semibold underline-offset-4 group-hover:underline">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <time className="text-muted-foreground block text-sm font-medium">
            {date}
          </time>
        </div>
      </div>
    </Link>
  );
}

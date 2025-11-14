import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShareIcon } from "@/components/_ui/icons";
import { ArrowUpRight, Bookmark } from "lucide-react";

const ProjectCard = ({
  title,
  desc,
  date,
  href,
  img,
  className = "max-w-[450px] min-w-[350px]",
}: {
  title: string;
  desc: string;
  date?: string;
  href: string;
  className?: string;
  img: Record<"src" | "alt", string> & Record<"width" | "height", number>;
}) => {
  return (
    <div className="_featured-card max-w-max">
      <Link href={href}>
        <div className={`${className} _card-img group relative block`}>
          <Image
            alt={img.alt}
            width={img.width}
            height={img.height}
            src={img.src}
            className="mb-4 aspect-[1260/765] rounded-md shadow-lg"
          />

          <div className="_overlay absolute inset-0 bottom-0 flex flex-col items-center justify-end rounded-md bg-gradient-to-b from-black/5 to-black/80 p-5 opacity-0 transition-opacity duration-450 group-hover:opacity-100">
            <div className="_toolbar xs:scale-[1] flex max-w-max scale-[0.8] rounded-md bg-white">
              <div className="border-r p-2">
                <Bookmark size={16} />
              </div>
              <div className="flex items-center gap-2 p-2 px-3">
                <p className="">Share</p>
                <ShareIcon className="size-4 stroke-black" />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="_footer flex justify-between">
        <div className="_texts">
          <h5 className="font-bold">{title}</h5>
          <p className="text-muted-foreground">{desc}</p>
          <small>{date}</small>
        </div>

        <div className="_preview-btn">
          <Link href={href}>
            <Button className="">
              Live Preview <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

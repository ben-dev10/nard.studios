import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShareIcon } from "@/components/_ui/icons";
import { ArrowUpRight } from "lucide-react";
import useShare from "@/hooks/use-share";

const ProjectCard = ({
  title,
  desc,
  date,
  href,
  img,
  alt,
  className = "max-w-[450px] min-w-[350px]",
}: {
  title: string;
  desc: string;
  date?: string;
  href: string;
  img: StaticImageData;
  className?: string;
  alt?: string;
}) => {
  const handleClick = useShare({
    title: "UI Clone",
    desc: desc,
    url: href,
  });
  return (
    <div className="_featured-card max-w-max">
      <div className={`${className} _card-img group relative block`}>
        <Link href={href}>
          <Image
            alt={`${alt}`}
            width={img.width}
            height={img.height}
            src={img.src}
            className="mb-4 aspect-[1260/765] rounded-md shadow-lg"
          />
          <div className="_overlay absolute inset-0 bg-gradient-to-b from-black/5 to-black/80 p-5 opacity-0 transition-opacity duration-450 group-hover:opacity-100" />
        </Link>
        <div className="_toolbar absolute inset-x-0 bottom-5 flex flex-col items-center justify-end rounded-md opacity-0 transition-opacity duration-450 group-hover:opacity-100">
          <Button
            onClick={handleClick}
            variant="secondary"
            className="hover:bg-white/90"
          >
            <p className="">Share</p>
            <ShareIcon className="size-4 stroke-black" />
          </Button>
        </div>
      </div>

      <div className="_footer flex justify-between">
        <div className="_texts">
          <h5 className="font-FigtreeR font-bold">{title}</h5>
          <p className="text-muted-foreground">{desc}</p>
          <small>{date}</small>
        </div>

        <div className="_preview-btn">
          <Link href={href}>
            <Button variant="secondary">
              Live Preview <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

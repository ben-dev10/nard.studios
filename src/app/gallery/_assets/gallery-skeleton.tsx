import svglg from "./svg/skeleton/skeleton-lg.svg";
import Image from "next/image";

export default function GallerySkeleton() {
  return (
    <div className="">
      <Image
        alt="gallery skeleton"
        src={svglg}
        className="mx-auto animate-pulse"
      />
    </div>
  );
}

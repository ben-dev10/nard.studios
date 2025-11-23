import Image from "next/image";
import Link from "next/link";
import ActionBTN from "./_components/_ui/action-btn";
import BackBTN from "./_components/_ui/back-btn";
import _4041 from "./_assets/_nard/imgs/404-1.webp";

export default function NotFound() {
  return (
    <section className="_404Page fixed inset-0 z-2 grid h-full w-full place-items-center bg-[#fafafa] backdrop-blur-[20px]">
      <div className="_contents">
        <Image
          alt="404-page img"
          src={_4041}
          className="mx-auto mix-blend-multiply max-md:w-[200px] md:w-[270px]"
        />
        <div className="mt-5 p-5 text-center">
          <h2 className="font-FigtreeR">OOps! Page not found.</h2>
          <p className="text-muted-foreground mt-3">
            The page you are requesting does not exist.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <Link href="/">
              <ActionBTN text="Go home" />
            </Link>

            <BackBTN />
          </div>
        </div>
      </div>
    </section>
  );
}

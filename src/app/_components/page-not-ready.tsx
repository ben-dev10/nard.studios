"use client";
import Image from "next/image";
import ActionBTN from "./_ui/action-btn";
import Link from "next/link";
import BackBTN from "./_ui/back-btn";
import { useEffect } from "react";
import _4044 from "../_assets/_nard/imgs/404-4.webp";

export default function PageNotReady() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      // reset after leaving page
      document.body.style.overflow = "";
    };
  });

  return (
    <section className="_PageNotReady fixed inset-0 z-2 grid h-full w-full place-items-center bg-[#fafafa] backdrop-blur-[20px]">
      <div className="_contents">
        <Image
          alt="page-not-ready img"
          src={_4044}
          className="mx-auto mix-blend-multiply max-md:w-[200px] md:w-[300px]"
        />
        <div className="mt-5 p-10 text-center">
          <h2 className="font-FigtreeR">Page not ready.</h2>
          <p className="text-muted-foreground mt-3">
            This page isn&apos;t ready yet, but it will be soon, check back in a
            few days. Thanks.
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

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ActionBTN from "./_ui/action-btn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PageNotReady() {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // reset after leaving page
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <section className="_PageNotReady fixed inset-0 z-2 grid h-full w-full place-items-center bg-[#fafafa] backdrop-blur-[20px]">
      <div className="_contents">
        <Image
          alt="page-not-ready img"
          src="/_nard/imgs/404-4.webp"
          width={983}
          height={787}
          className="mx-auto mix-blend-darken max-md:w-[200px] md:w-[300px]"
        />
        <div className="mt-5 p-10 text-center">
          <h2 className="">Page not ready.</h2>
          <p className="text-muted-foreground mt-3">
            This page isn&apos;t ready yet, but it will be soon, check back in a
            few days. Thanks.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <Link href="/">
              <ActionBTN text="Go home" />
            </Link>

            <Button
              onClick={() => router.back()}
              className="h-10 rounded-[10px] !px-4"
            >
              <ArrowLeft />
              Go back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

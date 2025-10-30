"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ActionBTN from "./_components/_ui/action-btn";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="fixed inset-0 z-2 grid h-full w-full place-items-center bg-[#fafafa] backdrop-blur-[20px]">
      <div className="_contents">
        <Image
          alt="404-page img"
          src="/_nard/imgs/404-1.png"
          width={359}
          height={303}
          className="mx-auto max-md:w-[170px] md:w-[200px]"
        />
        <div className="mt-5 p-5 text-center">
          <h2 className="">OOps! Page not found.</h2>
          <p className="text-muted-foreground mt-3">
            The page you are requesting doesn&apos;t exist.
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

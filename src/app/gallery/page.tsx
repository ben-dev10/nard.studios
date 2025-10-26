import Section from "@/components/ui/elements/section";
import Link from "next/link";
import React from "react";

export default function GalleryPage() {
  return (
    <Section.RootElement className="p-10 pt-20 transition-colors duration-300">
      <>
        <h3 className="mb-5">
          Welcome to my gallery of code and design projects and experiments
          under one roof.
        </h3>
        <p>
          Here you will find a collection of links to clones, and graphics
          I&apos;ve made recently or in the past.{" "}
        </p>
      </>

      <div className="_code mt-10">
        <div className="">
          <div className="">Code</div>
          <hr />
        </div>
        <Link
          href="/gallery/clones/payload"
          className="mt-5 block text-blue-400 underline"
        >
          Payload
        </Link>
      </div>

      <div className="_design mt-10">
        <div className="">
          <div className="">Code</div>
          <hr />
        </div>
        <Link
          href="/gallery/clones/payload"
          className="mt-5 block text-blue-400 underline"
        >
          Payload
        </Link>
      </div>
    </Section.RootElement>
  );
}

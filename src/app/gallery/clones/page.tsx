import Section from "@/components/ui/elements/section";
import Link from "next/link";
import React from "react";

export default function ClonesPage() {
  return (
    <Section.RootElement className="p-10 pt-20 transition-colors duration-300">
      <h3 className="mb-5">Welcome to the clones page</h3>
      <p>
        Here you will find a collection of links to clones I&apos;ve made
        recently or in the past.{" "}
      </p>
      <div className="mt-10">
        <hr />
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

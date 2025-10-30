import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function EmailButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Link href="mailto:nard.studios.hq@gmail.com?subject=Project%20Inquiry&body=Hi%20there">
      <Button className={`${className}`} variant="ctaBtn">
        {text}
      </Button>
    </Link>
  );
}

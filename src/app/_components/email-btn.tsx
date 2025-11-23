import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { NARD_EMAIL } from "../_assets/constants";

export default function EmailButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={`mailto:${NARD_EMAIL}?subject=Project%20Inquiry&body=Hi%20there`}
    >
      <Button className={`${className}`} variant="ctaBtn">
        {text}
      </Button>
    </Link>
  );
}

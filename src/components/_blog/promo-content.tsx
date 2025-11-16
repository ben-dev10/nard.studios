/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-border bg-muted/20 border-t p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/nard-logo_sd.svg"
            alt="nard.studios logo"
            className="h-8 w-8 flex-shrink-0 rounded object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-foreground/90 truncate text-xs font-medium">
              nard.studios
            </p>
            <p className="text-muted-foreground truncate text-xs">
              Crafting stunning UIs with are and precision.
            </p>
          </div>
          <a
            href="#"
            className="text-primary hover:text-primary/80 text-xs font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Learn more
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border-border bg-card rounded-lg border p-4", className)}
    >
      <div className="flex flex-col gap-4">
        <img
          src="/_nard/imgs/profile-img.webp"
          alt="nard.studios logo"
          className="h-40 w-full rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            nard.studios
          </h3>
          <p className="text-muted-foreground text-sm">
            Crafting stunning UIs with are and precision.
          </p>
        </div>
      </div>
    </div>
  );
}

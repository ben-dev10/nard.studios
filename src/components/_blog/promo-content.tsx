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
            src="/magicui-logo.png"
            alt="Magic UI"
            className="h-8 w-8 flex-shrink-0 rounded object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-foreground/90 truncate text-xs font-medium">
              Try Magic UI Pro
            </p>
            <p className="text-muted-foreground truncate text-xs">
              Beautiful design system
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
          src="/_blog/magicui-pro.png"
          alt="Magic UI"
          className="h-40 w-full rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Try Magic UI Pro
          </h3>
          <p className="text-muted-foreground text-sm">
            Magic UI Pro is a design system for building beautiful and
            responsive web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

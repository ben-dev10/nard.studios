import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import React from "react";
import {
  MediaViewer,
  ImageViewer,
  VideoViewer,
  ZoomImageViewer,
} from "@/components/_blog/media-viewer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AuthorCard } from "@/components/_blog/author-card";
import { getAuthor, type AuthorKey } from "@/lib/authors";
import { CopyHeader } from "@/components/_blog/copy-header";
import Link from "next/link";
import { ImageZoom as ImgZoom } from "fumadocs-ui/components/image-zoom";

const createHeading = (level: number) => {
  const Heading = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <CopyHeader level={level} {...props} className="font-FigtreeR font-[700]">
        {children}
      </CopyHeader>
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
};

interface AuthorProps {
  id: AuthorKey;
}

function Author({ id }: AuthorProps) {
  const author = getAuthor(id);
  return <AuthorCard author={author} className="my-8" />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ImageZoom: (props) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <ImgZoom className="w-full rounded-lg" {...(props as any)} />
    ),
    MediaViewer,
    ZoomImageViewer,
    ImageViewer,
    VideoViewer,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Author,
    Link,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

/**
 * Centralized helper to normalize the possible shapes returned by createMDXSource
 * and produce a typed blogSource via fumadocs-core's loader.
 * This removes the need for repeated casts across files.
 */
export function createBlogSource() {
  const _mdxSource = createMDXSource(docs, meta) as unknown;
  const _maybeFiles = (_mdxSource as { files?: unknown }).files;

  const source = (
    Array.isArray(_maybeFiles)
      ? { files: _maybeFiles as unknown[] }
      : typeof _maybeFiles === "function"
        ? { files: (_maybeFiles as () => unknown[])() }
        : _mdxSource
  ) as unknown;

  return loader({
    baseUrl: "/blog",
    source: source as Parameters<typeof loader>[0]["source"],
  });
}

export const blogSource = createBlogSource();

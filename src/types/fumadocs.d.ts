declare module "fumadocs-mdx" {
  export type FumaFile = Record<string, unknown>;
  export type FumaSource =
    | { files?: FumaFile[] }
    | (() => FumaFile[])
    | Record<string, unknown>;
  export function createMDXSource(docs: unknown, meta: unknown): FumaSource;
}

declare module "fumadocs-core/source" {
  import type { FumaSource } from "fumadocs-mdx";

  export type LoaderSource = FumaSource | { files: FumaSource[] };

  export function loader(opts: { baseUrl?: string; source: LoaderSource }): {
    getPage: (slug: string[]) => unknown;
    getPages: () => unknown[];
  };
}

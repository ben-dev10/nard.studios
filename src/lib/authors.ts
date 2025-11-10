export interface Author {
  name: string;
  position: string;
  avatar: string;
}

export const authors: Record<string, Author> = {
  dillion: {
    name: "Dillion Verma",
    position: "Software Engineer",
    avatar: "/_blog/authors/dillion.png",
  },
  arghya: {
    name: "Arghya Das",
    position: "Design System Engineer",
    avatar: "/_blog/authors/arghya.png",
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}

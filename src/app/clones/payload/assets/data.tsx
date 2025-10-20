export const GridIcons = [
  {
    className:
      "--empty !col-start-3 grid-icon--wrapper border-y relative border-x sm:border-r-0",
    asDiv: {
      status: true,
      node: (
        <div className="inset-[1px] size-[calc(100%-1px)] bg-[url(/payload-cms/pattern-element.png)] bg-repeat opacity-8" />
      ),
    },
    img: {
      className: "!payload--hatch-pattern",
      src: "/payload-cms/pattern-element.png",
      alt: "pattern",
      width: 200,
      height: 200,
    },
  },
  {
    className: "--kong grid-icon--wrapper border-y border-r",
    img: {
      className: "grid--icon",
      src: "/payload-cms/logos/kong-logo.svg",
      alt: "Kong logo",
      width: 201,
      height: 200,
    },
  },
  {
    className: "--hello-hello grid-icon--wrapper border-y md:border-r",
    img: {
      className: "grid--icon",
      src: "/payload-cms/logos/hello-hello-logo.svg",
      alt: "hello-hello logo",
      width: 201,
      height: 200,
    },
  },
  {
    className:
      "--fanatics grid-icon--wrapper max-md:shadow-[0px_-1px_0px_var(--border)] md:border-t border-b max-md:border-l-0 border-r-0",
    img: {
      className: "grid--icon",
      src: "/payload-cms/logos/fanatics-logo.svg",
      alt: "Fanatics Logo",
      width: 201,
      height: 200,
    },
  },
  {
    className:
      "--sonos grid-icon--wrapper border-x border-b md:border-t sm:max-md:border-r-0",
    img: {
      className: "grid--icon",
      src: "/payload-cms/logos/sonos-logo.svg",
      alt: "Sonos Logo",
      width: 201,
      height: 200,
    },
  },
  {
    className: "--microsoft grid-icon--wrapper border-r border-b md:border-t",
    img: {
      className: "grid--icon",
      src: "/payload-cms/logos/microsoft-logo.svg",
      alt: "Microsoft Logo",
      width: 201,
      height: 200,
    },
  },
];

export const FeatureLinks = [
  {
    id: "Headless CMS",
    className: "",
    url: "#",
    img: {
      width: 1080,
      height: 864,
      alt: "Screenshot of PayloadCMS Editor",
      src: "/payload-cms/feature-imgs/general-editor.webp",
    },
  },
  {
    id: "Headless\neCommerce",
    className: "",
    url: "#",
    img: {
      width: 1080,
      height: 952,
      alt: "Screenshot of PayloadCMS Shop Cards",
      src: "/payload-cms/feature-imgs/shop-cards.webp",
    },
  },
  {
    id: "Enterprise App\nBuilder",
    className: "",
    url: "#",
    img: {
      width: 1080,
      height: 952,
      alt: "Screenshot of PayloadCMS Input Fields",
      src: "/payload-cms/feature-imgs/input-fields.webp",
    },
  },
  {
    id: "Digital Asset\nManagement",
    className: "",
    url: "#",
    img: {
      width: 1080,
      height: 952,
      alt: "Screenshot of PayloadCMS Media Editor",
      src: "/payload-cms/feature-imgs/media-editor.webp",
    },
  },
];

export const Testimonials = [
  {
    id: "testimonial-01",
    quote:
      "Utilizing Payload enabled us to implement our digital postcards tool quickly and easily, engaging thousands of K-12 students.",
    author: "Heather Nelson, Director, Sonos",
    className: "",
    url: "#",
    img: {
      src: GridIcons[4].img.src,
      alt: GridIcons[4].img.alt,
      width: GridIcons[4].img.width,
      height: GridIcons[4].img.height,
    },
  },
  {
    id: "testimonial-02",
    quote:
      "Payload had all the core features we needed to get started quickly, and the flexibility to make it our own as we build a world-class editing experience.",
    author: "Matt Dean, Engineer, Hello Bello",
    className: "",
    url: "#",
    img: {
      src: GridIcons[2].img.src,
      alt: GridIcons[2].img.alt,
      width: GridIcons[2].img.width,
      height: GridIcons[2].img.height,
    },
  },
  {
    id: "testimonial-03",
    quote:
      "We were impressed by the built-in flexibility and extensibility that kept our development workflow agile and in sync with marketing needs.",
    author: "Duncan Van Keulen, Developer, Fanatics",
    className: "",
    url: "#",
    img: {
      src: GridIcons[3].img.src,
      alt: GridIcons[3].img.alt,
      width: GridIcons[3].img.width,
      height: GridIcons[3].img.height,
    },
  },
  {
    id: "testimonial-04",
    quote:
      "What we found so user-friendly was how simple the UI was to edit and manage content. Things were not hidden behind code.",
    author: "Frank Shi, Co-founder, Kong",
    className: "",
    url: "#",
    img: {
      src: GridIcons[1].img.src,
      alt: GridIcons[1].img.alt,
      width: GridIcons[1].img.width,
      height: GridIcons[1].img.height,
    },
  },
  {
    id: "testimonial-05",
    quote:
      "Building with Payload can be done quickly and effectively, thanks to its code-based customization and developer-friendly features.",
    author: "Sowmya Reddy Peta, Engineer, Microsoft ",
    className: "border-r",
    url: "#",
    img: {
      src: GridIcons[5].img.src,
      alt: GridIcons[5].img.alt,
      width: GridIcons[5].img.width,
      height: GridIcons[5].img.height,
    },
  },
];

export const NavLinks = [
  {
    name: "Products",
    url: "#",
  },
  {
    name: "Developers",
    url: "#",
  },
  {
    name: "Enterprise",
    url: "#",
  },
  {
    name: "Docs",
    url: "#",
  },
];

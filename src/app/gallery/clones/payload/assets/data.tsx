import patternElement from "./pattern-element.png";
import KongLogo from "./logos/kong-logo.svg";
import SonosLogo from "./logos/sonos-logo.svg";
import FanaticsLogo from "./logos/fanatics-logo.svg";
import MicrosoftLogo from "./logos/microsoft-logo.svg";
import HelloLogo from "./logos/hello-hello-logo.svg";

import generalEditor from "./feature-imgs/general-editor.webp";
import shopCards from "./feature-imgs/shop-cards.webp";
import inputFields from "./feature-imgs/input-fields.webp";
import mediaEditor from "./feature-imgs/media-editor.webp";

export const GridIcons = [
  {
    className:
      "--empty !col-start-3 grid-icon--wrapper border-y relative border-x sm:border-r-0",
    asDiv: {
      status: true,
      node: (
        <div
          className="inset-[1px] size-[calc(100%-1px)] bg-repeat opacity-8"
          style={{ backgroundImage: `url(${patternElement.src})` }}
        />
      ),
    },
    img: {
      className: "!payload--hatch-pattern",
      src: patternElement.src,
      width: patternElement.width,
      height: patternElement.height,
      alt: "pattern",
    },
  },
  {
    className: "--kong grid-icon--wrapper border-y border-r",
    img: {
      className: "grid--icon",
      src: KongLogo.src,
      width: KongLogo.width,
      height: KongLogo.height,
      alt: "Kong logo",
    },
  },
  {
    className: "--hello-hello grid-icon--wrapper border-y md:border-r",
    img: {
      className: "grid--icon",
      src: HelloLogo.src,
      width: HelloLogo.width,
      height: HelloLogo.height,
      alt: "hello-hello logo",
    },
  },
  {
    className:
      "--fanatics grid-icon--wrapper max-md:shadow-[0px_-1px_0px_var(--border)] md:border-t border-b max-md:border-l-0 border-r-0",
    img: {
      className: "grid--icon",
      src: FanaticsLogo.src,
      width: FanaticsLogo.width,
      height: FanaticsLogo.height,
      alt: "Fanatics Logo",
    },
  },
  {
    className:
      "--sonos grid-icon--wrapper border-x border-b md:border-t sm:max-md:border-r-0",
    img: {
      className: "grid--icon",
      src: SonosLogo.src,
      width: SonosLogo.width,
      height: SonosLogo.height,
      alt: "Sonos Logo",
    },
  },
  {
    className: "--microsoft grid-icon--wrapper border-r border-b md:border-t",
    img: {
      className: "grid--icon",
      src: MicrosoftLogo.src,
      width: MicrosoftLogo.width,
      height: MicrosoftLogo.height,
      alt: "Microsoft Logo",
    },
  },
];

export const FeatureLinks = [
  {
    id: "Headless CMS",
    className: "",
    url: "#",
    img: {
      src: generalEditor.src,
      width: generalEditor.width,
      height: generalEditor.height,
      alt: "Screenshot of PayloadCMS Editor",
    },
  },
  {
    id: "Headless\neCommerce",
    className: "",
    url: "#",
    img: {
      src: shopCards.src,
      width: shopCards.width,
      height: shopCards.height,
      alt: "Screenshot of PayloadCMS Shop Cards",
    },
  },
  {
    id: "Enterprise App\nBuilder",
    className: "",
    url: "#",
    img: {
      src: inputFields.src,
      width: inputFields.width,
      height: inputFields.height,
      alt: "Screenshot of PayloadCMS Input Fields",
    },
  },
  {
    id: "Digital Asset\nManagement",
    className: "",
    url: "#",
    img: {
      src: mediaEditor.src,
      width: mediaEditor.width,
      height: mediaEditor.height,
      alt: "Screenshot of PayloadCMS Media Editor",
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

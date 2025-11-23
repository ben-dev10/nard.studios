import { NardLogoSmall } from "@/components/_ui/icons";
import SocialIcons from "@/components/_ui/social-icons";
import Section from "@/components/ui/elements/section";
import Link from "next/link";

export default function MiniFooter({ links }: { links: string[] }) {
  return (
    <Section.RootElement className="mt-10 bg-[#eff0f0]">
      <Section.Container
        container="8xl"
        className="flex justify-between px-[var(--gutter-x)] py-7 text-[0.9rem]"
      >
        <div className="_start flex items-center gap-2">
          <NardLogoSmall />
          <span>&copy; 2025</span>
        </div>
        <div className="_mid flex items-center gap-4">
          {links.map((href, index) => (
            <Link href={`\/${href.toLowerCase()}`} key={index} className="">
              {href}
            </Link>
          ))}
        </div>
        <div className="_end">
          <SocialIcons
            className="flex items-center gap-3"
            SVGClass="size-6 text-black"
            github
            linkedin
          />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

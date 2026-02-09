import { NardLogoSmall } from "@/components/_ui/icons";
import SocialIcons from "@/components/_ui/social-icons";
import Section from "@/components/ui/elements/section";

export default function MiniFooter() {
  return (
    <Section.RootElement className="mt-10">
      <Section.Container
        container="8xl"
        className="flex justify-between px-[var(--gutter-x)] py-7 text-[0.9rem]"
      >
        <div className="_start flex items-center gap-2">
          <NardLogoSmall />
          <span>&copy; 2025 - {new Date().getFullYear()}</span>
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

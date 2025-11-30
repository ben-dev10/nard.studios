"use client";
import { motion, Variants } from "motion/react";
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
  XTWITTER_LINK,
} from "../../_assets/constants";
import Link from "next/link";
import Background from "@/components/ui/elements/background";
import Image from "next/image";
import Section from "@/components/ui/elements/section";
import { Github, Linkedin, Whatsapp, XTwitter } from "@/components/_ui/icons";

const line = <div className="_line w-full border-t border-dashed" />;

function SocialPill({
  icon,
  name,
  link,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}) {
  return (
    <Link
      target="_"
      href={link}
      className={`${className} group flex max-w-max items-center gap-1.5 rounded-full p-1.5 px-3.5`}
    >
      {icon} <p className="!text-[0.8rem]">{name}</p>
    </Link>
  );
}

export function Hero() {
  const blurInVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.3, // Stagger delay based on custom prop
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="mb-10 px-[var(--gutter-x)] pt-65"
      >
        <div className="relative max-w-max">
          <Background>
            <motion.div
              custom={3} // 4
              initial="hidden"
              animate="visible"
              variants={blurInVariants}
            >
              <Image
                src="/_nard/svgs/_a--icon-tray.svg"
                alt="icon-tray-svg"
                width="188"
                height="94"
                className="absolute -top-20 -right-65 scale-[0.8] md:-right-55"
              />
              <Image
                src="/_nard/svgs/_a--cursor.svg"
                alt="cursor-svg"
                width="56"
                height="53"
                className="absolute top-45 -left-25 scale-[0.8] md:-left-35"
              />
              <Image
                src="/_nard/svgs/_a--palette.svg"
                alt="palette-svg"
                width="103"
                height="68"
                className="absolute -top-28 -left-10 w-[60px] scale-[0.8] md:-left-20"
              />
            </motion.div>
          </Background>

          <motion.h1
            custom={0} // 1
            initial="hidden"
            animate="visible"
            variants={blurInVariants}
            className="font-FigtreeR mb-3 max-w-[400px] text-balance md:max-w-[500px]"
          >
            I enjoy{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              designing
            </span>{" "}
            &{" "}
            <span className="font-SeriouslyNostalgic !font-[100]">
              crafting
            </span>{" "}
            user interfaces.
          </motion.h1>
        </div>

        <motion.div
          custom={1} // 2
          initial="hidden"
          animate="visible"
          variants={blurInVariants}
          className="_social-icons mb-10 flex flex-wrap gap-3 *:transition-colors *:duration-200 *:ease-in-out"
        >
          <SocialPill
            link={GITHUB_LINK}
            icon={<Github className="size-5" />}
            name="Github"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-black"
          />
          <SocialPill
            link={XTWITTER_LINK}
            icon={<XTwitter className="size-4.5" />}
            name="Twitter"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-neutral-500"
          />
          <SocialPill
            link={LINKEDIN_LINK}
            icon={<Linkedin className="size-5" />}
            name="LinkedIn"
            className="bg-[#e5e5e5] *:group-hover:text-white hover:bg-blue-500"
          />
          <SocialPill
            link={WHATSAPP_LINK}
            icon={<Whatsapp className="size-5" />}
            name="WhatsApp"
            className="xs:flex hidden bg-[#e5e5e5] *:group-hover:text-white hover:bg-green-500"
          />
        </motion.div>

        <motion.div
          custom={2} // 3
          initial="hidden"
          animate="visible"
          variants={blurInVariants}
          className="_paragraphs text-muted-foreground mb-15 space-y-3"
        >
          <p className="">
            Hello👋, my name is Bernard Quarshie (or{" "}
            <span className="gradient-text bg-gradient-to-tl from-neutral-300 to-neutral-800 font-[600] underline decoration-dashed">
              nard
            </span>
            ), welcome to my portfolio - I&apos;m a web developer who knows a
            little bit of design.
          </p>
          <p className="">
            Glad you are here, check out some of my experiments below 👇
          </p>
        </motion.div>

        {line}
      </Section.Container>
    </Section.RootElement>
  );
}

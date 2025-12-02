import Section from "@/components/ui/elements/section";
import Image from "next/image";
import og from "@/app/_assets/_nard/imgs/og.webp";
import Link from "next/link";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HashScrollHandler } from "@/components/hash-scroll-handler";

function Hero() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="px-[var(--gutter-x)] pt-25 pb-10"
      >
        <div className="">
          <h1 className="font-FigtreeR mb-5 text-center">
            Design & Development Process
          </h1>
          <p className="text-center">
            Building a great website relies on a structured, collaborative
            journey that transforms ideas into a refined digital experience.
            This process should ensure clarity, efficiency, and a final product
            that not only looks good but performs exceptionally well.
          </p>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

export const Callout = ({
  text,
  className,
}: {
  text: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "_info flex gap-2 rounded-lg border border-sky-200/50 bg-sky-50/50 p-4 pl-0 text-sky-950",
        className,
      )}
    >
      <div className="_line mx-1 w-1 rounded-full bg-sky-500 p-1" />
      <div className="_icon+text flex items-center">
        <div className="_icon mr-4">
          <Info className="text-sky-600" size={18} />
        </div>
        {text}
      </div>
    </div>
  );
};

function Process() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="p-10 px-[calc(var(--gutter-x)-25px)] sm:px-[var(--gutter-x)]"
      >
        <div className="_discovery-process flex gap-5">
          <div className="_marker basis-[30px]">
            <p className="m-1 mb-2 grid size-8 place-items-center rounded-full bg-black text-[1.1rem] text-white">
              1
            </p>
            <div className="_v-line mx-auto h-[calc(100%-38px)] w-[1px] bg-black/50" />
          </div>

          <div className="_contents">
            <h3 className="_heading font-FigtreeR">Discovery</h3>
            <p className="mt-1 mb-3 text-[1.1rem] italic">
              Defining the roadmap.
            </p>
            <p className="_description">
              Before any work is done, we have to first understand the
              &quot;why&quot; behind the project. This phase is all about
              gathering requirements and setting a solid foundation for the
              project at hand. This takes into account your{" "}
              <b>goals, audience, brand, specific needs</b> and define the{" "}
              <b>core features</b> your website must have.
            </p>

            <div className="_process-media mt-5 pb-16">
              <Image alt="_discover-media" src={og} className="" />
            </div>
          </div>
        </div>

        <div className="_design-process flex gap-5">
          <div className="_marker basis-[30px]">
            <p className="m-1 mb-2 grid size-8 place-items-center rounded-full bg-black text-[1.1rem] text-white">
              2
            </p>
            <div className="_v-line mx-auto h-[calc(100%-38px)] w-[1px] bg-black/50" />
          </div>

          <div className="_contents">
            <h3 className="_heading font-FigtreeR">Design</h3>
            <p className="mt-1 mb-3 text-[1.1rem] italic">
              Visualizing the user interface & experience.
            </p>
            <p className="_description">
              With a clear direction established, move onto the next stage -{" "}
              <b>the visual phase</b>. This is where the look and feel of your
              website takes shape. Some of the key activities at this stage
              include:
            </p>

            <ul className="list-disc py-5 pl-10">
              <li>Creating wireframes and/or mockups</li>
              <li>Establishing layout and navigation flow</li>
              <li>Choosing colors, typography, and visual styles</li>
              <li>Reviewing design drafts together and refining as needed</li>
            </ul>

            <div className="_process-media mt-5 mb-8">
              <Image alt="_design-media" src={og} className="" />
            </div>

            <Callout
              className="mb-16"
              text={
                <p className="_p">
                  If you happen to have a &quot;design system&quot; ready from a
                  designer or one you created yourself then we can skip this
                  step and move onto &quot;development&quot;. This is what a{" "}
                  <Link href="#" className="text-n-accent underline">
                    design system
                  </Link>{" "}
                  usually contains.
                </p>
              }
            />
          </div>
        </div>

        <div className="_development-process flex gap-5">
          <div className="_marker basis-[30px]">
            <p className="m-1 mb-2 grid size-8 place-items-center rounded-full bg-black text-[1.1rem] text-white">
              3
            </p>
            <div className="_v-line mx-auto h-[calc(100%-38px)] w-[1px] bg-black/50" />
          </div>

          <div className="_contents">
            <h3 className="_heading font-FigtreeR">Development</h3>
            <p className="mt-1 mb-3 text-[1.1rem] italic">Building Structure</p>
            <p className="_description">
              With approved designs in hand, I begin the technical work. I
              translate the visuals into clean, semantic code that ensures your
              website is fast, secure, and responsive across all devices. You
              can expect all the default features of a modern site like modern
              UIs, clean maintainable code, mobile-friendly layouts and
              interactions, accessibility and performance best practices etc.
            </p>

            <p className="_description mt-4">
              The technologies used here will differ from project to project -
              databases, CMS, analytics .etc will depend on the needs of the
              application. I explain more{" "}
              <Link
                href="/blog/introducing-nard-studios"
                className="text-n-accent underline"
              >
                here
              </Link>
              .
            </p>

            <div className="_process-media mt-5 mb-8">
              <Image alt="_development-media" src={og} className="" />
            </div>

            <Callout
              className="mb-16"
              text={
                <p className="_p">
                  At this stage, I will provide regular daily progress, updates
                  and milestone reviews through any preferred messaging channel,
                  to ensure the project is completed before any deadlines.
                </p>
              }
            />
          </div>
        </div>

        <div className="_design-process flex gap-5">
          <div className="_marker basis-[30px]">
            <p className="m-1 mb-2 grid size-8 place-items-center rounded-full bg-black text-[1.1rem] text-white">
              4
            </p>
            <div className="_v-line mx-auto h-[calc(100%-38px)] w-[1.1px] bg-gradient-to-b from-black/50 to-black/0" />
          </div>

          <div className="_contents">
            <h3 className="_heading font-FigtreeR">Deployment</h3>
            <p className="mt-1 mb-3 text-[1.1rem] italic">Launch and liftoff</p>
            <p className="_description">
              After development, testing & quality assessment, the final phase
              deployment, puts your site before the world, ready for users.
              Final testing across devices and browsers is carried out. We then
              set up hosting, domains, or deployment pipelines. Other Quality
              Assurance (QA) activities such as SEO and page-speed optimizations
              are carried out.
            </p>

            <p className="_description mt-4">
              Finally, post-launch checks and optional maintenance and updates
              are also carried out if need be.
            </p>

            <div className="_process-media mt-5 mb-16">
              <Image alt="_discover-media" src={og} className="" />
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function Pricing() {
  return (
    <Section.RootElement id="pricing" className="">
      <Section.Container container="8xl" className="p-10 px-[var(--gutter-x)]">
        <h2 className="font-FigtreeR text-center">
          Great Pricing For everyone
        </h2>
        <p className="mt-4 text-center">
          Whether you need a simple landing page or a complex web application, I
          offer transparent pricing packages tailored to the scale of your
          project.
        </p>
      </Section.Container>
    </Section.RootElement>
  );
}

function FAQMain() {
  return (
    <Section.RootElement id="FAQs" className="">
      <Section.Container container="8xl" className="p-10 px-[var(--gutter-x)]">
        <div className="_header">
          <h2 className="font-FigtreeR mt-10 mb-2 text-center font-[700]">
            Frequently Asked Questions{" "}
          </h2>
          <p className="text-center">
            Let&apos;s get some pressing questions out of the way.
          </p>
        </div>

        <div className="_faq-accordion my-10 w-full p-5 md:pt-0">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  How long does it take to complete a site?
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                The timeline varies depending on the scope. A standard
                &quot;brochure&quot; website typically takes <b>2-4</b> weeks
                from discovery to deployment, while more complex e-commerce or
                custom web applications may take <b>6-10</b> weeks. I will
                provide a detailed timeline during the Discovery phase.
                <Link
                  href="/blog/introducing-nard-studios"
                  className="text-n-accent mt-1 block underline"
                >
                  I explain more here.
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  What do you need from me to get started?
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                Design is always the first point in development so if you have
                some designs or concepts ready (i.e brand colors, typography,
                graphic assets) that would speed up the development process, no
                worries if you don&apos;t have any, together, we will build a
                custom style guide for your project before development begins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  Do you offer maintenance after the site is done?
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                Yes I do. I offer a standard 21-day warranty period after launch
                to fix any bugs. Beyond that, I offer monthly maintenance
                packages if you would like me to handle software updates,
                backups, and small content tweaks so you can focus on your
                business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  What platform or tools do you use to build websites?
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                I choose the best tool for the job. I almost always develop
                full-code (without any no-code tool) because of its flexibility
                and having full control over of every aspect of the application.
                However, I am also proficient in the use of <b>Webflow</b> and{" "}
                <b>Framer</b> (no-code site builders) and can use them if you
                specifically want me to.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:no-underline">
                <h6 className="font-FigtreeR">
                  Can you redesign an existing website instead of building a new
                  one?
                </h6>
              </AccordionTrigger>
              <AccordionContent>
                Of course. I can review your current site, identify what&apos;s
                working and what&apos;s not, and provide a modern, optimized
                redesign.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}

function PricingCalculator() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="p-10 px-[var(--gutter-x)]"
      ></Section.Container>
    </Section.RootElement>
  );
}

export default function ProcessPage() {
  return (
    <main className="_resources-page min-h-screen">
      <HashScrollHandler />
      <Hero />
      <Process />
      <Pricing />
      <FAQMain />
      <PricingCalculator />
    </main>
  );
}

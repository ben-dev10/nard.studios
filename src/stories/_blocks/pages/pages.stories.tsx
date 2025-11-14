import Home from "@/app/(main)/page";
import ClerkPricingPage from "@/app/gallery/clones/clerk/page";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import PayloadCMS from "@/app/gallery/clones/payload/page";
import GalleryPages from "@/app/gallery/page";
import AboutPages from "@/app/(main)/about/page";
// import BlogPage from "@/app/(main)/blog/page";

const meta: Meta = {
  title: "Blocks/Pages",
};

type Story = StoryObj<typeof meta>;

export const Homepage: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      <Home />
    </div>
  ),
};

export const AboutPage: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      <AboutPages />
    </div>
  ),
};

export const BlogPageUI: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      {/* <BlogPage /> */}
    </div>
  ),
};

export const GalleryPage: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      <GalleryPages />
    </div>
  ),
};

export const ClerkPricing: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      <ClerkPricingPage />
    </div>
  ),
};

export const PayloadPage: Story = {
  render: () => (
    <div className="font-Geist [--gutter-x:3.75rem]">
      <PayloadCMS />
    </div>
  ),
};

export default meta;

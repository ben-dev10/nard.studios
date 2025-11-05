import PageNotReady from "@/app/_components/page-not-ready";
import NotFound from "@/app/not-found";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
  title: "Blocks/Sections",
};

type Story = StoryObj<typeof meta>;

export const Pagenotready: Story = {
  render: () => (
    <div className="min-h-screen bg-[#fafafa]">
      <PageNotReady />
    </div>
  ),
};

export const Page404: Story = {
  render: () => (
    <div className="min-h-screen bg-[#fafafa]">
      <NotFound />
    </div>
  ),
};

export default meta;

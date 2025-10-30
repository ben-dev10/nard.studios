import PageNotReady from "@/app/_components/page-not-ready";
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

export default meta;

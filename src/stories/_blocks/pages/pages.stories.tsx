import Home from "@/app/page";
import ClerkPricingPage from "@/app/gallery/clones/clerk/page";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
  title: "Blocks/Pages",
};

type Story = StoryObj<typeof meta>;

export const Homepage: Story = {
  render: () => <Home />,
};

export const ClerkPricing: Story = {
  render: () => <ClerkPricingPage />,
};

export default meta;

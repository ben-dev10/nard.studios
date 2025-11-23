import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MotionDemo from "../_components/motion-demos";

const meta: Meta = {
  title: "UI/Motion",
};

type Story = StoryObj<typeof meta>;

export const MotionDemos: Story = {
  render: () => <MotionDemo />,
};

export default meta;

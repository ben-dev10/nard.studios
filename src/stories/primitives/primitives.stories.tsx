import ActionBTN from "@/app/_components/_ui/action-btn";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
  title: "UI/Primitives",
};

type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  render: () => (
    <div className="_buttons min-h-scree grid place-items-center bg-[#fafafa] p-10">
      <div className="flex flex-col gap-10">
        <ActionBTN text="hi" />
      </div>
    </div>
  ),
};

export default meta;

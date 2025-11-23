import FlickeringGridDemo from "@/stories/_components/FlickeringGridDemo";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
  title: "Blocks/Sections",
};

type Story = StoryObj<typeof meta>;

// export const Pagenotready: Story = {
//   render: () => (
//     <div className="min-h-screen bg-[#fafafa]">
//       <PageNotReady />
//     </div>
//   ),
// };

// export const Page404: Story = {
//   render: () => (
//     <div className="min-h-screen bg-[#fafafa]">
//       <NotFound />
//     </div>
//   ),
// };

export const FlickeringGridDemos: Story = {
  render: () => <FlickeringGridDemo />,
};

export default meta;

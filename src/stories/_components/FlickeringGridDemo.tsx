import { FlickeringGrid } from "@/components/_blog/flickering-grid";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FlickeringGridDemo() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="h-[100px] w-full to-75% mask-b-from-20% mask-b-to-80%">
        <FlickeringGrid
          squareSize={isMobile ? 2 : 4}
          flickerChance={isMobile ? 0 : 0.2}
          gridGap={isMobile ? 3 : 6}
          color="#ff7373"
        />
      </div>
      <h1 className="font-FunnelDisplay -mt-10 p-5 text-center">
        Empowering the next generation of engineers
      </h1>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export const Callout = ({
  text,
  className,
  theme = "sky",
}: {
  text: string | React.ReactNode;
  className?: string;
  theme?: "sky" | "amber" | "red";
}) => {
  const themes = {
    sky: {
      border: "border-sky-200/50",
      text: "text-sky-950",
      bg: "bg-sky-50/5",
      icon: "text-sky-600",
      line: "bg-sky-500",
    },
    amber: {
      border: "border-amber-200/50",
      text: "text-amber-950",
      bg: "bg-amber-50/5",
      icon: "text-amber-600",
      line: "bg-amber-500",
    },
    red: {
      border: "border-red-200/60",
      text: "text-red-950",
      bg: "bg-red-50/30",
      icon: "text-red-600",
      line: "bg-red-500",
    },
  };
  return (
    <div
      className={cn(
        `_info flex gap-2 rounded-lg border ${themes[theme]["border"]} ${themes[theme]["text"]} ${themes[theme]["bg"]} 0 p-4 pl-0 [&_p]:text-[0.9rem]`,
        className,
      )}
    >
      <div
        className={`_line mx-1 w-1 rounded-full ${themes[theme]["line"]} p-1`}
      />
      <div className="_icon+text flex items-center">
        <div className="_icon mr-4">
          <Info className={`${themes[theme]["icon"]}`} size={18} />
        </div>
        {text}
      </div>
    </div>
  );
};

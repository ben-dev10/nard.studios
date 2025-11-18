/* eslint-disable @next/next/no-img-element */
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type ImagesProp = {
  tags: string[];
  img: {
    alt: string;
    src: string;
    width: number;
    height: number;
  };
};

type LightboxProps = {
  imgs: ImagesProp[];
  navigate: (dir: number) => void;
  selectedImg: number | null;
  setSelectedImg: (value: React.SetStateAction<number | null>) => void;
};

export default function Lightbox({
  imgs,
  navigate,
  selectedImg,
  setSelectedImg,
}: LightboxProps) {
  return (
    <AnimatePresence>
      {selectedImg !== null && (
        <motion.div
          className="_light-box--overlay fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[25px]"
          onClick={() => setSelectedImg(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="_close-icon absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="_img-box xs:max-w-5xl max-h-[60vh] w-full px-16">
            <img
              src={imgs[selectedImg]["img"]["src"]}
              alt={`Image ${selectedImg + 1}`}
              className="mb-5 max-h-[60vh] w-full rounded object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="_img-metadata">
              <div className="_desc-metadata flex items-center gap-2">
                <p className="text-white/90">Description</p>
                <p className="text-neutral-400">
                  {imgs[selectedImg]["img"].alt}
                </p>
              </div>
              <div className="_tags-metadata mt-4 flex items-center gap-4">
                <p className="text-white/90">Tags</p>
                <p className="text-muted-foreground">
                  {imgs[selectedImg]["tags"].map((tag, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded-full bg-neutral-500 p-1 px-3 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="_controls absolute bottom-[10vh]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="ml-6 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          <div className="_list-indicator absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {selectedImg + 1} / {imgs.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

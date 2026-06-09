"use client";

import createGlobe from "cobe";
import { CSSProperties, useEffect, useRef } from "react";

const GHANA: [number, number] = [7.9465, -1.0232];

export default function GhanaGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;
    let phi = -1.55;
    let pointerDown = false;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi, // horizontal rotation of globe
      theta: 0.1, // vertical rotation of globe
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      glowColor: [1, 1, 1],
      markerColor: [0, 165, 255],
      markers: [
        {
          id: "ghana",
          location: GHANA,
          size: 0.04,
        },
      ],
    });

    const render = () => {
      globe.update({
        phi,
      });

      frame = requestAnimationFrame(render);
    };

    let frame = requestAnimationFrame(render);

    const handlePointerDown = () => {
      pointerDown = true;
    };

    const handlePointerUp = () => {
      pointerDown = false;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!pointerDown) return;

      phi += e.movementX * 0.01;

      globe.update({
        phi,
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      width = canvas.offsetWidth;

      globe.update({
        width: width * 2,
        height: width * 2,
      });
    });

    resizeObserver.observe(canvas);

    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(frame);

      resizeObserver.disconnect();

      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);

      globe.destroy();
    };
  }, []);

  return (
    <div className="relative h-full">
      <div className="-mt-5 -mr-15 ml-auto @max-[400px]:mt-15">
        <canvas
          ref={canvasRef}
          className="h-full w-full cursor-grab active:cursor-grabbing"
        />

        <div
          className="pointer-events-none absolute rounded-full bg-black/80 px-2 py-1 text-xs text-white backdrop-blur"
          style={
            {
              positionAnchor: "--cobe-ghana",
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% -8px",
              opacity: "var(--cobe-visible-ghana, 0)",
            } as CSSProperties
          }
        >
          Ghana
          <div className="_pointer absolute top-[95%] left-[50%] size-0 -translate-x-1/2 rotate-180 border-r-[3px] border-b-[6px] border-l-[3px] border-black border-r-transparent border-l-transparent" />
        </div>
      </div>
    </div>
  );
}

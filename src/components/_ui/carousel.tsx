"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Convert children to array to get count
  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  const scrollToIndex = (index: number): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Calculate scroll position to center the card
      const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }

    setCurrentIndex(index);
  };

  const handlePrevious = (): void => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = (): void => {
    const newIndex = Math.min(totalCards - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const updateCurrentIndex = (): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    const cardElements = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardElements.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  };

  const handleScroll = (): void => {
    updateCurrentIndex();
  };

  useEffect(() => {
    // Center first card on mount
    if (scrollContainerRef.current) {
      setTimeout(() => scrollToIndex(0), 100);
    }
  }, []);

  return (
    <div className={`_carousel relative w-full overflow-hidden ${className}`}>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(1.5rem, calc(50vw - 200px))",
          paddingRight: "max(1.5rem, calc(50vw - 200px))",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {children}
      </div>

      <div className="_controls mt-8 flex items-center justify-center gap-4 pb-16">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="rounded-full bg-neutral-200/60 p-1.5 transition-all duration-200 hover:bg-neutral-200/90 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous card"
        >
          <ArrowLeft className="size-4 text-gray-700" />
        </button>

        <div className="_dot-indicators flex gap-2 rounded-full bg-neutral-200/40 p-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className="group relative"
              aria-label={`Go to card ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gray-900"
                    : "w-2 bg-gray-300 hover:bg-neutral-400"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
          className="rounded-full bg-neutral-200/70 p-1.5 transition-all duration-200 hover:bg-neutral-200/90 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next card"
        >
          <ArrowRight className="text-foreground size-4" />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

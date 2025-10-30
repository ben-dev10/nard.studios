import React from "react";

// Define the allowed HTML elements
type SectionElement = "section" | "div" | "footer" | "header" | "main" | "nav";

// Define the container size options
type ContainerSize = "5xl" | "6xl" | "7xl" | "8xl" | "none";

// Generic component props that extend HTML attributes
type RootElementProps<T extends SectionElement = "section"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  container?: ContainerSize;
};

// Root Element Component
const RootElement = <T extends SectionElement = "section">({
  as,
  className = "bg-background",
  children,
  ...props
}: RootElementProps<T>) => {
  const Element = (as || "section") as React.ElementType;

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};

// Container Component
const Container: React.FC<ContainerProps> = ({
  container = "7xl",
  className = "",
  children,
  ...props
}) => {
  const containerDataType = `container-${container}`;

  return (
    <div datatype={containerDataType} className={className} {...props}>
      {children}
    </div>
  );
};

// Compound component
const Section = {
  RootElement,
  Container,
};

export default Section;

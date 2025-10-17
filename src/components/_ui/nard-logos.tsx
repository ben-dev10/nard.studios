export const NardLogo = ({
  variant = "dark",
}: {
  variant?: "light" | "dark";
  simpleSizeClass?: string;
  roundedSizeClass?: string;
  simpleFill?: string;
  roundedFill?: string;
}) => {
  return (
    <a href="#">
      {variant == "light" ? (
        //  simple-svg
        <p>Light</p>
      ) : (
        // rounded-scg
        <p>dark</p>
      )}
    </a>
  );
};

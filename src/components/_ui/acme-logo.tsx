export const ACMELogo = ({
  variant = "simple",
  simpleSizeClass = "size-6",
  roundedSizeClass = "size-8",
  simpleFill = "#416cb4",
  roundedFill = "#416cb4",
}: {
  variant?: "simple" | "rounded";
  simpleSizeClass?: string;
  roundedSizeClass?: string;
  simpleFill?: string;
  roundedFill?: string;
}) => {
  return (
    <a href="#">
      {variant == "simple" ? (
        //  simple-svg
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4.92 5.04"
          className={`acme-logo--simple ${simpleSizeClass}`}
        >
          <defs>
            <style>
              {`
              .cls-1 {
                  // fill: #fff;
                  // stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: .2px;
                }
            `}
            </style>
          </defs>
          <g id="acme-logo">
            <path
              fill={simpleFill}
              className="cls-1"
              d="M4.78,2.92c-.41.03-.96.31-1.34.53-.03-.23-.08-.42-.12-.57-1.41.4-1.79,1.99-1.79,1.99l-1.43.07C.45,2.93,2.11,1.53,2.11,1.53l-1.6.46c-.06-.41.37-1.14.37-1.14.39-.26,1.08-.63,1.99-.72.36-.04.68-.03.96,0,.59,1.14.85,2.07.95,2.79Z"
            />
            <path
              fill={simpleFill}
              className="cls-1"
              d="M4.82,3.85c-.03.64-.19.95-.19.95l-1.43.12c.09-.18.19-.47.23-.84.61-.35,1.1-.32,1.39-.23Z"
            />
          </g>
        </svg>
      ) : (
        // rounded-scg
        <svg
          className={`acme-logo-rounded ${roundedSizeClass}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.94 7.94"
        >
          <defs>
            <style>
              {`  
                .cls-1 {
                  // fill: #416cb4;
                  stroke-width: 0px;
                }
  
                .cls-2 {
                  fill: #fff;
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: .2px;
                }
             `}
            </style>
          </defs>
          <g id="acme-logo-round-2">
            <circle
              fill={roundedFill}
              className="cls-1"
              cx="3.97"
              cy="3.97"
              r="3.97"
            />
            <g>
              <path
                className="cls-2"
                d="M6.25,3.86c-.41.03-.96.31-1.34.53-.03-.23-.08-.42-.12-.57-1.41.4-1.79,1.99-1.79,1.99l-1.43.07c.35-2.01,2.01-3.41,2.01-3.41l-1.6.46c-.06-.41.37-1.14.37-1.14.39-.26,1.08-.63,1.99-.72.36-.04.68-.03.96,0,.59,1.14.85,2.07.95,2.79Z"
              />
              <path
                className="cls-2"
                d="M6.29,4.79c-.03.64-.19.95-.19.95l-1.43.12c.09-.18.19-.47.23-.84.61-.35,1.1-.32,1.39-.23Z"
              />
            </g>
          </g>
        </svg>
      )}
    </a>
  );
};

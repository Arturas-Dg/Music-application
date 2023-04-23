import React from 'react';
const SVGButton = (props) => (
  <svg
    className="PlayButton"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88 88"
    width={100}
    height={100}
    {...props}
  >
    <path
      style={{
        textIndent: 0,
        textTransform: "none",
        blockProgression: "tb",
      }}
      d="M44 5.28c-21.364 0 -38.72 17.356 -38.72 38.72S22.636 82.72 44 82.72 82.72 65.364 82.72 44 65.364 5.28 44 5.28zm0 3.52c19.461 0 35.2 15.739 35.2 35.2S63.461 79.2 44 79.2 8.8 63.461 8.8 44 24.539 8.8 44 8.8zm-13.2 18.48v33.44L60.72 44 30.8 27.28z"
      overflow="visible"
      color="#000"
    />
  </svg>
);
export default SVGButton;
import * as React from "react";

function SvgDoubleChevronLeft(props) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.85 28l1.461-1.455L5.807 14 18.311 1.455 16.851 0 2.896 14l13.955 14z"
        // fill="#97C8EB"
      />
      <path
        d="M23.643 28l1.46-1.455L12.6 14 25.104 1.455 23.643 0 9.688 14l13.954 14z"
        // fill="#97C8EB"
      />
    </svg>
  );
}

export default SvgDoubleChevronLeft;

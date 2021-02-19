import * as React from "react";

function SvgGmailIcon(props) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={50}
        height={50}
        rx={25}
        fill="url(#gmailIcon_svg__paint0_linear)"
      />
      <path d="M34 16H16v18h18V16z" fill="#ECEFF1" />
      <path d="M25 26.893L34 34V19.969l-9 6.924z" fill="#CFD8DC" />
      <path
        d="M34.75 16H34l-9 7.107L16 16h-.75A2.25 2.25 0 0013 18.25v13.5A2.25 2.25 0 0015.25 34H16V19.969l9 6.922 9-6.923V34h.75A2.25 2.25 0 0037 31.75v-13.5A2.25 2.25 0 0034.75 16z"
        fill="#F44336"
      />
      <defs>
        <linearGradient
          id="gmailIcon_svg__paint0_linear"
          x1={0}
          y1={0}
          x2={77.333}
          y2={73}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.094} stopColor="#fff" />
          <stop offset={0.547} stopColor="#757E82" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgGmailIcon;

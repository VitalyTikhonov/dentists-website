import * as React from "react";

function SvgTelegramIcon(props) {
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
        fill="url(#telegramIcon_svg__paint0_linear)"
      />
      <path
        d="M22.417 27.962l-.397 5.135c.568 0 .814-.224 1.11-.494l2.662-2.34 5.518 3.716c1.012.519 1.725.246 1.998-.856l3.622-15.609h.001c.321-1.377-.54-1.915-1.527-1.577l-21.29 7.496c-1.453.519-1.43 1.264-.247 1.601l5.443 1.557 12.643-7.275c.595-.363 1.136-.162.691.2l-10.227 8.446z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="telegramIcon_svg__paint0_linear"
          x1={0}
          y1={0}
          x2={48}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.145} stopColor="#32AFED" stopOpacity={0.3} />
          <stop offset={0.87} stopColor="#186185" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgTelegramIcon;

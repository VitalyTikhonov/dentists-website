import * as React from "react";

function SvgFacebookIcon(props) {
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
        fill="url(#facebookIcon_svg__paint0_linear)"
      />
      <path
        d="M34.188 13H15.811A2.816 2.816 0 0013 15.813v18.374A2.816 2.816 0 0015.813 37h18.374A2.816 2.816 0 0037 34.187V15.814A2.816 2.816 0 0034.187 13zm.937 21.188c0 .516-.42.937-.938.937h-5.343v-7.64h2.896l.479-2.907h-3.375v-2.015c0-.796.61-1.407 1.406-1.407h1.922V18.25H30.25a4.312 4.312 0 00-4.311 4.32v2.008h-2.814v2.906h2.814v7.641H15.812a.939.939 0 01-.937-.938V15.814c0-.517.42-.938.938-.938h18.374c.517 0 .938.42.938.938v18.374z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="facebookIcon_svg__paint0_linear"
          x1={0}
          y1={4}
          x2={50}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.182} stopColor="#26478D" stopOpacity={0.3} />
          <stop offset={0.838} stopColor="#26478D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgFacebookIcon;

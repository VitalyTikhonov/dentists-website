import * as React from "react";

function SvgWhatsappIcon(props) {
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
        fill="url(#whatsappIcon_svg__paint0_linear)"
      />
      <path
        d="M25.003 12h-.006C17.829 12 12 17.83 12 25c0 2.844.916 5.48 2.475 7.62l-1.62 4.83 4.997-1.598A12.888 12.888 0 0025.003 38C32.171 38 38 32.168 38 25s-5.829-13-12.997-13zm7.565 18.358c-.314.885-1.559 1.62-2.552 1.834-.679.145-1.566.26-4.553-.978-3.82-1.583-6.28-5.465-6.472-5.717-.184-.252-1.544-2.055-1.544-3.92 0-1.866.947-2.775 1.33-3.165.313-.32.831-.466 1.328-.466.161 0 .306.008.436.014.382.017.574.04.825.642.314.756 1.078 2.622 1.169 2.813.093.192.185.452.055.704-.122.26-.229.375-.42.596-.193.221-.375.39-.566.628-.176.206-.374.427-.153.809.221.373.985 1.62 2.11 2.62 1.45 1.293 2.627 1.706 3.048 1.881.313.13.687.1.916-.145.291-.313.65-.833 1.016-1.345.26-.367.588-.413.933-.283.35.122 2.208 1.04 2.59 1.23.382.192.634.283.726.444.091.16.091.916-.222 1.804z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="whatsappIcon_svg__paint0_linear"
          x1={0}
          y1={0}
          x2={50}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.309} stopColor="#3AB429" stopOpacity={0.5} />
          <stop offset={0.707} stopColor="#148E0C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgWhatsappIcon;

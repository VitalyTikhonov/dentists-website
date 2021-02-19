import * as React from "react";

function SvgYoutubeIcon(props) {
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
        fill="url(#youtubeIcon_svg__paint0_linear)"
      />
      <g clipPath="url(#youtubeIcon_svg__clip0)">
        <path
          d="M25 33.718h-.007c-.724-.005-7.127-.063-8.94-.554a3.709 3.709 0 01-2.61-2.608c-.475-1.782-.445-5.212-.442-5.486-.003-.273-.033-3.732.44-5.528l.002-.005a3.788 3.788 0 012.606-2.626l.01-.002c1.793-.471 8.208-.53 8.934-.534h.013c.726.005 7.145.063 8.942.555a3.709 3.709 0 012.607 2.604c.492 1.798.447 5.264.442 5.556.003.289.032 3.689-.44 5.48l-.001.004a3.71 3.71 0 01-2.612 2.609l-.005.001c-1.793.472-8.208.53-8.933.534h-.007zm-9.746-13.695c-.417 1.586-.378 5-.377 5.035v.024c-.013.947.03 3.69.377 4.989a1.828 1.828 0 001.287 1.283c1.338.362 6.552.476 8.458.49 1.91-.014 7.133-.125 8.461-.472a1.83 1.83 0 001.285-1.283c.346-1.318.39-4.047.377-4.988v-.03c.017-.958-.017-3.733-.376-5.042v-.004a1.83 1.83 0 00-1.288-1.286c-1.326-.362-6.549-.476-8.459-.49-1.91.014-7.126.125-8.459.472a1.88 1.88 0 00-1.286 1.302zM35.65 30.33h.001zm-13.04-1.488V21.25l6.562 3.797-6.563 3.796z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          id="youtubeIcon_svg__paint0_linear"
          x1={0}
          y1={0}
          x2={50}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.151} stopColor="red" />
          <stop offset={0.661} stopColor="#880808" />
        </linearGradient>
        <clipPath id="youtubeIcon_svg__clip0">
          <path fill="#fff" transform="translate(13 13)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgYoutubeIcon;

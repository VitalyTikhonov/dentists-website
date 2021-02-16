function Pin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      // className="button__pin"
      {...props}
    >
      <linearGradient
        id="grad"
        x1="23%"
        y1="80%"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="5%" stop-color="#97C8EB" class="stop-2" />
        <stop offset="100%" stop-color="#176087" class="stop-1" />
      </linearGradient>
      <path fill={props.useOwnColorScheme && "url(#grad)"} d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm59.313 267.314l-72 72A15.95 15.95 0 01232 344.001c-14.126 0-21.421-17.206-11.313-27.313l60.686-60.687-60.686-60.687c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.248 16.379-6.248 22.627 0l72 72c6.248 6.249 6.248 16.379-.001 22.627z" />
    </svg>
  );
}

export default Pin;

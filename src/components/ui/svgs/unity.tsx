import type { SVGProps } from "react";

const Unity = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="20" fill="#000000" />

    <path
      fill="#FFFFFF"
      d="M127.6 32 48 78.1v91.8L127.6 216 207 169.9V78.1L127.6 32Zm0 24.5 54.7 31.7-20.7 12-34-19.7-34.1 19.7-20.7-12 54.8-31.7Zm-58.4 53.4 20.7 12v39.3l34.1 19.7v23.9l-54.8-31.7v-63.2Zm116.8 0v63.2l-54.7 31.7v-23.9l34-19.7v-39.3l20.7-12Zm-58.4-5.5 34.1 19.7v39.4l-34.1 19.7-34.1-19.7v-39.4l34.1-19.7Z"
    />
  </svg>
);

export { Unity };
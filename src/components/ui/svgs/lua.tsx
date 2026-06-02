import type { SVGProps } from "react";

const Lua = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="20" fill="#000080" />

    <circle cx="128" cy="128" r="76" fill="#fff" />
    <circle cx="128" cy="128" r="58" fill="#000080" />

    <circle cx="94" cy="94" r="22" fill="#fff" />
    <circle cx="94" cy="94" r="15" fill="#000080" />

    <text
      x="128"
      y="188"
      textAnchor="middle"
      fontSize="46"
      fontWeight="700"
      fill="#fff"
      fontFamily="Arial, Helvetica, sans-serif"
    >
      Lua
    </text>
  </svg>
);

export default Lua;
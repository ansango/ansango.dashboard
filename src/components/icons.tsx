// https://icones.js.org/collection/mynaui

import { SVGProps } from "react";

const defaultProps: SVGProps<SVGSVGElement> = {
  className: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
};
const pathDefaultProps: SVGProps<SVGPathElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1.5",
};

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <g {...pathDefaultProps}>
      <path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19H6.133Z"></path>
      <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"></path>
    </g>
  </svg>
);

export const Bookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M7.527 20.841C6.861 21.274 6 20.772 6 19.952V3.942c0-.52.336-.942.75-.942h10.5c.414 0 .75.422.75.942v16.01c0 .82-.861 1.322-1.527.89l-3.946-2.562a.962.962 0 0 0-1.054 0l-3.946 2.56Z"
    ></path>
  </svg>
);

export const Keyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2Zm5 5h10M5 9h3m3 0h3m3 0h2M5 12h2m3 0h3m3 0h3"
    ></path>
  </svg>
);

export const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"
    ></path>
  </svg>
);

export const PlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <g {...pathDefaultProps}>
      <path d="M15.5 12H12m0 0H8.5m3.5 0V8.5m0 3.5v3.5"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </g>
  </svg>
);

export const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path {...pathDefaultProps} d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"></path>
  </svg>
);

export const Feed = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M6 11.25A6.75 6.75 0 0 1 12.75 18M6 6a12 12 0 0 1 12 12m-11.5-.146l.354-.354"
    ></path>
  </svg>
);

export const Tool = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M21 7.86c0-.43-.056-.849-.161-1.246c-.092-.349-.522-.432-.776-.177L18.34 8.16a1.767 1.767 0 1 1-2.5-2.5l1.723-1.722c.255-.255.172-.685-.177-.777a4.86 4.86 0 0 0-5.828 6.326c.071.2.031.424-.118.573L3.3 18.2c-.4.4-.4 1.049 0 1.448L4.352 20.7c.4.4 1.047.4 1.447 0l8.14-8.14c.15-.15.374-.19.573-.119A4.86 4.86 0 0 0 21 7.86Z"
    ></path>
  </svg>
);

export const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <path
      {...pathDefaultProps}
      d="M10 3.007c-2.946.032-4.59.219-5.682 1.311C3 5.636 3 7.758 3 12c0 4.243 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21c4.243 0 6.364 0 7.682-1.318c1.061-1.061 1.268-2.643 1.308-5.434M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25"
    ></path>
  </svg>
);

export const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <g {...pathDefaultProps}>
      <path d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316c1.448-1.084 2.188-2.758 2.188-4.411c0-1.16-.44-2.243-1.204-3.16c-.425-.511.819-3.872-.286-3.359c-1.105.514-2.725 1.198-3.574.947c-.909-.268-1.9-.416-2.936-.416c-.9 0-1.766.111-2.574.317c-1.174.298-2.296-.363-3.426-.848c-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41c.965.722 2.174 1.183 3.527 1.41"></path>
      <path d="M10.37 15.391c-.58.637-.869 1.24-.869 1.813V21m5.671-5.701c.549.719.823 1.364.823 1.936V21M3.5 15.668c.45.054.783.26 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5"></path>
    </g>
  </svg>
);

export const Linkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}>
    <g {...pathDefaultProps}>
      <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Z"></path>
      <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2c1.6 0 1.6 1.375 1.6 2.875v2m-8-8.75v.5"></path>
    </g>
  </svg>
);

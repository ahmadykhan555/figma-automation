import type { SVGProps } from "react";
import { cx } from "../../utils";

/** Card / cool-icon glyph from Figma `cool-icon-15`. */
export function CoolIcon15Icon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26.6667 21.3333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cx("size-card-icon-glyph shrink-0", className)}
      {...props}
    >
      <path
        d="M24 21.3333H2.66667C1.19391 21.3333 0 20.1394 0 18.6667V2.66667C0 1.19391 1.19391 0 2.66667 0H24C25.4728 0 26.6667 1.19391 26.6667 2.66667V18.6667C26.6667 20.1394 25.4728 21.3333 24 21.3333ZM2.66667 10.6667V18.6667H24V10.6667H2.66667ZM2.66667 2.66667V5.33333H24V2.66667H2.66667ZM14.6667 16H5.33333V13.3333H14.6667V16Z"
        fill="currentColor"
      />
    </svg>
  );
}

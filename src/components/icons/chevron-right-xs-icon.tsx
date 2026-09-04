import type { SVGProps } from "react";
import { cx } from "../../utils";

/** Chevron / arrow pointing right from Figma `chevron-right-xs`. */
export function ChevronRightXsIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 9.14286 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cx("h-4 w-2.5 shrink-0", className)}
      {...props}
    >
      <path
        d="M0 13.7143L5.71428 8L0 2.28571L1.14286 0L9.14286 8L1.14286 16L0 13.7143Z"
        fill="currentColor"
      />
    </svg>
  );
}

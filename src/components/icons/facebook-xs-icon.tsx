import type { SVGProps } from "react";
import { cx } from "../../utils";

export function FacebookXsIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cx("size-4 shrink-0", className)}
      {...props}
    >
      <path
        d="M15.502 8.05C15.502 3.604 11.92 0 7.502 0C3.082 0.001 -0.5 3.604 -0.5 8.051C-0.5 12.068 2.426 15.398 6.25 16.002V10.377H4.22V8.051H6.252V6.276C6.252 4.259 7.447 3.145 9.274 3.145C10.15 3.145 11.065 3.302 11.065 3.302V5.282H10.056C9.063 5.282 8.753 5.903 8.753 6.54V8.05H10.971L10.617 10.376H8.752V16.001C12.576 15.397 15.502 12.067 15.502 8.05Z"
        fill="currentColor"
      />
    </svg>
  );
}

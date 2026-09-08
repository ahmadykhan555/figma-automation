/**
 * @generated from Figma node 2984:6844
 */
import type { HTMLAttributes } from "react";
import { cx } from "../../../utils";

export type HeroIndicatorProps = {
  active?: boolean;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children" | "className">;

export function HeroIndicator({
  active = false,
  className,
  ...rest
}: HeroIndicatorProps) {
  return (
    <span
      aria-hidden
      className={cx(
        "h-2.5 w-hero-indicator bg-white",
        !active && "opacity-50",
        className,
      )}
      {...rest}
    />
  );
}

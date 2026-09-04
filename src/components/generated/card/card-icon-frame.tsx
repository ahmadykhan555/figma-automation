/**
 * @generated from Figma node 2787:2797
 */
import type { ReactNode } from "react";
import { cx } from "../../../utils";

export type CardIconFrameVariant = "square" | "circle" | "float";

export type CardIconFrameProps = {
  variant: CardIconFrameVariant;
  children?: ReactNode;
  className?: string;
};

const frameClass: Record<CardIconFrameVariant, string> = {
  square:
    "inline-flex items-center justify-center rounded-card-icon px-card-icon-x py-card-icon-y",
  circle: "flex size-card-icon-circle items-center justify-center rounded-full",
  float:
    "flex size-card-icon-float items-center justify-center rounded-full p-card-float shadow-card",
};

export function CardIconFrame({
  variant,
  children,
  className,
}: CardIconFrameProps) {
  return (
    <div
      className={cx(
        "shrink-0 overflow-clip bg-danger",
        frameClass[variant],
        className,
      )}>
      {children}
    </div>
  );
}

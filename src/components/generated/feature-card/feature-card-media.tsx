/**
 * @generated from Figma node 2787:3173
 */
import type { ReactNode } from "react";
import { cx } from "../../../utils";

export type FeatureCardMediaFrame =
  | "number"
  | "circle"
  | "square"
  | "image";

export type FeatureCardMediaSize = "md" | "sm";

export type FeatureCardMediaProps = {
  frame: FeatureCardMediaFrame;
  size?: FeatureCardMediaSize;
  children?: ReactNode;
  className?: string;
};

const sizeClass: Record<
  FeatureCardMediaFrame,
  Record<FeatureCardMediaSize, string>
> = {
  number: {
    md: "size-feature-media",
    sm: "size-feature-media-sm",
  },
  circle: {
    md: "size-feature-media",
    sm: "size-feature-media-sm",
  },
  square: {
    md: "size-feature-media",
    sm: "size-feature-media-sm",
  },
  image: {
    md: "h-feature-media-image-h w-feature-media-image",
    sm: "size-feature-media-sm",
  },
};

const frameClass: Record<FeatureCardMediaFrame, string> = {
  number: "rounded-full bg-feature-media-muted text-danger",
  circle: "rounded-full bg-danger text-white",
  square: "rounded-card-icon bg-danger text-white",
  image: "rounded-feature-media-image bg-transparent",
};

export function FeatureCardMedia({
  frame,
  size = "md",
  children,
  className,
}: FeatureCardMediaProps) {
  return (
    <div
      className={cx(
        "inline-flex shrink-0 items-center justify-center overflow-clip",
        sizeClass[frame][size],
        frameClass[frame],
        className,
      )}
    >
      {children}
    </div>
  );
}

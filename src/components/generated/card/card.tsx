/**
 * @generated from Figma node 2787:2797
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";
import { CardIconFrame, type CardIconFrameVariant } from "./card-icon-frame";

export type CardSurface = "elevated" | "naked";
export type CardTone = "light" | "dark";
export type CardAlign = "start" | "center";
export type CardSize = "md" | "sm";
export type CardIconFrameOption = CardIconFrameVariant | "none";

export type CardProps = {
  heading?: ReactNode;
  description?: ReactNode;
  titleIcon?: ReactNode;
  CTA?: ReactNode;
  iconFrame?: CardIconFrameOption;
  surface?: CardSurface;
  tone?: CardTone;
  align?: CardAlign;
  size?: CardSize;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Card({
  heading,
  description,
  titleIcon,
  CTA,
  iconFrame = "square",
  surface = "elevated",
  tone = "light",
  align = "start",
  size = "md",
  className,
  ...rest
}: CardProps) {
  const dark = tone === "dark";
  const centered = align === "center";
  const floating = iconFrame === "float";
  const activeFrame = titleIcon && iconFrame !== "none" ? iconFrame : null;

  return (
    <article
      className={cx(
        "relative flex flex-col gap-5 font-sans",
        size === "sm" ? "w-card-sm" : "w-card",
        centered ? "items-center" : "items-start",
        surface === "elevated" && "bg-surface px-10 py-card-y shadow-card",
        surface === "naked" && "py-card-y pr-6",
        dark && surface === "elevated" && "bg-surface-dark",
        floating ? "mt-8 overflow-visible" : "overflow-clip",
        className,
      )}
      {...rest}>
      {activeFrame ? (
        <CardIconFrame
          variant={activeFrame}
          className={cx(
            floating &&
              cx(
                "absolute top-0 -translate-y-1/2",
                centered ? "left-1/2 -translate-x-1/2" : "left-0",
              ),
          )}>
          {titleIcon}
        </CardIconFrame>
      ) : null}

      {heading ? (
        <h3
          className={cx(
            size === "sm" ? "text-h5" : "text-h3",
            dark ? "text-white" : "text-text",
            centered && "text-center",
          )}>
          {heading}
        </h3>
      ) : null}

      <div className='h-0.5 w-card-rule shrink-0 bg-danger' aria-hidden />

      {description ? (
        <div
          className={cx(
            "text-sm font-normal leading-5",
            dark ? "text-white" : "text-text-muted",
            centered && "text-center",
          )}>
          {description}
        </div>
      ) : null}

      {CTA}
    </article>
  );
}

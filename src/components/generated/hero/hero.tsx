/**
 * @generated from Figma node 2984:6817
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type HeroProps = {
  background?: ReactNode;
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  CTA?: ReactNode;
  controlPrev?: ReactNode;
  controlNext?: ReactNode;
  indicators?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Hero({
  background,
  eyebrow,
  heading,
  description,
  CTA,
  controlPrev,
  controlNext,
  indicators,
  className,
  ...rest
}: HeroProps) {
  return (
    <section
      className={cx(
        "relative overflow-clip rounded-btn border border-hero-border bg-surface font-sans",
        className,
      )}
      {...rest}
    >
      <div className="relative min-h-hero-min w-full">
        {background ? (
          <div className="absolute inset-0">{background}</div>
        ) : null}

        <div className="relative z-10 mx-auto flex min-h-hero-min max-w-hero-content flex-col justify-center px-6 py-hero-y">
          <div className="flex max-w-hero-copy flex-col items-start gap-hero">
            {eyebrow ? (
              <p className="text-h5 text-white">{eyebrow}</p>
            ) : null}
            {heading ? (
              <h1 className="text-hero text-white">{heading}</h1>
            ) : null}
            {description ? (
              <div className="text-hero-body text-hero-muted">{description}</div>
            ) : null}
            {CTA}
          </div>
        </div>

        {controlPrev ? (
          <div className="absolute top-1/2 left-10 z-20 -translate-y-1/2 text-white">
            {controlPrev}
          </div>
        ) : null}
        {controlNext ? (
          <div className="absolute top-1/2 right-10 z-20 -translate-y-1/2 text-white">
            {controlNext}
          </div>
        ) : null}
        {indicators ? (
          <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-px">
            {indicators}
          </div>
        ) : null}
      </div>
    </section>
  );
}

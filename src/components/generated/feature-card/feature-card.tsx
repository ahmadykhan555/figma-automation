/**
 * @generated from Figma node 2787:3173
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";
import {
  FeatureCardMedia,
  type FeatureCardMediaFrame,
} from "./feature-card-media";

export type FeatureCardTone = "light" | "dark";
export type FeatureCardSize = "md" | "sm";
export type FeatureCardAccent = "none" | "border";
export type FeatureCardMediaOption = FeatureCardMediaFrame | "none";

export type FeatureCardProps = {
  heading?: ReactNode;
  description?: ReactNode;
  media?: ReactNode;
  mediaFrame?: FeatureCardMediaOption;
  tone?: FeatureCardTone;
  accent?: FeatureCardAccent;
  size?: FeatureCardSize;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function FeatureCard({
  heading,
  description,
  media,
  mediaFrame = "circle",
  tone = "light",
  accent = "none",
  size = "md",
  className,
  ...rest
}: FeatureCardProps) {
  const dark = tone === "dark";
  const compact = size === "sm";
  const showMedia = media != null && mediaFrame !== "none";

  return (
    <article
      className={cx(
        "flex items-center gap-feature-card-gap overflow-clip p-feature-card-pad font-sans",
        compact ? "w-feature-card-sm" : "w-feature-card",
        dark ? "bg-surface-dark" : "bg-surface",
        accent === "border" && "border-l-[3px] border-danger",
        className,
      )}
      {...rest}
    >
      {showMedia ? (
        <FeatureCardMedia frame={mediaFrame} size={size}>
          {media}
        </FeatureCardMedia>
      ) : null}

      <div className="flex min-w-0 flex-col gap-feature-card-copy">
        {heading ? (
          <h3
            className={cx(
              compact ? "text-btn-label" : "text-h3",
              dark ? "text-white" : "text-text",
            )}
          >
            {heading}
          </h3>
        ) : null}

        {description ? (
          <div
            className={cx(
              "font-normal",
              compact
                ? "text-xs leading-4 tracking-[0.2px]"
                : "text-sm leading-5 tracking-[0.2px]",
              dark ? "text-white" : "text-text-muted",
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
    </article>
  );
}

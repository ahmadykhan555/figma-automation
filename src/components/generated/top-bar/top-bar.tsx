/**
 * @generated from Figma node 2984:6696
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type TopBarProps = {
  start?: ReactNode;
  center?: ReactNode;
  end?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function TopBar({
  start,
  center,
  end,
  className,
  ...rest
}: TopBarProps) {
  return (
    <div
      className={cx(
        "flex w-full items-center justify-between bg-surface-dark px-6 py-2 font-sans text-btn-label text-white",
        className,
      )}
      {...rest}
    >
      {start ? (
        <div className="flex flex-wrap items-center gap-2.5">{start}</div>
      ) : (
        <span />
      )}
      {center ? <div className="text-center">{center}</div> : <span />}
      {end ? (
        <div className="flex flex-wrap items-center gap-2.5">{end}</div>
      ) : (
        <span />
      )}
    </div>
  );
}

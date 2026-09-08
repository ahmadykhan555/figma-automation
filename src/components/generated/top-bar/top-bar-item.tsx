/**
 * @generated from Figma node 2984:6701
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type TopBarItemProps = {
  iconStart?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function TopBarItem({
  iconStart,
  children,
  className,
  ...rest
}: TopBarItemProps) {
  return (
    <div
      className={cx(
        "inline-flex items-center gap-btn-gap overflow-clip rounded-btn p-2.5 font-sans text-btn-label text-white",
        className,
      )}
      {...rest}
    >
      {iconStart}
      {children}
    </div>
  );
}

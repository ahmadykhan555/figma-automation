/**
 * @generated from Figma node 2984:6796
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type NavbarActionProps = {
  children?: ReactNode;
  iconStart?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export function NavbarAction({
  children,
  iconStart,
  className,
  type = "button",
  ...rest
}: NavbarActionProps) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center gap-btn-gap overflow-clip rounded-btn-pill p-btn-icon font-sans text-btn text-btn-label",
        className,
      )}
      {...rest}
    >
      {iconStart}
      {children}
    </button>
  );
}

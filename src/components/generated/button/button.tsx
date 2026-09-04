import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type ButtonVariant = "filled" | "outlined";
export type ButtonRadius = "default" | "pill";

export type ButtonProps = {
  children?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const variantClass: Record<ButtonVariant, string> = {
  filled: "border border-transparent bg-btn text-btn-fg",
  outlined: "border border-btn bg-transparent text-btn",
};

const radiusClass: Record<ButtonRadius, string> = {
  default: "rounded-btn",
  pill: "rounded-btn-pill",
};

export function Button({
  children,
  iconStart,
  iconEnd,
  variant = "filled",
  radius = "default",
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const iconOnly = !children && (!!iconStart || !!iconEnd);

  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center justify-center overflow-clip font-sans text-btn-label",
        iconOnly ? "p-btn-icon" : "gap-btn-gap px-5 py-2.5",
        variantClass[variant],
        radiusClass[radius],
        className,
      )}
      {...rest}
    >
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
}

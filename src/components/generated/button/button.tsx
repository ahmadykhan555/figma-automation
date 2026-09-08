/**
 * @generated from Figma node 2787:305
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type ButtonVariant = "filled" | "outlined";
export type ButtonRadius = "default" | "pill";
export type ButtonTone = "brand" | "success";
export type ButtonSize = "sm" | "lg";

export type ButtonProps = {
  children?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  tone?: ButtonTone;
  size?: ButtonSize;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const variantClass: Record<ButtonVariant, Record<ButtonTone, string>> = {
  filled: {
    brand: "border border-transparent bg-btn text-btn-fg",
    success: "border border-transparent bg-success text-white",
  },
  outlined: {
    brand: "border border-btn bg-transparent text-btn",
    success: "border border-success bg-transparent text-success",
  },
};

const radiusClass: Record<ButtonRadius, string> = {
  default: "rounded-btn",
  pill: "rounded-btn-pill",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "text-btn-label",
  lg: "px-10 py-4 text-h3",
};

export function Button({
  children,
  iconStart,
  iconEnd,
  variant = "filled",
  radius = "default",
  tone = "brand",
  size = "sm",
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const iconOnly = !children && (!!iconStart || !!iconEnd);

  return (
    <button
      type={type}
      className={cx(
        "inline-flex items-center justify-center overflow-clip font-sans",
        iconOnly ? "p-btn-icon" : size === "sm" ? "gap-btn-gap px-5 py-2.5" : "gap-btn-gap",
        sizeClass[size],
        variantClass[variant][tone],
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

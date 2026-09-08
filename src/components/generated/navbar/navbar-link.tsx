/**
 * @generated from Figma node 2984:6735
 */
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type NavbarLinkTone = "muted" | "strong";

export type NavbarLinkProps = {
  children?: ReactNode;
  iconEnd?: ReactNode;
  tone?: NavbarLinkTone;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">;

const toneClass: Record<NavbarLinkTone, string> = {
  muted: "font-bold text-text-muted",
  strong: "font-medium text-text",
};

export function NavbarLink({
  children,
  iconEnd,
  tone = "muted",
  className,
  ...rest
}: NavbarLinkProps) {
  return (
    <a
      className={cx(
        "inline-flex items-center gap-1 font-sans text-btn-label tracking-wide",
        toneClass[tone],
        className,
      )}
      {...rest}
    >
      {children}
      {iconEnd}
    </a>
  );
}

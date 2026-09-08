/**
 * @generated from Figma node 2984:6726
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type NavbarProps = {
  brand?: ReactNode;
  nav?: ReactNode;
  actions?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Navbar({
  brand,
  nav,
  actions,
  className,
  ...rest
}: NavbarProps) {
  return (
    <nav
      className={cx(
        "flex w-full items-center gap-8 bg-surface px-10 py-4 font-sans",
        className,
      )}
      {...rest}
    >
      {brand ? (
        <div className="shrink-0 text-h3 text-text">{brand}</div>
      ) : null}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-8">
        {nav ? (
          <div className="flex flex-wrap items-center gap-4">{nav}</div>
        ) : (
          <span />
        )}
        {actions ? (
          <div className="flex shrink-0 items-center text-btn">{actions}</div>
        ) : null}
      </div>
    </nav>
  );
}

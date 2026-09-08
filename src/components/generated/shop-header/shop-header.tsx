/**
 * @generated from Figma node 2984:6691
 */
import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../../utils";

export type ShopHeaderProps = {
  topBar?: ReactNode;
  navbar?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function ShopHeader({
  topBar,
  navbar,
  children,
  className,
  ...rest
}: ShopHeaderProps) {
  return (
    <header className={cx("relative w-full font-sans", className)} {...rest}>
      {topBar}
      {navbar}
      {children}
    </header>
  );
}

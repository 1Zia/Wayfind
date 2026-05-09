"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  arrow?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] disabled:opacity-50 disabled:pointer-events-none";

const variantStyles = {
  primary: "bg-foreground text-background hover:scale-[1.03] hover:opacity-95",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  outline:
    "bg-transparent text-foreground border border-border hover:border-foreground hover:bg-muted",
};

const sizeStyles = {
  sm: "h-8 px-4 text-[12px]",
  md: "h-10 px-5 text-[13px]",
  lg: "h-12 px-7 text-[14px]",
};

export function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  external = false,
  arrow = false,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
  const iconSize = size === "lg" ? 16 : 14;

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight size={iconSize} strokeWidth={2} /> : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} data-cursor-hover className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} data-cursor-hover className={classes}>
      {inner}
    </button>
  );
}

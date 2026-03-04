import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-white/15 text-foreground hover:bg-white/25 border border-white/20 shadow-lg",
  secondary:
    "glass border-[var(--glass-border)] text-[var(--foreground)] hover:bg-white/5",
  ghost:
    "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  download,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium transition-all duration-200";

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        download={download}
        target={href.startsWith("http") || download ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

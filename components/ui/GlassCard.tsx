import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  strong?: boolean;
};

export function GlassCard({
  children,
  className = "",
  strong = false,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl transition-[border-color,box-shadow] duration-300 ${strong ? "glass-strong" : "glass"} hover:border-white/30 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_20px_-4px_rgba(255,255,255,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

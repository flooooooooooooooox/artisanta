import type { ReactNode } from "react";

function Sparkle({ className, delay, size = 18 }: { className: string; delay: string; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`animate-twinkle pointer-events-none absolute text-brand ${className}`}
      style={{ animationDelay: delay }}
    >
      <path d="M12 2c.4 4.3 1.3 5.5 5.8 6.1-4.5.6-5.4 1.8-5.8 6.1-.4-4.3-1.3-5.5-5.8-6.1 4.5-.6 5.4-1.8 5.8-6.1z" />
    </svg>
  );
}

export default function SparkleHeading({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <Sparkle className="-left-6 -top-3" delay="0s" size={20} />
      <Sparkle className="-right-5 top-0" delay="1.1s" size={14} />
      <Sparkle className="-bottom-2 right-2" delay="2s" size={12} />
      {children}
    </span>
  );
}

import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="WayFind home"
      className={`inline-flex items-center text-foreground transition-opacity hover:opacity-80 ${className}`}
      data-cursor-hover
    >
      <svg width="0" height="0" className="absolute">
        <filter id="remove-white" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -1 -1 -1 1 0"
          />
        </filter>
      </svg>
      <Image
        src="/wayfind-logo.svg"
        alt="WayFind"
        width={140}
        height={32}
        priority
        unoptimized
        className="h-11 md:h-12 w-auto"
        style={{ filter: "url(#remove-white)" }}
      />
    </Link>
  );
}

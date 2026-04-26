"use client";

import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  /** Altura aproximada (Tailwind) — navbar usa md, footer um pouco maior opcional */
  size?: "sm" | "md";
};

const heightClass = {
  sm: "h-8",
  md: "h-9 sm:h-10",
} as const;

export function SiteLogo({ className = "", size = "md" }: SiteLogoProps) {
  return (
    <Link href="/" className={`group flex w-fit items-center ${className}`}>
      <Image
        src="/logo.jpg"
        alt="Redobrai"
        width={200}
        height={60}
        priority
        className={`w-auto object-contain object-left ${heightClass[size]}`}
        sizes="(max-width: 768px) 160px, 200px"
      />
    </Link>
  );
}

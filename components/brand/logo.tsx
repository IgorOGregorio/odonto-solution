import Image from "next/image";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

// Cropped assets are ~1200×619 (wordmark lockup, transparent background).
const SOURCE_BY_VARIANT = {
  light: "/brand/logo.png",
  dark: "/brand/logo-dark.png",
} as const;

export function Logo({ variant = "light", className }: LogoProps) {
  return (
    <Image
      src={SOURCE_BY_VARIANT[variant]}
      alt="Odonto Solution"
      width={1200}
      height={619}
      className={className}
      priority
    />
  );
}

/** Icon-only crop from the stacked logo (top monogram). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block size-11 shrink-0 overflow-hidden lg:size-10",
        className,
      )}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={694}
        height={694}
        priority
        className="absolute top-[-20px] left-1/2 h-auto w-[300%] max-w-none -translate-x-1/2"
      />
    </span>
  );
}

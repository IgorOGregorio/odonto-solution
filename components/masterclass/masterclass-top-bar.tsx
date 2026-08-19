import Link from "next/link";

import { LogoMark } from "@/components/brand/logo";
import { BackLink } from "@/components/layout/back-link";
import { siteConfig } from "@/content/site";

export function MasterclassTopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-hero">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-hero"
          aria-label={siteConfig.name}
        >
          <LogoMark />
        </Link>
        <BackLink className="text-white/75 hover:text-white" />
      </div>
    </header>
  );
}

import Image from "next/image";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { structure } from "@/content/clinic";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-square max-w-md overflow-hidden rounded-2xl border border-border bg-hero shadow-xl lg:max-w-none">
              <Image
                src={structure.images.logo}
                alt={siteConfig.name}
                width={694}
                height={694}
                className="size-full object-contain p-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden aspect-[3/4] w-40 overflow-hidden rounded-xl border-4 border-background shadow-lg sm:block lg:-right-8 lg:w-48">
              <Image
                src={structure.images.hero}
                alt={`Fachada e ambiente da ${siteConfig.name}`}
                width={192}
                height={256}
                className="size-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-label text-primary">Estrutura</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                {structure.heading}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {structure.body}
            </p>

            <WhatsAppButton className="min-h-11 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

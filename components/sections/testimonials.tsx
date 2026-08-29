import Image from "next/image";

import {
  SectionRail,
  SectionShell,
} from "@/components/editorial/primitives";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <SectionShell id="depoimentos" className="bg-muted/30">
      <SectionRail
        label="Prova social"
        title="Depoimentos"
        intro="Mensagens reais de quem já passou pela clínica."
      >
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] scrollbar-none scroll-smooth touch-pan-x sm:gap-5"
          role="list"
          aria-label="Depoimentos de pacientes"
        >
          {testimonials.map((item) => (
            <figure
              key={item.src}
              role="listitem"
              className="w-[72%] shrink-0 snap-center sm:w-[45%] lg:w-[30%]"
            >
              <div className="relative aspect-9/16 overflow-hidden rounded-sm bg-hero ring-1 ring-foreground/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </SectionRail>
    </SectionShell>
  );
}

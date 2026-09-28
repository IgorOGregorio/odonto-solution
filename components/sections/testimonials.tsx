"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  SectionRail,
  SectionShell,
} from "@/components/editorial/primitives";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const showControls = testimonials.length > 1;

  const sync = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const slides = [...scroller.children] as HTMLElement[];
    if (slides.length === 0) {
      return;
    }

    const origin = scroller.getBoundingClientRect().left;
    const mid = origin + scroller.clientWidth / 2;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;

    for (let index = 0; index < slides.length; index += 1) {
      const rect = slides[index].getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - mid);
      if (distance < best) {
        best = distance;
        nearest = index;
      }
    }

    setActive(nearest);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    sync();
    scroller.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      scroller.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const next = Math.max(0, Math.min(testimonials.length - 1, index));
    const slide = scroller?.children[next] as HTMLElement | undefined;
    if (!scroller || !slide) {
      return;
    }

    scroller.scrollTo({
      left: slide.offsetLeft - (scroller.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <SectionShell id="depoimentos" className="bg-muted/30">
      <SectionRail
        label="Prova social"
        title="Depoimentos"
        intro="Mensagens reais de quem já passou pela clínica."
      >
        <div className="relative">
          <div
            ref={scrollerRef}
            className={cn(
              "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 sm:gap-5",
              "[-ms-overflow-style:none] scrollbar-none",
              "scroll-smooth motion-reduce:scroll-auto",
              "touch-pan-x focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
            role="list"
            aria-label="Depoimentos de pacientes"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goTo(active - 1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goTo(active + 1);
              }
            }}
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

          {showControls && (
            <>
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Depoimento anterior"
                className="absolute top-1/2 left-1 z-10 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30 sm:inline-flex sm:left-3"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === testimonials.length - 1}
                aria-label="Próximo depoimento"
                className="absolute top-1/2 right-1 z-10 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30 sm:inline-flex sm:right-3"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          )}
        </div>
      </SectionRail>
    </SectionShell>
  );
}

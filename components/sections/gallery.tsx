"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { gallery as allGallery, type GalleryItem } from "@/content/gallery";
import { siteConfig } from "@/content/site";
import { SectionShell } from "@/components/editorial/primitives";
import { cn } from "@/lib/utils";

function formatIndex(index: number, total: number) {
  return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const showControls = items.length > 1;
  const current = items[active];

  const sync = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const slides = [...scroller.children] as HTMLElement[];
    if (slides.length === 0) {
      return;
    }

    const wide = window.matchMedia("(min-width: 640px)").matches;
    const origin = scroller.getBoundingClientRect().left;
    const mid = origin + scroller.clientWidth / 2;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;

    for (let index = 0; index < slides.length; index += 1) {
      const rect = slides[index].getBoundingClientRect();
      const distance = wide
        ? Math.abs(rect.left - origin)
        : Math.abs(rect.left + rect.width / 2 - mid);
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
  }, [items.length, sync]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const next = Math.max(0, Math.min(items.length - 1, index));
    const slide = scroller?.children[next] as HTMLElement | undefined;
    if (!scroller || !slide) {
      return;
    }

    const wide = window.matchMedia("(min-width: 640px)").matches;
    scroller.scrollTo({
      left: wide
        ? slide.offsetLeft
        : slide.offsetLeft - (scroller.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Galeria de resultados"
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
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[8%] pb-1 sm:gap-5 sm:px-0",
            "[-ms-overflow-style:none] scrollbar-none",
            "scroll-smooth motion-reduce:scroll-auto",
            "touch-pan-x focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        >
          {items.map((item, index) => (
            <figure
              key={item.src}
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${items.length}`}
              aria-current={active === index ? "true" : undefined}
              className="w-[84%] shrink-0 snap-center sm:w-[48%] sm:snap-start lg:w-[38%]"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-hero ring-1 ring-foreground/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 38vw"
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
              aria-label="Resultado anterior"
              className="absolute top-1/2 left-1 z-10 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30 sm:left-3"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === items.length - 1}
              aria-label="Próximo resultado"
              className="absolute top-1/2 right-1 z-10 inline-flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30 sm:right-3"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </>
        )}
      </div>

      {current && (
        <div className="flex items-end justify-between gap-6">
          <p
            className="max-w-lg font-display text-xl leading-snug text-foreground sm:text-2xl"
            aria-live="polite"
          >
            {current.caption}
          </p>
          {showControls && (
            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {formatIndex(active, items.length)}
            </p>
          )}
        </div>
      )}

      {showControls && (
        <div className="h-px bg-border">
          <div
            className="h-px bg-primary transition-[width] duration-300 ease-out motion-reduce:transition-none"
            style={{ width: `${((active + 1) / items.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}

export function Gallery({ items = allGallery }: { items?: GalleryItem[] }) {
  return (
    <SectionShell id="resultados">
      <div className="max-w-2xl">
        <p className="text-label text-primary">Resultados</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">
          Transformações reais
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Casos clínicos e procedimentos realizados pela nossa equipe.
          Acompanhe mais no{" "}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>

      {items.length > 0 ? (
        <div className="mt-10 sm:mt-12">
          <GalleryCarousel items={items} />
        </div>
      ) : null}
    </SectionShell>
  );
}

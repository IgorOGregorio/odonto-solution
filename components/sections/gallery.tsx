"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { gallery as allGallery, type GalleryItem } from "@/content/gallery";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(items.length > 1);
  const showControls = items.length > 1;

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const sync = () => {
      const { scrollLeft, clientWidth, scrollWidth } = scroller;
      setCanPrev(scrollLeft > 12);
      setCanNext(scrollLeft + clientWidth < scrollWidth - 12);

      const slides = [...scroller.children] as HTMLElement[];
      if (slides.length === 0) {
        return;
      }

      const origin = scroller.getBoundingClientRect().left;
      let nearest = 0;
      for (let index = 0; index < slides.length; index += 1) {
        if (slides[index].getBoundingClientRect().left - origin <= 8) {
          nearest = index;
        }
      }
      setActive(nearest);
    };

    sync();
    scroller.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      scroller.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [items.length]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const next = Math.max(0, Math.min(items.length - 1, index));
    const slide = scroller?.children[next] as HTMLElement | undefined;
    if (!scroller || !slide) {
      return;
    }
    setActive(next);
    setCanPrev(next > 0);
    setCanNext(next < items.length - 1);
    scroller.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  };

  const scrollBySlide = (direction: -1 | 1) => {
    goTo(active + direction);
  };

  return (
    <div className="mt-12 space-y-5">
      {showControls && (
        <div className="flex items-center justify-between gap-4">
          <p
            className="text-sm tabular-nums text-muted-foreground"
            aria-live="polite"
          >
            <span className="font-medium text-foreground">{active + 1}</span>
            {" / "}
            {items.length}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBySlide(-1)}
              disabled={!canPrev}
              aria-label="Resultado anterior"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBySlide(1)}
              disabled={!canNext}
              aria-label="Próximo resultado"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-sm transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      )}

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Galeria de resultados"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollBySlide(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollBySlide(1);
          }
        }}
        className={cn(
          "relative flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto",
          "touch-pan-x focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {items.map((item, index) => (
          <figure
            key={item.src}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${items.length}`}
            className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm sm:w-[46%] lg:w-[31%]"
          >
            <div className="relative aspect-3/4 overflow-hidden bg-muted">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 31vw"
              />
            </div>
            {item.caption && (
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {showControls && (
        <div className="flex justify-center gap-2" role="tablist" aria-label="Selecionar resultado">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Ir para resultado ${index + 1}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2.5 cursor-pointer rounded-full transition-all duration-200",
                active === index
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Gallery({ items = allGallery }: { items?: GalleryItem[] }) {
  return (
    <section id="resultados" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-primary">Resultados</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Transformações reais
          </h2>
          <p className="mt-4 text-muted-foreground">
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
          <GalleryCarousel items={items} />
        ) : null}
      </div>
    </section>
  );
}

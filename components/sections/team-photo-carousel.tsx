"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

function formatIndex(index: number, total: number) {
  return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
}

export function TeamPhotoCarousel({
  photos,
  alt,
}: {
  photos: readonly string[];
  alt: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const showControls = photos.length > 1;
  const current = photos[active];

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
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;

    for (let index = 0; index < slides.length; index += 1) {
      const distance = Math.abs(slides[index].getBoundingClientRect().left - origin);
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
  }, [photos.length, sync]);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    const next = Math.max(0, Math.min(photos.length - 1, index));
    const slide = scroller?.children[next] as HTMLElement | undefined;
    if (!scroller || !slide) {
      return;
    }

    scroller.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="relative h-full min-h-72 w-full sm:min-h-80 md:min-h-104">
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`Fotos de ${alt}`}
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
          "flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain",
          "[-ms-overflow-style:none] scrollbar-none scroll-smooth motion-reduce:scroll-auto",
          "touch-pan-x focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {photos.map((src, index) => (
          <figure
            key={src}
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${photos.length}`}
            aria-current={active === index ? "true" : undefined}
            className="relative h-full min-h-72 w-full shrink-0 snap-start sm:min-h-80 md:min-h-104"
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={index === 0}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </figure>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-hero/70 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-hero/35"
      />

      {showControls && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-3 z-10 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === photos.length - 1}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-3 z-10 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-hero/80 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-hero disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
          {current && (
            <p className="absolute bottom-4 right-4 z-10 rounded-full bg-black/55 px-2.5 py-1 text-xs tabular-nums text-white">
              {formatIndex(active, photos.length)}
            </p>
          )}
        </>
      )}
    </div>
  );
}

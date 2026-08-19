import Image from "next/image";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { cn } from "@/lib/utils";

export function TreatmentHero({
  title,
  subtitle,
  message,
  image,
  label = "Tratamento",
}: {
  title: string;
  subtitle: string;
  message?: string;
  image?: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero pt-20 text-white lg:pt-16">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.06_65_/_0.15),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.08_75/0.28),transparent_70%)]"
      />

      <div
        className={cn(
          "relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          image
            ? "grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
            : "max-w-3xl text-center",
        )}
      >
        <div
          className={cn(
            "space-y-6",
            !image && "mx-auto flex max-w-2xl flex-col items-center",
          )}
        >
          <div className={cn("space-y-4", !image && "text-center")}>
            <p className="text-label text-primary">{label}</p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/75">
              {subtitle}
            </p>
          </div>

          <WhatsAppButton
            message={message}
            className="min-h-11 rounded-full px-8"
          />
        </div>

        {image && (
          <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:mx-0 lg:max-w-none">
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-hero/50 via-transparent to-transparent"
            />
          </div>
        )}
      </div>
    </section>
  );
}

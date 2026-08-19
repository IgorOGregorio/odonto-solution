import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

import { MasterclassTeaser } from "@/components/sections/masterclass-teaser";
import { specialties, type Specialty } from "@/content/specialties";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function FeaturedMedia({
  specialty,
  sizes,
}: {
  specialty: Specialty;
  sizes: string;
}) {
  const { image, video } = specialty;

  return (
    <>
      <div className="absolute inset-0 bg-hero">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        )}
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className={
              image
                ? "absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
                : "absolute inset-0 size-full object-cover motion-reduce:hidden"
            }
          />
        )}
      </div>
      {video && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white">
          <Play className="size-3 fill-current" aria-hidden />
          Reel
        </span>
      )}
    </>
  );
}

function ViewMoreLabel({ tone }: { tone: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
        tone === "light" ? "text-white" : "text-primary"
      }`}
    >
      Ver detalhes
      <ArrowUpRight
        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden
      />
    </span>
  );
}

const featuredCardBase =
  "group relative overflow-hidden rounded-2xl ring-1 ring-foreground/10 transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function FeaturedSplitCard({ specialty }: { specialty: Specialty }) {
  if (!specialty.href) {
    return null;
  }

  return (
    <Link
      href={specialty.href}
      className={`${featuredCardBase} flex flex-col bg-card sm:col-span-2 sm:grid sm:h-104 sm:grid-cols-2 lg:col-span-6`}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden sm:aspect-auto sm:h-full">
        <FeaturedMedia
          specialty={specialty}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
        <p className="text-label text-primary">Destaque</p>
        <h3 className="font-display text-2xl sm:text-3xl">{specialty.label}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {specialty.blurb}
        </p>
        <ViewMoreLabel tone="dark" />
      </div>
    </Link>
  );
}

function FeaturedOverlayCard({ specialty }: { specialty: Specialty }) {
  if (!specialty.href) {
    return null;
  }

  return (
    <Link
      href={specialty.href}
      className={`${featuredCardBase} flex h-88 flex-col justify-end sm:h-104 lg:col-span-3`}
    >
      <FeaturedMedia
        specialty={specialty}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/95 via-black/65 to-black/10"
      />

      <div className="relative space-y-2 p-5">
        <h3 className="font-display text-2xl text-white">{specialty.label}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/80">
          {specialty.blurb}
        </p>
        <ViewMoreLabel tone="light" />
      </div>
    </Link>
  );
}

function SpecialtyRow({ specialty }: { specialty: Specialty }) {
  return (
    <a
      href={getWhatsAppUrl(specialty.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar sobre ${specialty.label}`}
      className="group flex min-h-11 items-center border-border/60 px-1 py-3 text-sm font-medium transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:border-r sm:px-4 lg:px-5"
    >
      {specialty.label}
    </a>
  );
}

export function Services() {
  const [highlight, ...featured] = specialties.filter((item) => item.href);
  const others = specialties.filter((item) => !item.href);

  return (
    <section id="servicos" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,oklch(0.72_0.08_75/0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-label text-primary">Especialidades</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do preventivo ao estético avançado, com {specialties.length}{" "}
            especialidades sob o mesmo cuidado clínico.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {highlight && <FeaturedSplitCard specialty={highlight} />}
          {featured.map((specialty) => (
            <FeaturedOverlayCard key={specialty.slug} specialty={specialty} />
          ))}
        </div>

        <div className="mt-14 border-t border-border/60 pt-10">
          <p className="text-label text-primary">Também atendemos</p>

          <div className="mt-4 grid gap-0 divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
            {others.map((specialty) => (
              <SpecialtyRow key={specialty.slug} specialty={specialty} />
            ))}
          </div>
        </div>

        <MasterclassTeaser />
      </div>
    </section>
  );
}

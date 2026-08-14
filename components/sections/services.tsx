import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Play } from "lucide-react";

import { MasterclassTeaser } from "@/components/sections/masterclass-teaser";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
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
  const Icon = specialty.icon;

  return (
    <a
      href={getWhatsAppUrl(specialty.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp sobre ${specialty.label}`}
      className="group flex min-h-16 items-center gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-card hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm leading-snug font-medium text-foreground">
          {specialty.label}
        </span>
        <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {specialty.blurb}
        </span>
      </span>
      <MessageCircle
        className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
        aria-hidden
      />
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
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mt-4 rounded-2xl border border-border/60 bg-muted/40 p-4 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-1 pb-4">
            <p className="text-label text-primary">Também atendemos</p>
            <p className="text-sm text-muted-foreground">
              Escolha uma especialidade para falar no WhatsApp.
            </p>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((specialty) => (
              <SpecialtyRow key={specialty.slug} specialty={specialty} />
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-muted-foreground">
              Não sabe qual tratamento precisa? A equipe avalia seu caso e indica
              o melhor caminho.
            </p>
            <WhatsAppButton
              label="Falar com a clínica"
              className="min-h-11 w-full rounded-full sm:w-auto"
            />
          </div>
        </div>

        <MasterclassTeaser />
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { MasterclassTeaser } from "@/components/sections/masterclass-teaser";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  specialties,
  type Specialty,
} from "@/content/specialties";

function ServiceMedia({
  image,
  video,
  title,
}: {
  image?: string | null;
  video?: string | null;
  title: string;
}) {
  if (video && !image) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden bg-hero">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover motion-reduce:hidden"
          aria-label={title}
        />
      </div>
    );
  }

  if (image) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
            aria-hidden
          />
        )}
      </div>
    );
  }

  return null;
}

function FeaturedCard({ specialty }: { specialty: Specialty }) {
  if (!specialty.href) {
    return null;
  }

  return (
    <Link href={specialty.href} className="group block">
      <Card className="h-full overflow-hidden border-border/60 p-0 shadow-sm transition-shadow hover:shadow-md">
        <ServiceMedia
          image={specialty.image}
          video={specialty.video}
          title={specialty.label}
        />
        <CardHeader className="gap-3 pt-5 pb-6">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="font-display text-xl">
              {specialty.label}
            </CardTitle>
            {specialty.video && (
              <Badge variant="secondary" className="text-xs">
                Reel
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {specialty.blurb}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

function CompactCard({ specialty }: { specialty: Specialty }) {
  const Icon = specialty.icon;

  return (
    <Card className="h-full border-border/60 shadow-sm">
      <CardHeader className="gap-3">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <CardTitle className="font-display text-lg">{specialty.label}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {specialty.blurb}
        </CardDescription>
        <WhatsAppButton
          message={specialty.whatsappMessage}
          label="WhatsApp"
          className="mt-1 min-h-11 w-full rounded-full sm:w-auto"
        />
      </CardHeader>
    </Card>
  );
}

export function Services() {
  const featured = specialties.filter((item) => item.href);
  const compact = specialties.filter((item) => !item.href);

  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-primary">Especialidades</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="mt-4 text-muted-foreground">
            Do preventivo ao estético avançado — veja o catálogo e fale no
            WhatsApp sobre a especialidade que você procura.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((specialty) => (
            <FeaturedCard key={specialty.slug} specialty={specialty} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compact.map((specialty) => (
            <CompactCard key={specialty.slug} specialty={specialty} />
          ))}
        </div>

        <MasterclassTeaser />
      </div>
    </section>
  );
}

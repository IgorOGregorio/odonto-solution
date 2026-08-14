import Image from "next/image";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { team } from "@/content/clinic";
import { siteConfig } from "@/content/site";

export function Team() {
  const member = team[0];

  if (!member) {
    return null;
  }

  return (
    <section id="equipe" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(55%_90%_at_70%_0%,oklch(0.72_0.08_75/0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-xl md:text-left">
          <p className="text-label text-primary">Quem atende</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Equipe</h2>
          <p className="mt-4 text-muted-foreground">
            Atendimento sob a responsabilidade técnica da Dra. Jady.
          </p>
        </div>

        <article className="mt-12 grid overflow-hidden rounded-2xl bg-hero text-white shadow-lg ring-1 ring-white/10 md:mt-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-stretch">
          <div className="relative h-72 w-full overflow-hidden bg-black/20 sm:h-80 md:h-auto md:min-h-104">
            <Image
              src={siteConfig.heroImage}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-hero/70 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-hero/35"
            />
          </div>

          <div className="relative flex flex-col justify-center gap-6 px-6 py-8 sm:px-10 sm:py-12 md:pr-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.08_75/0.28),transparent_70%)]"
            />

            <div className="relative space-y-3">
              <p className="text-label text-primary">{member.role}</p>
              <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                {member.name}
              </h3>
            </div>

            <ul className="relative flex flex-wrap gap-2">
              {member.credentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm text-white/85"
                >
                  {credential}
                </li>
              ))}
            </ul>

            <div className="relative pt-1">
              <WhatsAppButton
                label="Falar com a clínica"
                className="min-h-11 w-full rounded-full sm:w-auto"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Logo } from "@/components/brand/logo";

const introText =
  "Parabéns pelo interesse! Preencha o formulário para entrar na lista de prioridade. Assim que as inscrições abrirem, nossa equipe entrará em contato com valores, formas de pagamento, datas e bônus exclusivos.";

export function MasterclassHero() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.08_75/0.35),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.06_65/0.28),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(55%_90%_at_50%_0%,oklch(0.72_0.08_75/0.14),transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Logo
          variant="dark"
          className="h-auto w-52 animate-enter sm:w-64"
        />

        <div className="animate-enter animate-enter-delay-1 flex max-w-3xl flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="text-label text-primary">Lista de prioridade</p>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
              Para dentistas
            </span>
          </div>

          <h1 className="font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            Masterclass em Toxina Botulínica e Preenchimento Facial Avançado
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {introText}
          </p>
        </div>

        <Link
          href="#inscricao"
          className="animate-enter animate-enter-delay-2 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hero"
        >
          Ir para o formulário
          <ArrowDown className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

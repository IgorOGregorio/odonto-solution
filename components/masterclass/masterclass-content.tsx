import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ActionStrip,
  SectionRail,
  SectionShell,
  SimpleFlowList,
} from "@/components/editorial/primitives";
import { masterclass } from "@/content/masterclass";
import { siteConfig } from "@/content/site";

export function MasterclassContent() {
  return (
    <>
      <SectionShell>
        <SectionRail
          label="Conteúdo prático"
          title={masterclass.learn.title}
          intro="Formação pensada para quem quer aplicar com segurança — do diagnóstico à conversa com o paciente."
          action={
            <Link
              href="#inscricao"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Entrar na lista de prioridade
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          }
        >
          <SimpleFlowList items={masterclass.learn.items} />
        </SectionRail>
      </SectionShell>

      <section
        aria-labelledby="masterclass-teacher-heading"
        className="bg-hero py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-2xl ring-1 ring-white/10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="relative min-h-80 overflow-hidden bg-black/30 md:min-h-104">
              <Image
                src={siteConfig.heroImage}
                alt={masterclass.teacher.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-hero via-hero/20 to-transparent md:bg-linear-to-r md:from-transparent md:to-hero/60"
              />
            </div>

            <div className="relative flex flex-col justify-center gap-6 px-6 py-10 sm:px-10 sm:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 right-0 size-56 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.08_75/0.22),transparent_70%)]"
              />

              <div className="relative space-y-3">
                <p className="text-label text-primary">
                  {masterclass.teacher.title}
                </p>
                <h2
                  id="masterclass-teacher-heading"
                  className="font-display text-3xl leading-tight sm:text-4xl"
                >
                  {masterclass.teacher.name}
                </h2>
                <p className="text-sm text-white/60">
                  {masterclass.teacher.credentials.join(" · ")}
                </p>
              </div>

              <p className="relative max-w-xl text-base leading-relaxed text-white/75">
                {masterclass.teacher.body}
              </p>

              <Link
                href="#inscricao"
                className="relative inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quero aprender com a Dra. Jady
              </Link>
            </div>
          </article>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <p className="text-label text-primary">
              {masterclass.forWhom.title}
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
              Cirurgiões-dentistas que querem aprofundar harmonização facial
              com acompanhamento próximo — sem atalhos nem promessas vazias.
            </blockquote>
            <p className="pl-6 text-base leading-relaxed text-muted-foreground">
              {masterclass.forWhom.body}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-label text-primary">
              {masterclass.differentials.title}
            </p>
            <ul className="space-y-6">
              {masterclass.differentials.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-t border-border/60 pt-6 first:border-t-0 first:pt-0"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 font-display text-xl tabular-nums text-primary"
                  >
                    {index + 1}.
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-3xl border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">
            {masterclass.certificate.title}:
          </span>{" "}
          {masterclass.certificate.body}
        </p>
      </SectionShell>

      <ActionStrip
        label="Vagas limitadas"
        title="Entre na lista antes da abertura das inscrições"
        description="Quem está na fila recebe primeiro contato com datas, valores e condições exclusivas de lançamento."
      >
        <Link
          href="#inscricao"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Preencher formulário
        </Link>
      </ActionStrip>
    </>
  );
}

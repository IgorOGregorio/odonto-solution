import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MasterclassTeaser() {
  return (
    <div className="mt-14 bg-hero px-6 py-10 text-white sm:px-10 sm:py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="max-w-2xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-label text-primary">Masterclass</p>
            <span className="text-xs font-medium tracking-wide text-white/60">
              Para dentistas
            </span>
          </div>
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">
            Formação em toxina botulínica e preenchimento facial
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-white/70">
            Lista de prioridade para dentistas. Datas, valores e condições
            chegam quando as inscrições abrirem.
          </p>
        </div>

        <Link
          href="/masterclass"
          className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-hero focus-visible:outline-none sm:w-auto"
        >
          Conhecer a Masterclass
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}

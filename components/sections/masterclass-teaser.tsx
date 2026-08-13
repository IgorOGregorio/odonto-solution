import Link from "next/link";

export function MasterclassTeaser() {
  return (
    <div className="mt-14 rounded-2xl border border-border/60 bg-muted/40 px-6 py-8 sm:px-10 sm:py-10">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-label text-primary">Masterclass</p>
          <h3 className="font-display text-2xl sm:text-3xl">
            Formação em toxina botulínica e preenchimento facial
          </h3>
          <p className="text-muted-foreground">
            Lista de prioridade para dentistas. Datas, valores e condições
            chegam quando as inscrições abrirem.
          </p>
        </div>
        <Link
          href="/masterclass"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Conhecer a Masterclass
        </Link>
      </div>
    </div>
  );
}

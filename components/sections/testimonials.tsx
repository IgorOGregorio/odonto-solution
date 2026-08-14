import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div aria-hidden className="absolute inset-0 bg-muted/50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(55%_90%_at_50%_0%,oklch(0.72_0.08_75/0.14),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-primary">Prova social</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Depoimentos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Relatos de quem passou pela clínica — textos em revisão com a
            equipe.
          </p>
        </div>

        {featured && (
          <blockquote className="mx-auto mt-14 max-w-3xl text-center">
            <span
              aria-hidden
              className="font-display text-6xl leading-none text-primary/35 sm:text-7xl"
            >
              “
            </span>
            <p className="-mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl">
              {featured.quote}
            </p>
            <footer className="mt-8 flex items-center justify-center gap-3">
              <span
                aria-hidden
                className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-medium text-primary"
              >
                {featured.name.charAt(0)}
              </span>
              <cite className="not-italic text-sm font-medium text-foreground">
                {featured.name}
              </cite>
            </footer>
          </blockquote>
        )}

        {others.length > 0 && (
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 border-t border-border/70 pt-12 sm:grid-cols-2 sm:gap-10">
            {others.map((item) => (
              <blockquote key={item.name} className="space-y-5">
                <p className="text-base leading-relaxed text-foreground sm:text-lg">
                  “{item.quote}”
                </p>
                <footer className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary"
                  >
                    {item.name.charAt(0)}
                  </span>
                  <cite className="not-italic text-sm font-medium text-foreground">
                    {item.name}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

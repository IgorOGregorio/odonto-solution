import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <p className="text-base leading-relaxed text-foreground">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

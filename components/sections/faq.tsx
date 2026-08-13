import { faq, type FaqItem } from "@/content/faq";

export function Faq({
  items = faq,
  description = "Respostas objetivas sobre horário, convênio e como agendar.",
}: {
  items?: readonly FaqItem[];
  description?: string;
}) {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-label text-primary">Dúvidas</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">FAQ</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border/60 bg-card">
          {items.map((item) => (
            <details key={item.question} className="group px-5 py-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-base text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="text-muted-foreground transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

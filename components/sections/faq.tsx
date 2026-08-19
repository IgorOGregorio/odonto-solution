import { ChevronDown } from "lucide-react";

import { faq, type FaqItem } from "@/content/faq";

export function Faq({
  items = faq,
  description = "Respostas objetivas sobre horário, convênio e como agendar.",
}: {
  items?: readonly FaqItem[];
  description?: string;
}) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,20rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-label text-primary">Dúvidas</p>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-3xl sm:text-4xl"
            >
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="min-w-0 divide-y divide-border/70 border-y border-border/70">
            {items.map((item) => (
              <details
                key={item.question}
                className="group py-1 transition-colors open:bg-muted/10"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base leading-snug text-foreground marker:content-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="flex size-9 shrink-0 items-center justify-center text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none">
                    <ChevronDown className="size-4" aria-hidden />
                  </span>
                </summary>
                <p className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

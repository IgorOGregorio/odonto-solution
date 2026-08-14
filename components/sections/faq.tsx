import { ChevronDown } from "lucide-react";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { faq, type FaqItem } from "@/content/faq";

export function Faq({
  items = faq,
  description = "Respostas objetivas sobre horário, convênio e como agendar.",
}: {
  items?: readonly FaqItem[];
  description?: string;
}) {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 bg-muted/45" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(55%_90%_at_50%_0%,oklch(0.72_0.08_75/0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-label text-primary">Dúvidas</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">FAQ</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border/60 bg-card/80 px-5 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base leading-snug text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none">
                  <ChevronDown className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="border-t border-border/50 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card/60 px-6 py-8 text-center sm:px-8">
          <p className="max-w-md text-sm text-muted-foreground sm:text-base">
            Não encontrou o que precisava? Fale com a equipe no WhatsApp.
          </p>
          <WhatsAppButton
            label="Tirar dúvida no WhatsApp"
            className="min-h-11 w-full rounded-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

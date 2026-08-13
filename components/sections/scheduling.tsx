import { CalendarDays, Clock, UserRound } from "lucide-react";

import { SchedulingButton } from "@/components/ui/scheduling-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/content/site";

const steps = [
  {
    icon: UserRound,
    title: "Escolha o procedimento",
    description: "Selecione o serviço ou profissional desejado.",
  },
  {
    icon: CalendarDays,
    title: "Defina data e horário",
    description: "Veja a disponibilidade em tempo real.",
  },
  {
    icon: Clock,
    title: "Confirme sua consulta",
    description: "Finalize o agendamento em poucos cliques.",
  },
];

export function Scheduling() {
  return (
    <section id="agendamento" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-primary">Agendamento</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Comece pelo WhatsApp
          </h2>
          <p className="mt-4 text-muted-foreground">
            A forma mais rápida de agendar na {siteConfig.name} é pelo WhatsApp.
            Se preferir, o agendamento online continua disponível.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton className="min-h-11 rounded-full px-10" />
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="space-y-6 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CalendarDays className="size-6" />
                </div>
                <div className="text-left">
                  <p className="font-display text-xl">Ou agende online</p>
                  <p className="text-sm text-muted-foreground">
                    Disponível {siteConfig.hours.full.toLowerCase()}
                  </p>
                </div>
              </div>

              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{step.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 border-t border-border bg-muted/30 p-8 sm:p-10 lg:border-t-0 lg:border-l">
              <SchedulingButton className="min-h-11 w-full rounded-full px-10 sm:w-auto" />
              <p className="max-w-xs text-center text-sm text-muted-foreground">
                Você será redirecionado para a plataforma segura de agendamento
                da clínica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

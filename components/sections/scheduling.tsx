import { ExternalLink } from "lucide-react";

import { SectionRail, SectionShell } from "@/components/editorial/primitives";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Scheduling() {
  return (
    <SectionShell id="agendamento" bordered>
      <SectionRail
        label="Agendamento"
        title="Agende sua consulta"
        intro={
          <>
            <p>
              Escolha o horário direto na agenda da clínica. Disponível{" "}
              {siteConfig.hours.full.toLowerCase()}.
            </p>
            <p className="pt-2 text-sm">
              Prefere falar com a gente? Use o WhatsApp — respondemos no mesmo
              expediente.
            </p>
          </>
        }
        action={
          <Button asChild variant="outline" className="mt-8 min-h-11 w-full rounded-full sm:w-auto">
            <a
              href={siteConfig.scheduling.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-4" />
              Abrir em nova aba
            </a>
          </Button>
        }
      >
        <div className="overflow-hidden bg-muted/30 ring-1 ring-border/60">
          <iframe
            src={siteConfig.scheduling.url}
            title={`Agendamento online — ${siteConfig.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[1200px] w-full border-0 bg-background"
            allow="payment *"
          />
        </div>
      </SectionRail>
    </SectionShell>
  );
}

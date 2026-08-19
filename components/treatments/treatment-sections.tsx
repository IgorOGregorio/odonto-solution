import {
  ActionStrip,
  HighlightBand,
} from "@/components/editorial/primitives";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function TreatmentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <div className="mt-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </section>
  );
}

export function TreatmentPayment({ label }: { label: string }) {
  return (
    <HighlightBand
      label="Condições de pagamento"
      value={label}
      description="Detalhes do plano são combinados na avaliação. Sem valor total publicado nesta página."
    />
  );
}

export function TreatmentPromo({
  label,
  description = "Valor da campanha atual. Confirme disponibilidade e indicação na avaliação.",
}: {
  label: string;
  description?: string;
}) {
  return (
    <HighlightBand
      label="Promoção do mês"
      value={label}
      description={description}
    />
  );
}

export function TreatmentCta({ message }: { message?: string }) {
  return (
    <ActionStrip dark label="Agendar" title="Quer avaliar este tratamento?">
      <WhatsAppButton
        message={message}
        className="min-h-11 w-full rounded-full px-10 sm:w-auto"
      />
    </ActionStrip>
  );
}

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
    <section className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-label text-primary">Condições de pagamento</p>
        <p className="mt-3 font-display text-3xl sm:text-4xl">{label}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Detalhes do plano são combinados na avaliação. Sem valor total
          publicado nesta página.
        </p>
      </div>
    </section>
  );
}

export function TreatmentCta({ message }: { message?: string }) {
  return (
    <section className="bg-hero py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl">
          Quer avaliar este tratamento?
        </h2>
        <p className="mt-4 text-white/70">
          Fale no WhatsApp e conte o que você precisa. A indicação é feita após
          consulta.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            message={message}
            className="min-h-11 rounded-full px-10"
          />
        </div>
      </div>
    </section>
  );
}

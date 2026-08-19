import { InterestForm } from "@/components/form/interest-form";
import { SectionShell } from "@/components/editorial/primitives";

export function MasterclassFormSection() {
  return (
    <SectionShell
      id="inscricao"
      bordered
      className="border-t border-border/50"
    >
      <div className="mx-auto max-w-3xl">
        <div className="border-b border-border/60 pb-10">
          <p className="text-label text-primary">Inscrição</p>
          <h2
            id="inscricao-heading"
            className="mt-3 font-display text-3xl sm:text-4xl"
          >
            Lista de prioridade
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Leva poucos minutos. Assim que abrirmos as inscrições, você recebe
            contato pelo WhatsApp com datas, valores e condições.
          </p>
        </div>

        <div className="animate-enter animate-enter-delay-2 mt-10">
          <InterestForm />
        </div>
      </div>
    </SectionShell>
  );
}

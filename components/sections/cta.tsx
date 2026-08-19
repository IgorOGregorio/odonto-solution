import { ActionStrip } from "@/components/editorial/primitives";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Cta() {
  return (
    <ActionStrip dark label="Agendar" title="Fale agora no WhatsApp">
      <WhatsAppButton className="min-h-11 w-full rounded-full px-10 sm:w-auto" />
    </ActionStrip>
  );
}

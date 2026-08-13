import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function TreatmentPage({
  children,
  message,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton variant="fab" message={message} />
    </>
  );
}

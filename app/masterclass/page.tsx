import type { Metadata } from "next";

import { MasterclassContent } from "@/components/masterclass/masterclass-content";
import { MasterclassFormSection } from "@/components/masterclass/masterclass-form-section";
import { MasterclassHero } from "@/components/masterclass/masterclass-hero";
import { MasterclassTopBar } from "@/components/masterclass/masterclass-top-bar";
import { redirect } from "next/navigation";

const introText =
  "Parabéns pelo interesse! Preencha este formulário para entrar na lista de prioridade. Assim que as inscrições forem abertas, nossa equipe entrará em contato com todas as informações sobre valores, formas de pagamento, datas e bônus exclusivos.";

export const metadata: Metadata = {
  title: "Lista de Interesse — Masterclass Odonto Solution",
  description: introText,
};

export default function MasterclassPage() {
  redirect("/");
  return (
    <>
      <MasterclassTopBar />
      <main>
        <MasterclassHero />
        <MasterclassContent />
        <MasterclassFormSection />
      </main>
    </>
  );
}

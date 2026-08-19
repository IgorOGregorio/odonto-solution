import type { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentInfoGrid } from "@/components/treatments/treatment-info-grid";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import { TreatmentSteps } from "@/components/treatments/treatment-steps";
import {
  TreatmentCta,
  TreatmentPayment,
} from "@/components/treatments/treatment-sections";
import { implantesFaq } from "@/content/faq";
import { galleryByTreatment } from "@/content/gallery";
import { implantes } from "@/content/treatments/implantes";

export const metadata: Metadata = {
  title: `${implantes.title} | Odonto Solution`,
  description: implantes.subtitle,
};

export default function ImplantesPage() {
  return (
    <TreatmentPage message={implantes.whatsappMessage}>
      <TreatmentHero
        title={implantes.title}
        subtitle={implantes.subtitle}
        message={implantes.whatsappMessage}
        image={implantes.image}
      />

      <TreatmentInfoGrid
        label="Indicação"
        title="Antes de decidir"
        intro="Reposição de dentes exige avaliação individual — estes pontos ajudam a entender se faz sentido conversar com a clínica."
        items={[
          {
            title: implantes.forWhom.title,
            body: implantes.forWhom.body,
          },
          {
            title: implantes.surgeryFear.title,
            body: implantes.surgeryFear.body,
          },
        ]}
      />

      <TreatmentSteps
        title={implantes.howItWorks.title}
        intro={implantes.howItWorks.body}
        steps={implantes.howItWorks.steps}
      />

      <TreatmentPayment label={implantes.payment} />

      <Gallery items={galleryByTreatment("implantes")} />

      <Faq
        items={implantesFaq}
        description="Respostas objetivas sobre implantes, prazo, dor e indicação."
      />

      <Testimonials />

      <TreatmentCta message={implantes.whatsappMessage} />
    </TreatmentPage>
  );
}

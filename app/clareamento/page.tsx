import type { Metadata } from "next";

import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentInfoGrid } from "@/components/treatments/treatment-info-grid";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import { TreatmentSteps } from "@/components/treatments/treatment-steps";
import {
  TreatmentCta,
  TreatmentPromo,
} from "@/components/treatments/treatment-sections";
import { galleryByTreatment } from "@/content/gallery";
import { clareamento } from "@/content/treatments/clareamento";

export const metadata: Metadata = {
  title: `${clareamento.title} | Odonto Solution`,
  description: clareamento.claim,
};

export default function ClareamentoPage() {
  const galleryItems = galleryByTreatment("clareamento");

  return (
    <TreatmentPage message={clareamento.whatsappMessage}>
      <TreatmentHero
        title={clareamento.title}
        subtitle={clareamento.claim}
        message={clareamento.whatsappMessage}
        image={clareamento.image}
      />

      <TreatmentInfoGrid
        label="Clareamento"
        title="Entenda o tratamento"
        intro="Protocolo, duração e indicação — sem prometer resultado idêntico para todo mundo."
        items={[
          {
            title: clareamento.types.title,
            body: clareamento.types.body,
          },
          {
            title: clareamento.duration.title,
            body: clareamento.duration.body,
          },
          {
            title: clareamento.whoCan.title,
            body: clareamento.whoCan.body,
          },
        ]}
      />

      <TreatmentSteps
        title={clareamento.howItWorks.title}
        intro={clareamento.howItWorks.body}
        steps={clareamento.howItWorks.steps}
      />

      {clareamento.promo !== null && (
        <TreatmentPromo label={clareamento.promo.priceLabel} />
      )}

      {galleryItems.length > 0 && <Gallery items={galleryItems} />}

      <Testimonials />

      <TreatmentCta message={clareamento.whatsappMessage} />
    </TreatmentPage>
  );
}

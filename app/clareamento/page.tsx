import type { Metadata } from "next";

import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import {
  TreatmentCta,
  TreatmentSection,
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
      />
      <TreatmentSection title={clareamento.types.title}>
        <p>{clareamento.types.body}</p>
      </TreatmentSection>
      <TreatmentSection title={clareamento.duration.title}>
        <p>{clareamento.duration.body}</p>
      </TreatmentSection>
      <TreatmentSection title={clareamento.whoCan.title}>
        <p>{clareamento.whoCan.body}</p>
      </TreatmentSection>
      {clareamento.promo !== null && (
        <section className="bg-muted/40 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-label text-primary">Promoção do mês</p>
            <p className="mt-3 font-display text-3xl sm:text-4xl">
              {clareamento.promo.priceLabel}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Valor da campanha atual. Confirme disponibilidade e indicação na
              avaliação.
            </p>
          </div>
        </section>
      )}
      {galleryItems.length > 0 && <Gallery items={galleryItems} />}
      <Testimonials />
      <TreatmentCta message={clareamento.whatsappMessage} />
    </TreatmentPage>
  );
}

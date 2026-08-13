import type { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import {
  TreatmentCta,
  TreatmentSection,
} from "@/components/treatments/treatment-sections";
import { harmonizacaoFaq } from "@/content/faq";
import { galleryByTreatment } from "@/content/gallery";
import { harmonizacao } from "@/content/treatments/harmonizacao";

export const metadata: Metadata = {
  title: `${harmonizacao.title} | Odonto Solution`,
  description: harmonizacao.subtitle,
};

export default function HarmonizacaoFacialPage() {
  return (
    <TreatmentPage message={harmonizacao.whatsappMessage}>
      <TreatmentHero
        title={harmonizacao.title}
        subtitle={harmonizacao.subtitle}
        message={harmonizacao.whatsappMessage}
      />
      {harmonizacao.offers.map((offer) => (
        <TreatmentSection key={offer.title} title={offer.title}>
          <p>{offer.body}</p>
        </TreatmentSection>
      ))}
      <Gallery items={galleryByTreatment("harmonizacao")} />
      <Faq
        items={harmonizacaoFaq}
        description="Dúvidas frequentes sobre Botox, preenchimento e bioestimuladores."
      />
      <Testimonials />
      <TreatmentCta message={harmonizacao.whatsappMessage} />
    </TreatmentPage>
  );
}

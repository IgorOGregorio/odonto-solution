import type { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentInfoGrid } from "@/components/treatments/treatment-info-grid";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import { TreatmentSteps } from "@/components/treatments/treatment-steps";
import { TreatmentCta } from "@/components/treatments/treatment-sections";
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
        image={harmonizacao.image}
      />

      <TreatmentInfoGrid
        label="Procedimentos"
        title="O que oferecemos"
        intro="Botox, preenchimento e bioestimuladores — sempre com avaliação e indicação individual."
        items={harmonizacao.offers.map((offer) => ({
          title: offer.title,
          body: offer.body,
        }))}
      />

      <TreatmentSteps
        title={harmonizacao.howItWorks.title}
        intro={harmonizacao.howItWorks.body}
        steps={harmonizacao.howItWorks.steps}
      />

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

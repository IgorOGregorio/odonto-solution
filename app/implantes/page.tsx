import type { Metadata } from "next";

import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentPage } from "@/components/treatments/treatment-page";
import {
  TreatmentCta,
  TreatmentPayment,
  TreatmentSection,
} from "@/components/treatments/treatment-sections";
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
      />
      <TreatmentSection title={implantes.forWhom.title}>
        <p>{implantes.forWhom.body}</p>
      </TreatmentSection>
      <TreatmentSection title={implantes.howItWorks.title}>
        <p>{implantes.howItWorks.body}</p>
      </TreatmentSection>
      <TreatmentSection title={implantes.surgeryFear.title}>
        <p>{implantes.surgeryFear.body}</p>
      </TreatmentSection>
      <TreatmentPayment label={implantes.payment} />
      <Gallery items={galleryByTreatment("implantes")} />
      <Testimonials />
      <TreatmentCta message={implantes.whatsappMessage} />
    </TreatmentPage>
  );
}

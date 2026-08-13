import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function TreatmentHero({
  title,
  subtitle,
  message,
}: {
  title: string;
  subtitle: string;
  message?: string;
}) {
  return (
    <section className="relative bg-hero pt-20 text-white md:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.06_65_/_0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="text-label text-primary">Tratamento</p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton
            message={message}
            className="min-h-11 rounded-full px-8"
          />
        </div>
      </div>
    </section>
  );
}

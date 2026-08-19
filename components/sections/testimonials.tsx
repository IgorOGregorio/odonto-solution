import {
  SectionRail,
  SectionShell,
} from "@/components/editorial/primitives";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <SectionShell id="depoimentos" className="bg-muted/30">
      <SectionRail
        label="Prova social"
        title="Depoimentos"
        intro="Quem já passou pela clínica."
      >
        <div className="space-y-12">
          {featured && (
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                “{featured.quote}”
              </p>
              <footer className="mt-6 text-sm font-medium text-foreground">
                — {featured.name}
              </footer>
            </blockquote>
          )}

          {others.length > 0 && (
            <div className="grid gap-10 border-t border-border/60 pt-10 sm:grid-cols-2">
              {others.map((item) => (
                <blockquote key={item.name} className="space-y-4">
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    “{item.quote}”
                  </p>
                  <footer className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </SectionRail>
    </SectionShell>
  );
}

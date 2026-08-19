import { Navigation } from "lucide-react";

import { SectionRail, SectionShell } from "@/components/editorial/primitives";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.address.mapsQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${siteConfig.address.mapsQuery}&hl=pt-BR&z=16&output=embed`;

  return (
    <SectionShell id="localizacao" bordered className="bg-muted/40">
      <SectionRail
        label="Localização"
        title="Venha nos visitar"
        intro={
          <>
            <p className="font-medium text-foreground">
              {siteConfig.address.street}
            </p>
            <p>
              {siteConfig.address.neighborhood} — {siteConfig.address.city} -{" "}
              {siteConfig.address.state}
            </p>
            <p className="text-sm">CEP {siteConfig.address.cep}</p>
            <p className="pt-2">{siteConfig.hours.full}</p>
          </>
        }
        action={
          <Button asChild className="mt-8 min-h-11 w-full rounded-full sm:w-auto">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" />
              Como chegar
            </a>
          </Button>
        }
      >
        <div className="overflow-hidden ring-1 ring-border/60">
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Odonto Solution no Google Maps"
            className="w-full"
          />
        </div>
      </SectionRail>
    </SectionShell>
  );
}

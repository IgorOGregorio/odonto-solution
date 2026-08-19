import { siteConfig } from "@/content/site";

export function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-muted/35">
      <div className="mx-auto grid max-w-6xl divide-y divide-border/50 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        <div className="space-y-1 py-6 sm:px-6 sm:py-8 first:sm:pl-0">
          <p className="text-label text-primary">Horário</p>
          <p className="text-sm font-medium">{siteConfig.hours.weekdays}</p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.hours.saturday}
          </p>
        </div>

        <div className="space-y-1 py-6 sm:px-6 sm:py-8">
          <p className="text-label text-primary">Responsável técnica</p>
          <p className="text-sm font-medium">{siteConfig.professional.name}</p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.professional.credentials.join(" · ")}
          </p>
        </div>

        <div className="space-y-1 py-6 sm:px-6 sm:py-8 last:sm:pr-0">
          <p className="text-label text-primary">Redes sociais</p>
          <div className="flex flex-col gap-1">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              @odonto.solution
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

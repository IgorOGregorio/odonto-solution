import Image from "next/image";

import { FlowList, SectionRail, SectionShell } from "@/components/editorial/primitives";
import { structure, team } from "@/content/clinic";
import { siteConfig } from "@/content/site";

export function Clinic() {
  const member = team[0];

  if (!member) {
    return null;
  }

  return (
    <SectionShell id="equipe" bordered>
      <SectionRail
        label="A clínica"
        title={structure.heading}
        intro={structure.intro}
      >
        <div className="space-y-12">
          <article className="grid overflow-hidden bg-hero text-white ring-1 ring-white/10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="relative h-72 w-full overflow-hidden bg-black/20 sm:h-80 md:h-auto md:min-h-104">
              <Image
                src={siteConfig.heroImage}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-hero/70 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-hero/35"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 px-6 py-8 sm:px-10 sm:py-12 md:pr-12">
              <p className="text-label text-primary">{member.role}</p>
              <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                {member.name}
              </h3>
              <p className="text-sm text-white/60">
                {member.credentials.join(" · ")}
              </p>
            </div>
          </article>

          <FlowList items={structure.points} />
        </div>
      </SectionRail>
    </SectionShell>
  );
}

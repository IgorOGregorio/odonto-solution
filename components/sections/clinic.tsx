import Image from "next/image";

import { FlowList, SectionRail, SectionShell } from "@/components/editorial/primitives";
import { TeamPhotoCarousel } from "@/components/sections/team-photo-carousel";
import { structure, team, type TeamMember } from "@/content/clinic";

function FeaturedMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="grid overflow-hidden bg-hero text-white ring-1 ring-white/10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="relative h-72 w-full overflow-hidden bg-black/20 sm:h-80 md:h-auto md:min-h-104">
        <TeamPhotoCarousel photos={member.photos} alt={member.name} />
      </div>

      <div className="flex flex-col justify-center gap-5 px-6 py-8 sm:px-10 sm:py-12 md:pr-12">
        <p className="text-label text-primary">{member.role}</p>
        <h3 className="font-display text-3xl leading-tight sm:text-4xl">
          {member.name}
        </h3>
        {member.credentials.length > 0 && (
          <p className="text-sm text-white/60">
            {member.credentials.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const photo = member.photos[0];

  if (!photo) {
    return null;
  }

  return (
    <article className="overflow-hidden bg-hero text-white ring-1 ring-white/10">
      <div className="relative aspect-4/5 overflow-hidden bg-black/20">
        <Image
          src={photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-hero/80 via-transparent to-transparent"
        />
      </div>

      <div className="space-y-2 px-5 py-5 sm:px-6 sm:py-6">
        <p className="text-label text-primary">Equipe</p>
        <h3 className="font-display text-xl leading-tight sm:text-2xl">
          {member.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">{member.role}</p>
      </div>
    </article>
  );
}

export function Clinic() {
  const featured = team.find((member) => member.featured);
  const members = team.filter((member) => !member.featured);

  if (!featured) {
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
          <FeaturedMemberCard member={featured} />

          {members.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          )}

          <FlowList items={structure.points} />
        </div>
      </SectionRail>
    </SectionShell>
  );
}

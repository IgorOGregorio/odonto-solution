import { team } from "@/content/clinic";

export function Team() {
  const member = team[0];

  if (!member) {
    return null;
  }

  return (
    <section id="equipe" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label text-primary">Quem atende</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Equipe</h2>
          <p className="mt-4 text-muted-foreground">
            Atendimento sob a responsabilidade técnica da Dra. Jady.
          </p>
        </div>

        <article className="mx-auto mt-14 max-w-md rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm">
          <p className="font-display text-2xl">{member.name}</p>
          <p className="mt-2 text-sm text-primary">{member.role}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {member.credentials.join(" · ")}
          </p>
        </article>
      </div>
    </section>
  );
}

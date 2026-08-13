import type { Metadata } from "next";

import { Logo } from "@/components/brand/logo";
import { InterestForm } from "@/components/form/interest-form";
import { BackLink } from "@/components/layout/back-link";
import { masterclass } from "@/content/masterclass";

const introText =
  "Parabéns pelo interesse! Preencha este formulário para entrar na lista de prioridade. Assim que as inscrições forem abertas, nossa equipe entrará em contato com todas as informações sobre valores, formas de pagamento, datas e bônus exclusivos.";

export const metadata: Metadata = {
  title: "Lista de Interesse — Masterclass Odonto Solution",
  description: introText,
};

export default function MasterclassPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center bg-background px-4 py-12 sm:px-6 sm:py-20">
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-12">
        <div className="flex w-full justify-start">
          <BackLink />
        </div>

        <header className="animate-enter flex flex-col items-center gap-7 text-center">
          <Logo className="h-auto w-64 sm:w-80" />

          <div className="flex flex-col items-center gap-4">
            <p className="text-label text-primary">Lista de prioridade</p>
            <h1 className="max-w-lg font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl">
              Masterclass em Toxina Botulínica e Preenchimento Facial Avançado
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {introText}
            </p>
          </div>
        </header>

        <section className="w-full space-y-4">
          <h2 className="font-display text-2xl">{masterclass.learn.title}</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {masterclass.learn.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="w-full space-y-3">
          <h2 className="font-display text-2xl">{masterclass.forWhom.title}</h2>
          <p className="leading-relaxed text-muted-foreground">
            {masterclass.forWhom.body}
          </p>
        </section>

        <section className="w-full space-y-3">
          <h2 className="font-display text-2xl">{masterclass.teacher.title}</h2>
          <p className="font-medium text-foreground">{masterclass.teacher.name}</p>
          <p className="text-sm text-muted-foreground">
            {masterclass.teacher.credentials.join(" · ")}
          </p>
          <p className="leading-relaxed text-muted-foreground">
            {masterclass.teacher.body}
          </p>
        </section>

        <section className="w-full space-y-4">
          <h2 className="font-display text-2xl">
            {masterclass.differentials.title}
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {masterclass.differentials.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="w-full space-y-3">
          <h2 className="font-display text-2xl">
            {masterclass.certificate.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {masterclass.certificate.body}
          </p>
        </section>

        <div className="animate-enter animate-enter-delay-2 w-full max-w-xl">
          <InterestForm />
        </div>
      </div>
    </main>
  );
}

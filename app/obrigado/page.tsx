import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { ConversionEvents } from "@/components/tracking/conversion-events";

export const metadata: Metadata = {
  title: "Obrigado — Masterclass Odonto Solution",
  description:
    "Você entrou para a lista de prioridade da Masterclass Odonto Solution.",
};

export default function ObrigadoPage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-24">
      <ConversionEvents />

      <div className="mx-auto w-full max-w-lg animate-enter space-y-10">
        <Logo variant="dark" className="h-auto w-52 sm:w-64" />

        <div className="space-y-4 border-l-2 border-primary pl-6">
          <p className="text-label text-primary">Inscrição recebida</p>
          <h1 className="font-display text-3xl leading-tight text-balance sm:text-4xl">
            Obrigado pelo seu interesse
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Você entrou para nossa lista de prioridade. Em breve nossa equipe
            entrará em contato pelo WhatsApp com todas as informações sobre a
            Masterclass, condições especiais de lançamento e possíveis bônus
            exclusivos para os primeiros inscritos.
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Fique de olho no WhatsApp — a mensagem virá do número oficial da
          Odonto Solution.
        </p>

        <Link
          href="/masterclass"
          className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
        >
          Voltar ao formulário
        </Link>
      </div>
    </main>
  );
}

import { describe, expect, it } from "vitest";

import { siteConfig } from "@/content/site";

describe("siteConfig.nav", () => {
  it("exposes the five locked header items", () => {
    expect(siteConfig.nav).toEqual([
      { label: "Especialidades", href: "/#servicos" },
      { label: "Resultados", href: "/#resultados" },
      { label: "Clínica", href: "/#sobre" },
      { label: "Agendamento", href: "/#agendamento" },
      { label: "Masterclass", href: "/masterclass" },
    ]);
  });
});

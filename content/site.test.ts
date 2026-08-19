import { describe, expect, it } from "vitest";

import { siteConfig } from "@/content/site";

describe("siteConfig.nav", () => {
  it("exposes the four header items", () => {
    expect(siteConfig.nav).toEqual([
      { label: "Especialidades", href: "/#servicos" },
      { label: "Resultados", href: "/#resultados" },
      { label: "Localização", href: "/#localizacao" },
      { label: "Masterclass", href: "/masterclass" },
    ]);
  });
});

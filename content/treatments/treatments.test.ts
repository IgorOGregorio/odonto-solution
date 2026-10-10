import { describe, expect, it } from "vitest";

import { clareamento } from "@/content/treatments/clareamento";
import { harmonizacao } from "@/content/treatments/harmonizacao";
import { implantes } from "@/content/treatments/implantes";

describe("treatment content", () => {
  it("keeps implant content without a published payment offer", () => {
    const serialized = JSON.stringify(implantes);
    expect(serialized).not.toMatch(/15x/);
    expect(serialized).not.toMatch(/R\$/);
    expect(implantes.forWhom.body.length).toBeGreaterThan(0);
    expect(implantes.howItWorks.body.length).toBeGreaterThan(0);
    expect(implantes.surgeryFear.body.length).toBeGreaterThan(0);
    expect(implantes.surgeryFear.body).not.toMatch(/ausência total de desconforto/i);
    expect(implantes.surgeryFear.body).not.toMatch(/quando indicado/i);
    expect(implantes.surgeryFear.body).toMatch(/usamos anestesia e acompanhamos/i);

    const instalacao = implantes.howItWorks.steps.find(
      (step) => step.title === "Instalação",
    );
    const protese = implantes.howItWorks.steps.find(
      (step) => step.title === "Prótese",
    );
    expect(instalacao?.description).toMatch(/técnicas modernas/);
    expect(instalacao?.description).not.toMatch(/quando indicado/i);
    expect(protese?.description).toMatch(/mesmo dia/);
    expect(protese?.description).toMatch(/parte protética/);
    expect(implantes.whatsappMessage.length).toBeGreaterThan(0);
  });

  it("covers Botox, facial filler, and biostimulators", () => {
    const serialized = JSON.stringify(harmonizacao);
    expect(serialized).toMatch(/Botox/i);
    expect(serialized).toMatch(/Preenchimento facial/i);
    expect(serialized).toMatch(/Bioestimuladores/i);
    expect(harmonizacao.whatsappMessage).toMatch(/harmoniza/i);
  });

  it("locks whitening to 3 tons and hides the promo when it is null", () => {
    const serialized = JSON.stringify(clareamento);
    expect(serialized).toMatch(/3 tons/);
    expect(serialized).not.toMatch(/1\.200/);
    expect(clareamento.promo).toBeNull();
    expect(clareamento.types.body.length).toBeGreaterThan(0);
    expect(clareamento.duration.body.length).toBeGreaterThan(0);
    expect(clareamento.whoCan.body.length).toBeGreaterThan(0);
  });
});

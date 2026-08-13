import { describe, expect, it } from "vitest";

import { clareamento } from "@/content/treatments/clareamento";
import { harmonizacao } from "@/content/treatments/harmonizacao";
import { implantes } from "@/content/treatments/implantes";

describe("treatment content", () => {
  it("locks implant payment copy to 15x without inventing a total price", () => {
    const serialized = JSON.stringify(implantes);
    expect(serialized).toMatch(/15x/);
    expect(implantes.payment).toBe("Até 15x sem juros");
    expect(implantes.forWhom.body.length).toBeGreaterThan(0);
    expect(implantes.howItWorks.body.length).toBeGreaterThan(0);
    expect(implantes.surgeryFear.body.length).toBeGreaterThan(0);
    expect(implantes.whatsappMessage.length).toBeGreaterThan(0);
  });

  it("covers Botox, lip filler, and biostimulators", () => {
    const serialized = JSON.stringify(harmonizacao);
    expect(serialized).toMatch(/Botox/i);
    expect(serialized).toMatch(/Preenchimento labial/i);
    expect(serialized).toMatch(/Bioestimuladores/i);
    expect(harmonizacao.whatsappMessage).toMatch(/harmoniza/i);
  });

  it("locks whitening to 3 tons and a R$ 1.200 promo object", () => {
    const serialized = JSON.stringify(clareamento);
    expect(serialized).toMatch(/3 tons/);
    expect(serialized).toMatch(/1\.200/);
    expect(clareamento.promo).not.toBeNull();
    expect(clareamento.promo?.priceLabel).toBe("R$ 1.200");
    expect(clareamento.types.body.length).toBeGreaterThan(0);
    expect(clareamento.duration.body.length).toBeGreaterThan(0);
    expect(clareamento.whoCan.body.length).toBeGreaterThan(0);
  });
});

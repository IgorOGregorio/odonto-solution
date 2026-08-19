import { describe, expect, it } from "vitest";

import { structure, team } from "@/content/clinic";
import { faq, harmonizacaoFaq } from "@/content/faq";
import { siteConfig } from "@/content/site";
import { testimonials } from "@/content/testimonials";

describe("testimonials", () => {
  it("exports 2–3 first-person drafts without surnames", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(2);
    expect(testimonials.length).toBeLessThanOrEqual(3);

    for (const item of testimonials) {
      expect(item.quote.trim().length).toBeGreaterThan(0);
      expect(item.name.trim().length).toBeGreaterThan(0);
      expect(item.name).not.toMatch(/\s/);
      expect(item.quote).toMatch(/\b(eu|me|meu|minha|fiz|fui|saí|fiquei)\b/i);
    }
  });
});

describe("faq", () => {
  it("exports the 6 home questions and a short harmonizacao set", () => {
    expect(faq).toHaveLength(6);
    expect(harmonizacaoFaq.length).toBeGreaterThanOrEqual(3);
    expect(harmonizacaoFaq.length).toBeLessThanOrEqual(5);

    const homeQuestions = faq.map((item) => item.question).join(" ");
    expect(homeQuestions).toMatch(/horário/i);
    expect(homeQuestions).toMatch(/convênio/i);
    expect(faq[0]?.answer).toContain(siteConfig.hours.full);
  });
});

describe("clinic", () => {
  it("lists only Dra. Jady and describes space, equipment, staff, and reception", () => {
    expect(team).toHaveLength(1);
    expect(team[0]?.name).toMatch(/Jady/i);
    expect(structure.images.logo).toBe(siteConfig.logo);
    expect(structure.images.hero).toBe(siteConfig.heroImage);
    expect(structure.points).toHaveLength(4);

    const titles = structure.points.map((point) => point.title).join(" ");
    expect(titles).toMatch(/espaço/i);
    expect(titles).toMatch(/equipamento/i);
    expect(titles).toMatch(/especialistas|assistentes/i);
    expect(titles).toMatch(/recepção/i);
  });
});

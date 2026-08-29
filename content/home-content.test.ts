import { describe, expect, it } from "vitest";

import { structure, team } from "@/content/clinic";
import { faq, harmonizacaoFaq } from "@/content/faq";
import { siteConfig } from "@/content/site";
import { testimonials } from "@/content/testimonials";

describe("testimonials", () => {
  it("exports authorized patient testimonial screenshots", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
    expect(testimonials.length).toBeLessThanOrEqual(6);

    for (const item of testimonials) {
      expect(item.src).toMatch(/^\/images\/testimonials\//);
      expect(item.alt.trim().length).toBeGreaterThan(0);
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
  it("features Dra. Jady and lists the rest of the team by role", () => {
    expect(team.length).toBeGreaterThanOrEqual(4);

    const featured = team.find((member) => member.featured);
    expect(featured?.name).toMatch(/Jady/i);
    expect(featured?.photos.length).toBeGreaterThanOrEqual(3);

    const support = team.filter((member) => !member.featured);
    expect(support.length).toBeGreaterThanOrEqual(3);
    for (const member of support) {
      expect(member.photos[0]).toMatch(/^\/images\/team\/web\//);
    }
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

import { describe, expect, it } from "vitest";

import { specialties } from "@/content/specialties";

const EXPECTED_LABELS = [
  "Implantes Dentários",
  "Facetas em Resina e Porcelana",
  "Clareamento Dental",
  "Aparelho Ortodôntico",
  "Tratamento de Canal",
  "Próteses Dentárias",
  "Periodontia",
  "Cirurgias Odontológicas",
  "Bucomaxilofacial",
  "DTM e Dor Orofacial",
  "Clínico Geral",
  "Harmonização Facial",
] as const;

const FEATURED_HREFS = {
  "Implantes Dentários": "/implantes",
  "Clareamento Dental": "/clareamento",
  "Harmonização Facial": "/harmonizacao-facial",
} as const;

describe("specialties catalog", () => {
  it("exports 12 specialties in briefing order", () => {
    expect(specialties).toHaveLength(12);
    expect(specialties.map((item) => item.label)).toEqual([...EXPECTED_LABELS]);
  });

  it("gives href only to the three featured treatments", () => {
    for (const item of specialties) {
      const expected =
        FEATURED_HREFS[item.label as keyof typeof FEATURED_HREFS];
      expect(item.href).toBe(expected);
    }
  });

  it("gives every specialty a blurb and WhatsApp message", () => {
    for (const item of specialties) {
      expect(item.blurb.trim().length).toBeGreaterThan(0);
      expect(item.whatsappMessage.trim().length).toBeGreaterThan(0);
    }
  });

  it("reuses current media on the three featured specialties", () => {
    const implantes = specialties.find((item) => item.label === "Implantes Dentários");
    const clareamento = specialties.find(
      (item) => item.label === "Clareamento Dental",
    );
    const harmonizacao = specialties.find(
      (item) => item.label === "Harmonização Facial",
    );

    expect(implantes).toMatchObject({
      image: "/images/highlights/implantes.jpg",
      video: "/images/highlights/facetas-reel.mp4",
    });
    expect(clareamento).toMatchObject({
      video: "/images/highlights/clareamento-reel.mp4",
    });
    expect(harmonizacao).toMatchObject({
      image: "/images/highlights/botox.jpg",
      video: "/images/highlights/botox-reel.mp4",
    });
  });

  it("does not include Pediatria", () => {
    const serialized = JSON.stringify(specialties);
    expect(serialized).not.toMatch(/pediatria/i);
  });
});

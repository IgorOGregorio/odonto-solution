import { describe, expect, it } from "vitest";

import { gallery, galleryByTreatment } from "@/content/gallery";

describe("gallery content", () => {
  it("keeps the current clinic gallery items", () => {
    expect(gallery.length).toBeGreaterThanOrEqual(9);
    expect(gallery.map((item) => item.src)).toEqual(
      expect.arrayContaining([
        "/images/gallery/reabilitacao-oral.png",
        "/images/gallery/botox-pes-de-galinha.jpg",
      ]),
    );
  });

  it("tags oral rehabilitation as implants and botox photos as harmonizacao", () => {
    const treatments = gallery.map((item) => item.treatment);
    expect(treatments).toContain("implantes");
    expect(treatments).toContain("harmonizacao");

    const rehab = gallery.find((item) => item.src.includes("reabilitacao-oral"));
    expect(rehab?.treatment).toBe("implantes");

    const botoxItems = gallery.filter((item) => /botox/i.test(item.src));
    expect(botoxItems.length).toBeGreaterThan(0);
    expect(botoxItems.every((item) => item.treatment === "harmonizacao")).toBe(
      true,
    );
  });

  it("filters implant cases without returning harmonizacao-only photos", () => {
    const implants = galleryByTreatment("implantes");
    expect(implants.length).toBeGreaterThan(0);
    expect(
      implants.every((item) => item.treatment === "implantes"),
    ).toBe(true);
    expect(implants.some((item) => item.treatment === "harmonizacao")).toBe(
      false,
    );
    expect(implants.some((item) => /botox/i.test(item.src))).toBe(false);
  });
});

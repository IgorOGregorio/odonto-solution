import { describe, expect, it } from "vitest";

import { masterclass } from "@/content/masterclass";
import { siteConfig } from "@/content/site";

describe("masterclass marketing content", () => {
  it("exports the five marketing sections", () => {
    expect(masterclass.learn.title.length).toBeGreaterThan(0);
    expect(masterclass.learn.items.length).toBeGreaterThan(0);
    expect(masterclass.forWhom.title.length).toBeGreaterThan(0);
    expect(masterclass.forWhom.body.length).toBeGreaterThan(0);
    expect(masterclass.teacher.title.length).toBeGreaterThan(0);
    expect(masterclass.teacher.name).toBe(siteConfig.professional.name);
    expect(masterclass.differentials.title.length).toBeGreaterThan(0);
    expect(masterclass.differentials.items.length).toBeGreaterThan(0);
    expect(masterclass.certificate.title.length).toBeGreaterThan(0);
    expect(masterclass.certificate.body.length).toBeGreaterThan(0);
  });
});

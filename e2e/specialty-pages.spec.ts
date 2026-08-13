import { test, expect } from "@playwright/test";

test.describe("/implantes", () => {
  test("shows implant content and payment terms without the home map heading", async ({
    page,
  }) => {
    await page.goto("/implantes");

    await expect(
      page.getByRole("heading", { name: /Implantes/i }),
    ).toBeVisible();
    await expect(page.getByText(/Para quem/i).first()).toBeVisible();
    await expect(page.getByText(/Como funciona/i).first()).toBeVisible();
    await expect(page.getByText(/cirurgia/i).first()).toBeVisible();
    await expect(page.getByText(/15x/i)).toBeVisible();
    await expect(
      page.getByRole("link", { name: /WhatsApp/i }).first(),
    ).toBeVisible();
    await expect(page.getByText("Venha nos visitar")).toHaveCount(0);
  });
});

test.describe("/harmonizacao-facial", () => {
  test("shows Botox, fillers, biostimulators, and treatment FAQ", async ({
    page,
  }) => {
    await page.goto("/harmonizacao-facial");

    await expect(
      page.getByRole("heading", { name: /Harmonização Facial/i }),
    ).toBeVisible();
    await expect(page.getByText("Botox", { exact: true }).first()).toBeVisible();
    await expect(page.getByText(/Preenchimento/i).first()).toBeVisible();
    await expect(page.getByText(/Bioestimuladores/i).first()).toBeVisible();
    await expect(
      page.getByText(/Quanto tempo dura o efeito do Botox/i),
    ).toBeVisible();
  });
});

test.describe("/clareamento", () => {
  test("shows 3 tons claim, promo price, and a scheduling CTA", async ({
    page,
  }) => {
    await page.goto("/clareamento");

    await expect(page.getByText(/3 tons/i)).toBeVisible();
    await expect(page.getByText(/1\.200/)).toBeVisible();
    await expect(
      page.getByRole("link", { name: /WhatsApp|Agendar/i }).first(),
    ).toBeVisible();
  });
});

const TREATMENT_URLS = [
  "/implantes",
  "/harmonizacao-facial",
  "/clareamento",
] as const;

for (const path of TREATMENT_URLS) {
  test.describe(path, () => {
    test("does not duplicate home catalog, map, or Masterclass teaser", async ({
      page,
    }) => {
      await page.goto(path);

      await expect(page.locator("iframe[src*='maps']")).toHaveCount(0);
      await expect(
        page.getByRole("link", { name: /Conhecer a Masterclass/i }),
      ).toHaveCount(0);
      await expect(
        page.getByText("Bucomaxilofacial", { exact: true }),
      ).toHaveCount(0);
      await expect(page.getByText("Periodontia", { exact: true })).toHaveCount(
        0,
      );
      await expect(
        page.getByText(/Fui muito bem acolhida e saí com um plano claro/i),
      ).toBeVisible();
    });
  });
}

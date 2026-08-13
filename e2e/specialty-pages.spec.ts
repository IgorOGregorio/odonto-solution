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

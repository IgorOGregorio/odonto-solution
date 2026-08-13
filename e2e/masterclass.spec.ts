import { test, expect } from "@playwright/test";

test("masterclass page shows heading and labeled required fields", async ({
  page,
}) => {
  await page.goto("/masterclass");

  await expect(
    page.getByRole("heading", { name: /Masterclass/i }),
  ).toBeVisible();
  await expect(page.getByLabel(/Nome completo/i)).toBeVisible();
});

test("masterclass shows back link and marketing sections without clinic nav", async ({
  page,
}) => {
  await page.goto("/masterclass");

  const back = page.getByRole("link", { name: /Voltar/i });
  await expect(back).toBeVisible();
  await expect(back).toHaveAttribute("href", "/");
  await expect(page.getByText(/aprender/i).first()).toBeVisible();
  await expect(page.getByText(/para quem/i).first()).toBeVisible();
  await expect(page.getByText(/professora/i).first()).toBeVisible();
  await expect(page.getByText(/certificado/i).first()).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Especialidades", exact: true }),
  ).toHaveCount(0);
  await expect(page.getByLabel(/Nome completo/i)).toBeVisible();
});

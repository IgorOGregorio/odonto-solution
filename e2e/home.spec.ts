import { test, expect } from "@playwright/test";

const SPECIALTY_LABELS = [
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

test("home does not redirect to masterclass and shows clinic brand", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).not.toHaveURL(/\/masterclass/);
  await expect(page.getByText("Odonto Solution").first()).toBeVisible();
});

test("home lists the 12 specialties, featured links, and Masterclass teaser", async ({
  page,
}) => {
  await page.goto("/");

  for (const label of SPECIALTY_LABELS) {
    await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
  }

  await expect(page.getByRole("link", { name: /Implantes Dentários/i })).toHaveAttribute(
    "href",
    "/implantes",
  );
  await expect(
    page.getByRole("link", { name: /Harmonização Facial/i }),
  ).toHaveAttribute("href", "/harmonizacao-facial");
  await expect(
    page.getByRole("link", { name: /Clareamento Dental/i }),
  ).toHaveAttribute("href", "/clareamento");

  await expect(
    page.getByRole("link", { name: /Conhecer a Masterclass/i }),
  ).toBeVisible();

  await expect(page.getByText(/pediatria/i)).toHaveCount(0);
});

test("home shows patient testimonials", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Depoimentos/i }),
  ).toBeVisible();
  await expect(
    page.getByText(/Fui muito bem acolhida e saí com um plano claro/i),
  ).toBeVisible();
});


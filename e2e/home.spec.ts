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

test("home shows team and clinic structure after testimonials", async ({
  page,
}) => {
  await page.goto("/");

  const equipe = page.locator("#equipe");
  await expect(equipe).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Equipe e estrutura/i }),
  ).toBeVisible();
  await expect(equipe.getByText(/Dra\. Jady Musa/i)).toBeVisible();
  await expect(
    equipe.getByRole("heading", { name: "Espaço completo" }),
  ).toBeVisible();
  await expect(
    equipe.getByRole("heading", { name: "Equipamentos de alta qualidade" }),
  ).toBeVisible();
  await expect(
    equipe.getByRole("heading", { name: "Especialistas e assistentes" }),
  ).toBeVisible();
  await expect(
    equipe.getByRole("heading", { name: "Recepção sempre presente" }),
  ).toBeVisible();
});

test("home shows clinic FAQ with native details", async ({ page }) => {
  await page.goto("/");

  const question = page.getByText("Qual o horário de funcionamento?");
  await expect(question).toBeVisible();
  await expect(page.locator("#faq details")).toHaveCount(6);
  await expect(page.locator("#faq details[open]")).toHaveCount(0);
});


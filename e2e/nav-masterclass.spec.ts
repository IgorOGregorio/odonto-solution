import { test, expect } from "@playwright/test";

test.describe.skip("Masterclass nav link is hidden", () => {
test("landing nav includes Masterclass link to /masterclass", async ({
  page,
}) => {
  await page.goto("/");

  const link = page.getByRole("link", { name: "Masterclass", exact: true });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", "/masterclass");
});
});

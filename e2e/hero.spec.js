import { test, expect } from "@playwright/test";

test.describe("Hero Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero section is visible on load without scrolling", async ({ page }) => {
    await expect(page.locator(".hero")).toBeVisible();
  });

  test("displays the designer name", async ({ page }) => {
    await expect(page.locator(".hero-name")).toHaveText("Joann Carter");
  });

  test("portrait image loads without breaking", async ({ page }) => {
    const portrait = page.locator(".hero-image");
    await expect(portrait).toBeVisible();

    const naturalWidth = await portrait.evaluate((img) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("CTA button is visible", async ({ page }) => {
    const cta = page.locator(".btn-cta");
    await expect(cta).toBeVisible();
    await expect(cta).toContainText("View My Design Process");
  });

  test("CTA links to the Figma design process in a new tab", async ({ page }) => {
    const cta = page.locator(".btn-cta");
    await expect(cta).toHaveAttribute("href", /figma\.com/);
    await expect(cta).toHaveAttribute("target", "_blank");
  });
});

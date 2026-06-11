import { test, expect } from "@playwright/test";

test.describe("Accessibility basics", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has a title", async ({ page }) => {
    const title = await page.title();
    expect(title.trim().length).toBeGreaterThan(0);
  });

  test("navbar has a nav landmark role", async ({ page }) => {
    await expect(page.locator("nav.nav-bar")).toBeVisible();
  });

  test("there is exactly one h1 on the homepage", async ({ page }) => {
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
  });

  test("hero portrait image has a non-empty alt attribute", async ({ page }) => {
    const img = page.locator(".hero-image");
    const alt = await img.getAttribute("alt");
    expect(alt && alt.trim().length).toBeGreaterThan(0);
  });

  test("footer logo image has a non-empty alt attribute", async ({ page }) => {
    const img = page.locator(".footer-image");
    const alt = await img.getAttribute("alt");
    expect(alt && alt.trim().length).toBeGreaterThan(0);
  });

  test("navbar logo image has a non-empty alt attribute", async ({ page }) => {
    const img = page.locator(".logo img");
    const alt = await img.getAttribute("alt");
    expect(alt && alt.trim().length).toBeGreaterThan(0);
  });

  test("case study detail page has exactly one h1", async ({ page }) => {
    await page.goto("/case-study/0");
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
  });

  test("error page has exactly one h1 with the error code", async ({ page }) => {
    await page.goto("/nonexistent");
    const h1s = page.locator("h1");
    await expect(h1s).toHaveCount(1);
    await expect(h1s.first()).toHaveText("404");
  });
});

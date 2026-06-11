import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(".footer").scrollIntoViewIfNeeded();
  });

  test("footer is visible on the homepage", async ({ page }) => {
    await expect(page.locator(".footer")).toBeVisible();
  });

  test("footer logo image loads", async ({ page }) => {
    const logo = page.locator(".footer-image");
    await expect(logo).toBeVisible();
    const naturalWidth = await logo.evaluate((img) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("LinkedIn link is an <a> pointing to linkedin.com", async ({ page }) => {
    const link = page.locator('.footer-socials a[href*="linkedin.com"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("GitHub link is an <a> pointing to github.com", async ({ page }) => {
    const link = page.locator('.footer-socials a[href*="github.com"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("Behance link is an <a> pointing to behance.net", async ({ page }) => {
    const link = page.locator('.footer-socials a[href*="behance.net"]');
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("footer displays copyright text", async ({ page }) => {
    await expect(page.locator(".footer-copyright")).toContainText("Joann Carter");
  });
});

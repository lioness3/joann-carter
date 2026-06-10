import { test, expect } from "@playwright/test";

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 480, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("desktop nav links are hidden on mobile", async ({ page }) => {
    await expect(page.locator(".nav-bar-menu-items")).toBeHidden();
  });

  test("hamburger button is visible on mobile", async ({ page }) => {
    await expect(page.locator(".hamburger-btn")).toBeVisible();
  });

  test("mobile menu is closed by default", async ({ page }) => {
    const menu = page.locator(".global-mobile-menu");
    await expect(menu).not.toHaveClass(/\bopen\b/);
  });

  test("tapping hamburger opens the mobile menu", async ({ page }) => {
    await page.locator(".hamburger-btn").click();
    await expect(page.locator(".global-mobile-menu")).toHaveClass(/\bopen\b/);
  });

  test("mobile menu contains all navigation links", async ({ page }) => {
    await page.locator(".hamburger-btn").click();
    const menu = page.locator(".global-mobile-menu");

    for (const label of ["Case Studies", "My Process", "Resume", "About Me", "Contact"]) {
      await expect(menu.locator(`a:has-text("${label}")`)).toBeVisible();
    }
  });

  test("close button dismisses the mobile menu", async ({ page }) => {
    await page.locator(".hamburger-btn").click();
    await expect(page.locator(".global-mobile-menu")).toHaveClass(/\bopen\b/);

    await page.locator(".global-close-btn").click();
    await expect(page.locator(".global-mobile-menu")).not.toHaveClass(/\bopen\b/);
  });

  test("tapping the overlay dismisses the mobile menu", async ({ page }) => {
    await page.locator(".hamburger-btn").click();
    await expect(page.locator(".global-mobile-menu")).toHaveClass(/\bopen\b/);

    await page.locator(".global-overlay").click();
    await expect(page.locator(".global-mobile-menu")).not.toHaveClass(/\bopen\b/);
  });

  test("tapping a menu link closes the menu", async ({ page }) => {
    await page.locator(".hamburger-btn").click();
    await page.locator(".global-mobile-menu a:has-text('My Process')").click();
    await page.waitForTimeout(400);
    await expect(page.locator(".global-mobile-menu")).not.toHaveClass(/\bopen\b/);
  });
});

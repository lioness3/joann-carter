import { test, expect } from "@playwright/test";

test.describe("Portfolio Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("homepage loads and displays hero section", async ({ page }) => {
    // Check that the navbar is visible
    await expect(page.locator(".nav-bar")).toBeVisible();

    // Check that the logo is clickable
    const logo = page.locator(".logo a");
    await expect(logo).toBeVisible();
  });

  test("navigation links scroll to correct sections", async ({ page }) => {
    await page.locator('.nav-bar-menu-items a:has-text("Case Studies")').click();
    await page.waitForTimeout(1000);
    await expect(page.locator(".case-study-card").first()).toBeInViewport();
  });

  test("hamburger menu opens on mobile", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 480, height: 800 });

    // Hamburger button should be visible on mobile
    const hamburger = page.locator(".hamburger-btn");
    await expect(hamburger).toBeVisible();

    // Click hamburger to open menu
    await hamburger.click();

    // Mobile menu should be visible
    const mobileMenu = page.locator(".global-mobile-menu");
    await expect(mobileMenu).toBeVisible();
  });

  test("logo link navigates to home", async ({ page }) => {
    // Navigate away from home
    await page.goto("case-study/0");

    // Click logo to go back home
    await page.locator(".logo a").click();

    // Should be back on homepage
    await expect(page).toHaveURL("/");
  });
});

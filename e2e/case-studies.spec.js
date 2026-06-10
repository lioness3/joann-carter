import { test, expect } from "@playwright/test";

test.describe("Case Studies", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("case studies section is visible on homepage", async ({ page }) => {
    // Scroll to case studies section
    const caseStudiesSection = page.locator('section:has-text("Case Studies")');
    await caseStudiesSection.scrollIntoViewIfNeeded();

    // Case studies section should be visible
    await expect(caseStudiesSection).toBeVisible();
  });

  test("case study cards display correctly", async ({ page }) => {
    // Get all case study cards
    const cards = page.locator(".case-study-card");

    // Should have at least one card
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    // First card should be visible
    await expect(cards.first()).toBeVisible();
  });

  test("clicking a case study card navigates to detail page", async ({
    page,
  }) => {
    // Get the first case study card link
    const firstCardLink = page.locator(".case-study-link").first();

    // Click the card
    await firstCardLink.click();

    // Should navigate to case study detail page
    await expect(page).toHaveURL(/\/case-study\/\d+/);

    // Case study detail content should be visible
    await expect(page.locator(".case-study-simple-header")).toBeVisible();
  });

  test("case study detail page displays navigation menu", async ({ page }) => {
    // Navigate to a case study
    await page.goto("/case-study/0");

    // Side menu should be visible
    const sideMenu = page.locator(".side-menu");
    await expect(sideMenu).toBeVisible();

    // Should have menu items
    const menuItems = page.locator(".side-menu-item");
    const itemCount = await menuItems.count();
    expect(itemCount).toBeGreaterThan(0);
  });

  test("can navigate back from case study detail", async ({ page }) => {
    // Navigate to a case study
    await page.goto("/case-study/0");

    // Find and click the back link/button
    const backLink = page.locator(".side-menu-back");
    await expect(backLink).toBeVisible();
    await backLink.click();

    // Should be back on homepage
    await expect(page).toHaveURL("/");
  });
});

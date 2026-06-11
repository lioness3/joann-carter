import { test, expect } from "@playwright/test";

test.describe("Case Study Cards", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator(".case-study-card").first().scrollIntoViewIfNeeded();
  });

  test("each card navigates to its own unique case study URL", async ({ page }) => {
    const links = page.locator(".case-study-link");
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    const urls = new Set();
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute("href");
      expect(href).toMatch(/\/case-study\/\d+/);
      urls.add(href);
    }

    // Every card should point to a different URL
    expect(urls.size).toBe(count);
  });

  test("first card navigates to /case-study/0", async ({ page }) => {
    await page.locator(".case-study-link").first().click();
    await expect(page).toHaveURL("/case-study/0");
  });

  test("each case study URL loads content, not a blank page", async ({ page }) => {
    const links = page.locator(".case-study-link");
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      await page.goto(`/case-study/${i}`);
      await expect(page.locator(".case-study-simple-header")).toBeVisible();
    }
  });

  test("each card displays a title", async ({ page }) => {
    const titles = page.locator(".case-study-title");
    const count = await titles.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const text = await titles.nth(i).innerText();
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });
});

test.describe("Invalid case study ID", () => {
  // /case-study/999 has no matching data — the app should not silently show a blank page
  test("navigating to a nonexistent case study ID shows the 404 error page", async ({ page }) => {
    await page.goto("/case-study/999");
    await expect(page.locator(".error-page")).toBeVisible();
    await expect(page.locator(".error-code")).toHaveText("404");
  });
});

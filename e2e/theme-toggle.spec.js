import { test, expect } from "@playwright/test";

// The site stores the user's theme choice ("light" or "dark") in localStorage
// and applies it via a data-theme attribute on <html>. These tests verify that
// the toggle button works, the preference is saved, and it survives a reload.
// The toggle button uses class .theme-toggle (not .theme-toggle-btn — that was
// the wrong selector causing all three tests to fail).

test.describe("Theme Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // Clicking the sun/moon button should flip data-theme on <html> between
  // "light" and "dark". This drives all the CSS variable overrides.
  test("theme toggle switches between light and dark mode", async ({ page }) => {
    const initialTheme = await page.locator("html").getAttribute("data-theme");

    const themeToggle = page.locator(".theme-toggle");
    await expect(themeToggle).toBeVisible();
    await themeToggle.click();

    await page.waitForTimeout(300);

    const newTheme = await page.locator("html").getAttribute("data-theme");

    expect(newTheme).not.toBe(initialTheme);
    expect(["light", "dark"]).toContain(newTheme);
  });

  // After toggling, the chosen theme must be written to localStorage so that
  // future visits (or reloads) restore it instead of defaulting to light.
  test("theme preference is persisted in localStorage", async ({ page }) => {
    const themeToggle = page.locator(".theme-toggle");
    await themeToggle.click();
    await page.waitForTimeout(300);

    const storedTheme = await page.evaluate(() =>
      localStorage.getItem("theme"),
    );
    const currentTheme = await page.locator("html").getAttribute("data-theme");

    expect(storedTheme).toBe(currentTheme);
  });

  // If a visitor sets dark mode and then reloads, they should not be snapped
  // back to light. This test verifies the localStorage value is read on mount.
  test("theme persists on page reload", async ({ page }) => {
    const themeToggle = page.locator(".theme-toggle");
    await themeToggle.click();
    await page.waitForTimeout(300);

    const themeBeforeReload = await page
      .locator("html")
      .getAttribute("data-theme");

    await page.reload();

    const themeAfterReload = await page
      .locator("html")
      .getAttribute("data-theme");

    expect(themeAfterReload).toBe(themeBeforeReload);
  });
});

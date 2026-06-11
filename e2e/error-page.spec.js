import { test, expect } from "@playwright/test";

test.describe("Error Pages", () => {
  test("404 page shows when navigating to a nonexistent route", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.locator(".error-page")).toBeVisible();
  });

  test("404 page displays the correct error code", async ({ page }) => {
    await page.goto("/nonexistent");
    await expect(page.locator(".error-code")).toHaveText("404");
  });

  test("404 page displays the correct message", async ({ page }) => {
    await page.goto("/nonexistent");
    await expect(page.locator(".error-message")).toHaveText("Page not found.");
    await expect(page.locator(".error-sub")).toHaveText(
      "This page doesn't exist or was moved."
    );
  });

  test("500 page displays the correct error code and message", async ({ page }) => {
    await page.goto("/500");
    await expect(page.locator(".error-code")).toHaveText("500");
    await expect(page.locator(".error-message")).toHaveText(
      "Something went wrong."
    );
  });

  test("robot image is visible on the error page", async ({ page }) => {
    await page.goto("/nonexistent");
    const robot = page.locator(".error-robot");
    await expect(robot).toBeVisible();

    // Confirm the image actually loaded
    const naturalWidth = await robot.evaluate((img) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("Go home button navigates back to the homepage", async ({ page }) => {
    await page.goto("/nonexistent");
    await page.locator("button", { hasText: "Go home" }).click();
    await expect(page).toHaveURL("/");
  });
});

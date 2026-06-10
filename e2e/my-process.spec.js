import { test, expect } from "@playwright/test";

test.describe("My Process Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#my-process").scrollIntoViewIfNeeded();
  });

  test("my process section is present on the page", async ({ page }) => {
    await expect(page.locator("#my-process")).toBeVisible();
  });

  test("UX process wheel image renders and is not broken", async ({ page }) => {
    const wheel = page.locator("#my-process .process-image-container img").first();
    await expect(wheel).toBeVisible();

    const naturalWidth = await wheel.evaluate((img) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

test("each process section has a visible image", async ({ page }) => {
    const images = page.locator(".process-image-container img");
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(4);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await img.scrollIntoViewIfNeeded();
      const naturalWidth = await img.evaluate((el) => el.naturalWidth);
      expect(naturalWidth, `process image ${i} should load`).toBeGreaterThan(0);
    }
  });

  test("image captions are present below mockup images", async ({ page }) => {
    const captions = page.locator(".img-subtext");
    const count = await captions.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const text = await captions.nth(i).innerText();
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  test("GitHub link in Development section is present and external", async ({ page }) => {
    const githubLink = page.locator("#process-github-link");
    await githubLink.scrollIntoViewIfNeeded();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute("target", "_blank");
    const href = await githubLink.getAttribute("href");
    expect(href).toContain("github.com");
  });
});

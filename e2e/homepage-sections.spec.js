import { test, expect } from "@playwright/test";

test.describe("Homepage Sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("all main sections are accessible via scrolling", async ({ page }) => {
    const sections = [
      "case-studies",
      "my-process",
      "resume-section",
      "about-me",
      "contact-me",
    ];

    for (const sectionId of sections) {
      // Scroll to section
      const section = page.locator(`#${sectionId}`);
      await section.scrollIntoViewIfNeeded();

      // Section should be visible
      await expect(section).toBeInViewport();
    }
  });

  test("footer displays contact information", async ({ page }) => {
    // Scroll to bottom of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Footer should be visible
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("footer links are functional", async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Get all links in footer
    const footerLinks = page.locator("footer a");
    const linkCount = await footerLinks.count();

    // Should have at least one link
    expect(linkCount).toBeGreaterThan(0);

    // Links should have href attributes
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const href = await footerLinks.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
    }
  });

  test("resume section displays correctly", async ({ page }) => {
    // Scroll to resume section
    const resumeSection = page.locator("#resume-section");
    await resumeSection.scrollIntoViewIfNeeded();

    // Resume section should be visible
    await expect(resumeSection).toBeVisible();
  });

  test("about me section displays correctly", async ({ page }) => {
    // Scroll to about me section
    const aboutSection = page.locator("#about-me");
    await aboutSection.scrollIntoViewIfNeeded();

    // About section should be visible
    await expect(aboutSection).toBeVisible();
  });
});

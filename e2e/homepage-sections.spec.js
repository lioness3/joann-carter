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

  test("contact section displays site info", async ({ page }) => {
    const contact = page.locator("#contact-me");
    await contact.scrollIntoViewIfNeeded();
    await expect(contact.locator(".contact-updated")).toContainText("Last Updated");
    await expect(contact.locator(".contact-location")).toContainText("New Hampshire");
    await expect(contact.locator(".contact-copyright")).toContainText("Joann Carter");
  });

  test("contact social links are functional", async ({ page }) => {
    const links = page.locator("#contact-me .contact-socials a");
    await links.first().scrollIntoViewIfNeeded();
    await expect(links).toHaveCount(3);
    for (const [i, domain] of ["linkedin.com", "github.com", "behance.net"].entries()) {
      await expect(links.nth(i)).toHaveAttribute("href", new RegExp(domain));
      await expect(links.nth(i)).toHaveAttribute("target", "_blank");
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

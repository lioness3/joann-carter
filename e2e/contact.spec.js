import { test, expect } from "@playwright/test";

test.describe("Contact Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.locator("#contact-me").scrollIntoViewIfNeeded();
  });

  test("contact section is visible", async ({ page }) => {
    await expect(page.locator("#contact-me")).toBeVisible();
  });

  test("all three contact buttons are present", async ({ page }) => {
    await expect(page.locator("button:has-text('Email Me')")).toBeVisible();
    await expect(page.locator("button:has-text('Call Me')")).toBeVisible();
    await expect(page.locator("button:has-text('Text Me')")).toBeVisible();
  });

  test("email address is displayed in the contact section", async ({ page }) => {
    const emailText = page.locator(".email-text");
    await expect(emailText).toBeVisible();
    const text = await emailText.innerText();
    expect(text).toMatch(/@/);
  });

  test("copy email icon is present next to the email address", async ({ page }) => {
    await expect(page.locator(".copy-icon")).toBeVisible();
  });

  test("contact section has three subsections", async ({ page }) => {
    const sections = page.locator("#contact-me .contact-section");
    await expect(sections).toHaveCount(3);
  });
});

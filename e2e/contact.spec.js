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
    await expect(page.getByRole("button", { name: "Email", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Call", exact: true })).toBeVisible();
    await expect(page.getByRole("button", { name: "Text", exact: true })).toBeVisible();
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
});

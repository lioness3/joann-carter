import { test, expect } from "@playwright/test";

// Buttons fall into two categories:
//   • Action buttons (variant="primary" / "outline") — render as <button>, use onClick
//   • Link buttons   (variant="secondary")           — render as <a href>, open a URL
//
// The key thing to verify for link buttons is that they actually ARE <a> tags with a
// real href. A common mistake in this codebase was passing primary={false} instead of
// variant="secondary", which caused the Button component to silently render as a <button>
// with no href — the click did nothing. These tests catch that regression.

test.describe("Homepage action buttons", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("View My Work CTA is a button and scrolls the page down", async ({ page }) => {
    const btn = page.locator(".btn-cta");
    await expect(btn).toBeVisible();
    // Should be a <button>, not an <a>
    await expect(btn).toHaveRole("button");

    const scrollBefore = await page.evaluate(() => window.scrollY);
    await btn.click();
    await page.waitForTimeout(800);
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(scrollBefore);
  });

  test("contact Email Me button is visible and is a button element", async ({ page }) => {
    await page.locator("#contact-me").scrollIntoViewIfNeeded();
    const btn = page.locator("button:has-text('Email Me')");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveRole("button");
  });

  test("contact Call Me button is visible and is a button element", async ({ page }) => {
    await page.locator("#contact-me").scrollIntoViewIfNeeded();
    const btn = page.locator("button:has-text('Call Me')");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveRole("button");
  });

  test("contact Text Me button is visible and is a button element", async ({ page }) => {
    await page.locator("#contact-me").scrollIntoViewIfNeeded();
    const btn = page.locator("button:has-text('Text Me')");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveRole("button");
  });
});

test.describe("Case study Contents button", () => {
  // The Contents button replaces the side menu on mobile only (display:none on desktop).
  // This test uses a mobile viewport so the button is actually rendered.
  test.use({ viewport: { width: 480, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/case-study/0");
    await expect(page.locator(".case-study-simple-header")).toBeVisible();
  });

  test("Contents button is an outline button that opens the contents menu", async ({ page }) => {
    const btn = page.locator(".contents-btn");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveRole("button");

    // Menu should be closed by default
    await expect(page.locator(".contents-menu")).not.toHaveClass(/open/);

    await btn.click();
    await expect(page.locator(".contents-menu")).toHaveClass(/open/);
  });
});

test.describe("Link buttons render as <a> tags with valid hrefs", () => {
  // These tests guard against the primary={false} regression where link buttons
  // silently rendered as <button> elements and did nothing when clicked.

  test("View the Source Code on Thermostat is an <a> pointing to GitHub", async ({ page }) => {
    await page.goto("/case-study/3");
    const btn = page.locator(".sourcecode_btn");
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeVisible();

    // Must be an <a>, not a <button>
    await expect(btn).toHaveRole("link");
    const href = await btn.getAttribute("href");
    expect(href).toContain("github.com");
    await expect(btn).toHaveAttribute("target", "_blank");
  });

  test("Prototype button on Camp Store is an <a> pointing to Figma", async ({ page }) => {
    await page.goto("/case-study/0");
    const btn = page.locator(".prototype-card a").first();
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeVisible();

    await expect(btn).toHaveRole("link");
    const href = await btn.getAttribute("href");
    expect(href).toContain("figma.com");
    await expect(btn).toHaveAttribute("target", "_blank");
  });

  test("Final Design button on Camp Store is an <a> with an href", async ({ page }) => {
    await page.goto("/case-study/0");
    const btn = page.locator(".final-design-btn");
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeVisible();

    await expect(btn).toHaveRole("link");
    const href = await btn.getAttribute("href");
    expect(href).toBeTruthy();
    await expect(btn).toHaveAttribute("target", "_blank");
  });
});

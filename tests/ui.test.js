// tests/ui.test.js
const { test, expect } = require('@playwright/test');

test('UI test: check page title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
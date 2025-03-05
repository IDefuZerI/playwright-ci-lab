// tests/e2e.test.js
const { test, expect } = require('@playwright/test');

test('E2E test: login and check message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Заповнюємо форму логіну
  await page.fill('#username', 'tomsmith'); // Логін
  await page.fill('#password', 'SuperSecretPassword!'); // Пароль
  await page.click('button[type="submit"]'); // Кнопка входу

  // Перевіряємо, що повідомлення про успішний вхід відображається
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
// tests/api.test.js
const { test, expect } = require('@playwright/test');

test('API test: check status code', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const json = await response.json();
  expect(json.id).toBe(1);
});
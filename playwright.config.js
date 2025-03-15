// playwright.config.js
const config = {
  testDir: './tests',
  reporter: [['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
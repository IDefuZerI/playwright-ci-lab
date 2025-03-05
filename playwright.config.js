// playwright.config.js
const config = {
    testDir: './tests', // Папка з тестами
    timeout: 30000, // Таймаут для тестів
    use: {
      headless: false, // Запуск у режимі з браузером
      viewport: { width: 1280, height: 720 },
    },
  };
  
  module.exports = config;
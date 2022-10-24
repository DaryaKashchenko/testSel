// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    browserName : 'chromium',
    headless: true,
    screenshot: 'on',
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure'
  }
};

module.exports = config;
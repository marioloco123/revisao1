const { defineConfig } = require("@playwright/test");
const { defineBddConfig } = require("playwright-bdd");

const testDir = defineBddConfig({
  features: "tests/e2e/ui/features/**/*.feature",
  steps: ["tests/e2e/ui/steps/**/*.js"],
});

module.exports = defineConfig({
  testDir,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    verbose: true,
  },
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});

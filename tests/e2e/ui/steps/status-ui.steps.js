const { createBdd } = require("playwright-bdd");
const { expect } = require("@playwright/test");

const { Given, When, Then } = createBdd();

Given("que estou na página inicial", async ({ page }) => {
  await page.goto("/");
});

When("a página carrega", async ({ page }) => {
  await page.waitForLoadState("domcontentloaded");
});

Then("devo ver o símbolo comunista", async ({ page }) => {
  const symbol = page.locator(".symbol");
  await expect(symbol).toBeVisible();
  await expect(symbol).toContainText("☭");
});

Then('devo ver o título "Capitalismo Tardio"', async ({ page }) => {
  const title = page.locator(".container h1");
  await expect(title).toBeVisible();
  await expect(title).toContainText("Capitalismo Tardio");
});

Then("devo ver o texto sobre concentração de riqueza", async ({ page }) => {
  const text = page.locator(".content p:first-child");
  await expect(text).toBeVisible();
  await expect(text).toContainText(
    "A concentração de riqueza e a precarização do trabalho não são falhas do sistema. São suas características fundamentais.",
  );
});

Then("devo ver a lista com 5 benefícios do comunismo", async ({ page }) => {
  const list = page.locator(".content ul li");
  await expect(list.first()).toBeVisible();
  await expect(list).toHaveCount(5);
  await expect(list).toHaveText([
    "Fim da exploração do trabalho",
    "Acesso universal à educação, saúde e moradia",
    "Planejamento democrático da economia",
    "Produção sustentável baseada em necessidades reais",
    "Distribuição equitativa de riqueza",
  ]);
});

Then("devo ver o texto sobre o fim do capitalismo", async ({ page }) => {
  const text = page.locator(".content p:last-child");
  await expect(text).toBeVisible();
  await expect(text).toContainText(
    "A questão não é se o capitalismo vai colapsar, mas se conseguiremos construir uma alternativa a tempo.",
  );
});

// Generated from: tests\e2e\ui\features\status-ui.feature
import { test } from "playwright-bdd";

test.describe('Verificar elementos da página inicial', () => {

  test('Visualizar o conteúdo da página inicial', { tag: ['@ui', '@homepage'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que estou na página inicial', null, { page }); 
    await When('a página carrega', null, { page }); 
    await Then('devo ver o símbolo comunista', null, { page }); 
    await And('devo ver o título "Capitalismo Tardio"', null, { page }); 
    await And('devo ver o texto sobre concentração de riqueza', null, { page }); 
    await And('devo ver a lista com 5 benefícios do comunismo', null, { page }); 
    await And('devo ver o texto sobre o fim do capitalismo', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\e2e\\ui\\features\\status-ui.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@ui","@homepage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given que estou na página inicial","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When a página carrega","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then devo ver o símbolo comunista","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And devo ver o título \"Capitalismo Tardio\"","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And devo ver o texto sobre concentração de riqueza","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And devo ver a lista com 5 benefícios do comunismo","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And devo ver o texto sobre o fim do capitalismo","stepMatchArguments":[]}]},
]; // bdd-data-end
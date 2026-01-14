const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("multiplicar 3 + 3 deveria retornar 9", () => {
  const resultado = calculadora.multiplicar(3, 3);
  expect(resultado).toBe(9);
});

test("dividir 10 + 5 deveria retornar 2", () => {
  const resultado = calculadora.dividir(10, 5);
  expect(resultado).toBe(2);
});

test("subtrair 200 + 120 deveria retornar 80", () => {
  const resultado = calculadora.subtrair(200, 120);
  expect(resultado).toBe(80);
});

test("somar 'piroca + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("piroca", 100);
  expect(resultado).toBe("Erro");
});

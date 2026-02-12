/* eslint-disable jest/no-standalone-expect */
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

const { loadFeature, defineFeature } = require("jest-cucumber");
const supertest = require("supertest");
const feature = loadFeature(
  "tests/integration/api/v1/migrations/migrations.feature",
  { tagFilter: "@migrations-get" },
);
const request = supertest("http://localhost:3000");

defineFeature(feature, (test) => {
  test("Listar migrations pendentes (GET)", ({ given, when, then, and }) => {
    let response;

    given("que não há migrations executadas no banco", () => {
      // Setup de ambiente
    });

    when(
      'faço uma requisição com o método "GET" para api/v1/migrations',
      async () => {
        response = await request.get("/api/v1/migrations");
      },
    );

    then("o código de resposta deve ser 200", () => {
      expect(response.status).toBe(200);
    });

    and("deve retornar uma lista de migrations pendentes", () => {
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});

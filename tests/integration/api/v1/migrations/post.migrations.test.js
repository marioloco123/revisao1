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
  { tagFilter: "@migrations-post" },
);
const request = supertest("http://localhost:3000");

defineFeature(feature, (test) => {
  test("Executar migrations pendentes pela primeira vez (POST)", ({
    given,
    when,
    then,
    and,
  }) => {
    let response;

    given("que existem migrations pendentes", () => {
      //Setup de ambiente
    });

    when(
      'envio uma nova requisição com o método "POST" para api/v1/migrations',
      async () => {
        response = await request.post("/api/v1/migrations");
      },
    );

    then("o código de resposta deve ser 201", () => {
      expect(response.status).toBe(201);
    });

    and("deve haver migrations na lista", () => {
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  test("Reexecutar migrations sem pendências (POST)", ({
    given,
    when,
    then,
    and,
  }) => {
    let response2;

    given("que as migrations já foram executadas", () => {
      //Setup de ambiente
    });

    when(
      'envio uma nova requisição com o método "POST" para api/v1/migrations',
      async () => {
        response2 = await request.post("/api/v1/migrations");
      },
    );

    then("o código de resposta deve ser 200", () => {
      expect(response2.status).toBe(200);
    });

    and("a lista de migrations deve estar vazia", () => {
      expect(Array.isArray(response2.body)).toBe(true);
      expect(response2.body.length).toBe(0);
    });
  });
});

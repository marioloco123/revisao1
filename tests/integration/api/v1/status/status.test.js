/* eslint-disable jest/no-standalone-expect */
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

const { loadFeature, defineFeature } = require("jest-cucumber");
const supertest = require("supertest");
const feature = loadFeature("tests/integration/api/v1/status/status.feature");
const request = supertest("http://localhost:3000");

defineFeature(feature, (test) => {
  test("Verificação de status com sucesso", ({ given, when, then, and }) => {
    let response;

    given("que a API está configurada para ser acessada", () => {
      // Setup ou verificação de ambiente
    });

    when("acesso a rota de status api/v1/status", async () => {
      response = await request.get("/api/v1/status");
    });

    then("o código de resposta deve ser 200", () => {
      //response = await fetch("http://localhost:3000/api/v1/status");
      expect(response.status).toBe(200);
    });

    and(
      'o campo "updated_at" deve retornar uma data válida no formato ISO',
      () => {
        const updatedAt = response.body.updated_at;
        const parsedUpdatedAt = new Date(updatedAt).toISOString();
        expect(updatedAt).toEqual(parsedUpdatedAt);
      },
    );

    and('deve retornar a versão do Postgres em "version"', () => {
      const version = response.body.dependencies.database.version;
      expect(version).toBeDefined();
      expect(typeof version).toBe("string");
      expect(version).toMatch(/^\d+/);
    });

    and(
      'deve retornar o máximo de conexões aceitas em "max_connections"',
      () => {
        const maxConnections =
          response.body.dependencies.database.max_connections;
        expect(typeof maxConnections).toBe("number");
        expect(maxConnections).toBeGreaterThan(0);
      },
    );

    and('deve retornar as conexões abertas em "opened_connections"', () => {
      const openedConnections =
        response.body.dependencies.database.opened_connections;
      expect(typeof openedConnections).toBe("number");
      expect(openedConnections).toBeGreaterThanOrEqual(1);
    });
  });
});

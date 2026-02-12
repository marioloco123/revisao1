Feature: Validar Status do Sistema

  Scenario: Verificação de status com sucesso
    Given que a API está configurada para ser acessada
    When acesso a rota de status api/v1/status
    Then o código de resposta deve ser 200
    And o campo "updated_at" deve retornar uma data válida no formato ISO
    And deve retornar a versão do Postgres em "version"
    And deve retornar o máximo de conexões aceitas em "max_connections"
    And deve retornar as conexões abertas em "opened_connections"
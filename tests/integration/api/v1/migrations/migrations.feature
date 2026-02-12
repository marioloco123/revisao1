Feature: Gerenciamento de migrations

  @migrations-get
  Scenario: Listar migrations pendentes (GET)
    Given que não há migrations executadas no banco
    When faço uma requisição com o método "GET" para api/v1/migrations
    Then o código de resposta deve ser 200
    And deve retornar uma lista de migrations pendentes

  @migrations-post
  Scenario: Executar migrations pendentes pela primeira vez (POST)
    Given que existem migrations pendentes
    When envio uma nova requisição com o método "POST" para api/v1/migrations
    Then o código de resposta deve ser 201
    And deve haver migrations na lista

  @migrations-post
  Scenario: Reexecutar migrations sem pendências (POST)
    Given que as migrations já foram executadas
    When envio uma nova requisição com o método "POST" para api/v1/migrations
    Then o código de resposta deve ser 200
    And a lista de migrations deve estar vazia

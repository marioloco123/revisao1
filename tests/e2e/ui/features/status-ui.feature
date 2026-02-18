Feature: Verificar elementos da página inicial

  @ui @homepage
  Scenario: Visualizar o conteúdo da página inicial
    Given que estou na página inicial
    When a página carrega
    Then devo ver o símbolo comunista
    And devo ver o título "Capitalismo Tardio"
    And devo ver o texto sobre concentração de riqueza
    And devo ver a lista com 5 benefícios do comunismo
    And devo ver o texto sobre o fim do capitalismo
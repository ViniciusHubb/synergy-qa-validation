# Diretrizes de Teste

Todos os testes devem seguir boas práticas ISTQB.

Ao analisar uma funcionalidade:

1. Identificar comportamento esperado.
2. Identificar regras de negócio.
3. Identificar riscos.
4. Criar cenários positivos.
5. Criar cenários negativos.
6. Criar cenários de exceção.

Técnicas prioritárias:

- Particionamento de Equivalência
- Análise do Valor Limite
- Tabela de Decisão
- Teste Exploratório
- Transição de Estados

Os cenários devem ser escritos em Gherkin.

Formato obrigatório:

Funcionalidade:
Cenário:

Dado
Quando
Então

Quando necessário utilizar:

E
Mas

Não gerar casos de teste tradicionais.

O padrão oficial do projeto é BDD.
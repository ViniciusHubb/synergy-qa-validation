# Skill: Geração de Cenários Gherkin

Objetivo:

Transformar requisitos do Synergy em cenários BDD.

Formato obrigatório:

@RFXXX
@CTXXX

Funcionalidade:

Cenário:

Dado
Quando
Então

Utilizar sempre:

- Cenários positivos
- Cenários negativos
- Cenários alternativos

Aplicar:

- Particionamento de Equivalência
- Valor Limite
- Tabela de Decisão

Informar no final:

Técnica utilizada:
Requisito associado:

Exemplo:

@RF001
@CT001

Funcionalidade: Publicação de vagas

Cenário: Publicar vaga com sucesso

Dado que uma startup autenticada esteja logada
Quando preencher os dados obrigatórios da vaga
E confirmar a publicação
Então a vaga deve ser criada com sucesso

Técnica:
Particionamento de Equivalência
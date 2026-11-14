# Rastreabilidade

Todo artefato deve possuir rastreabilidade.

Estrutura:

RF001
RF002

CT001
CT002

BUG001
BUG002

Relacionamento:

RF -> CT -> BUG

Exemplo:

RF001 - Startup deve publicar vagas

CT001 - Publicação de vaga com sucesso

BUG001 - Sistema permite criar vaga sem título

Sempre identificar:

- Requisitos sem cobertura
- Cenários sem requisito associado
- Bugs sem requisito associado

Toda funcionalidade validada deve possuir pelo menos um cenário positivo.

Funcionalidades críticas devem possuir cenários negativos.
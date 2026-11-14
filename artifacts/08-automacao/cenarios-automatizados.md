# Cenários Automatizados

| Cenário | Requisito | Script | Prioridade | Resultado |
|---|---|---|---|---|
| CT001 | RF001 | `synergy.spec.js` | Alta | Bloqueado por rate limit de cadastro |
| CT002 | RF001 | `synergy.spec.js` | Alta | Aprovado |
| CT003 | RF002 | `synergy.spec.js` | Alta | Aprovado |
| CT004 | RF003 | `synergy.spec.js` | Alta | Aprovado após uso de `ADMIN_PASSWORD` |
| CT005 | RF004, RF005 | `synergy.spec.js` | Alta | Aprovado após CT004 criar evento elegível |
| CT006 | RF006 | `synergy.spec.js` | Alta | Aprovado |
| CT007 | RF006 | `synergy.spec.js` | Alta | Aprovado |
| CT008 | RF007 | `synergy.spec.js` | Alta | Aprovado |
| CT009 | RF008 | `synergy.spec.js` | Alta | Aprovado |
| CT010 | RF008 | `synergy.spec.js` | Alta | Aprovado |
| CT011 | RF008, RF009 | `synergy.spec.js` | Média | Aprovado |
| CT012 | RF008, RF010 | `synergy.spec.js` | Média | Aprovado |

Os bloqueios não foram classificados como bugs porque decorreram de limitação
de rate limiting, ausência de uma conta de teste válida e massa de dados já
utilizada.
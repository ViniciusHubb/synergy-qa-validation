# Cenários Automatizados

| Cenário | Requisito | Script | Prioridade | Resultado |
|---|---|---|---|---|
| CT001 | RF001 | `synergy.spec.js` | Alta | Aprovado após reinício do ambiente |
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

Observação operacional: execuções repetidas de cadastro em sequência podem
acionar o rate limit e bloquear temporariamente CT001 ou CT002. Esse cenário
não ocorreu na execução oficial após o reinício e não foi classificado como
bug de produto.
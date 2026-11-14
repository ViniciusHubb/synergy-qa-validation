# Resultados da Execução

Execução realizada contra `http://localhost:3000` com Playwright, utilizando
as contas de demonstração e a senha fornecida somente por variável de ambiente.

| Cenário | Resultado obtido | Resultado esperado | Status | Observações | Evidência |
|---|---|---|---|---|---|
| CT001 | Startup cadastrada com dados válidos | Conta criada | Aprovado | Revalidado após reinício do ambiente. | EV-AUTO-001 |
| CT002 | Cadastro recusado com e-mail inválido | Cadastro recusado com mensagem de validação | Aprovado | Revalidado após reinício do ambiente. | EV-AUTO-002 |
| CT003 | Login rejeitou credenciais inválidas | Acesso negado | Aprovado | Mensagem de credenciais inválidas exibida. | EV-AUTO-003 |
| CT004 | Evento externo criado | Evento externo criado | Aprovado | Revalidado com `ADMIN_PASSWORD` fornecida para o ambiente. | EV-AUTO-004 |
| CT005 | Presença pública confirmada | Presença pública confirmada | Aprovado | Revalidado usando o evento criado por CT004; a automação aguarda a confirmação assíncrona. | EV-AUTO-005 |
| CT006 | Vaga publicada | Vaga criada e listada | Aprovado | — | EV-AUTO-006 |
| CT007 | Vaga editada e desativada | Alteração persistida e vaga desativada | Aprovado | — | EV-AUTO-007 |
| CT008 | Perfil Profissional não gerenciou vaga | Operação negada | Aprovado | — | EV-AUTO-008 |
| CT009 | Recurso Premium bloqueado para conta gratuita | Conteúdo protegido indisponível | Aprovado | — | EV-AUTO-009 |
| CT010 | Upgrade simulado liberou Premium e foi revertido | Plano Premium ativo | Aprovado | Limpeza da alteração executada ao final. | EV-AUTO-010 |
| CT011 | Publicação e resposta criadas | Conteúdo exibido | Aprovado | — | EV-AUTO-011 |
| CT012 | Etapa do roadmap atualizada | Progresso recalculado | Aprovado | — | EV-AUTO-012 |

**Observação sobre o ambiente:** execuções repetidas de cadastro em sequência
podem acionar o rate limit e bloquear temporariamente CT001 ou CT002. Esse
comportamento é uma limitação operacional do ambiente, não um resultado desta
execução oficial após o reinício.

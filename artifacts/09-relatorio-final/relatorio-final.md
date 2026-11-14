# Relatório Final de QA

## 1. Situação

Esta rodada validou o MVP Synergy por meio de 12 cenários prioritários
automatizados com Playwright. Foram registrados 10 cenários aprovados, 2
bloqueados pelo rate limit do ambiente e 2 bugs de interface identificados em
validação manual.

## 2. Objetivo e escopo

O objetivo foi validar os fluxos prioritários de cadastro, autenticação,
eventos, vagas, recursos Premium, comunidade, roadmap e autorização, conforme
os cenários CT001 a CT012.

## 3. Execução automatizada

| Resultado | Quantidade |
|---|---:|
| Cenários planejados | 12 |
| Cenários aprovados | 10 |
| Cenários reprovados | 0 |
| Cenários bloqueados | 2 |

CT001 e CT002 permaneceram bloqueados pelo rate limit de cadastro. Os demais
10 cenários foram aprovados. CT004 e CT005 foram revalidados com a senha
administrativa fornecida somente por variável de ambiente.

## 4. Evidências

As evidências automatizadas EV-AUTO-001 a EV-AUTO-012 estão registradas em
`../05-evidencias/catalogo-evidencias.md`. As evidências manuais dos bugs
BUG-001 e BUG-002 foram fornecidas por imagens durante a validação exploratória.

## 5. Defeitos encontrados

- **BUG-001:** o botão “Criar conta gratuita” aparece na tela inicial mesmo
  com o usuário autenticado.
- **BUG-002:** o conteúdo de cards fica colado à borda superior e o selo
  “Prioridade Premium” pode ficar parcialmente fora do enquadramento.

Os dois defeitos permanecem abertos e estão detalhados em
`../06-defeitos/bugs-abertos.md`. Nenhum deles foi corrigido ou retestado nesta
rodada.

## 6. Rastreabilidade e cobertura

A matriz completa está em `../07-rastreabilidade/matriz-rastreabilidade.md`.
Todos os 10 requisitos funcionais possuem cenários associados. A cobertura
executada com ao menos um cenário aprovado foi de 9/10 requisitos, pois RF001
permaneceu bloqueado pelo rate limit.

## 7. Conclusão

A suíte automatizada aprovou integralmente os cenários que puderam ser
executados. Para concluir a validação de cadastro, é necessário aguardar ou
resetar o rate limit e reexecutar CT001 e CT002. Os BUG-001 e BUG-002 devem ser
corrigidos e posteriormente submetidos a reteste.

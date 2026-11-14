# Relatório Final de QA

## 1. Situação

Esta rodada validou o MVP Synergy por meio de 12 cenários prioritários
automatizados com Playwright. Os 12 cenários foram aprovados após o reinício
do ambiente, e 2 bugs de interface foram identificados em validação manual.

## 2. Objetivo e escopo

O objetivo foi validar os fluxos prioritários de cadastro, autenticação,
eventos, vagas, recursos Premium, comunidade, roadmap e autorização, conforme
os cenários CT001 a CT012.

## 3. Execução automatizada

| Resultado | Quantidade |
|---|---:|
| Cenários planejados | 12 |
| Cenários aprovados | 12 |
| Cenários reprovados | 0 |
| Cenários bloqueados | 0 |

CT001 a CT012 foram aprovados. CT004 e CT005 foram revalidados com a senha
administrativa fornecida somente por variável de ambiente. Execuções repetidas
de cadastro em sequência podem acionar o rate limit e bloquear temporariamente
CT001 ou CT002; isso fica registrado apenas como observação operacional.

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
executada com ao menos um cenário aprovado foi de 10/10 requisitos.

## 7. Conclusão

A suíte automatizada aprovou integralmente os 12 cenários. Os BUG-001 e BUG-002
devem ser corrigidos e posteriormente submetidos a reteste.

O PDF final de entrega, com as cinco etapas e a tabela de casos de teste, está
em `entrega-final-24-11-2026.pdf`.

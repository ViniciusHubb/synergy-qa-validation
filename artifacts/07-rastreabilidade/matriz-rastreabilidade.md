# Matriz de Rastreabilidade

## Requisito → Cenário → Evidência → Bug

| Requisito | Cenário | Evidência | Bug | Cobertura |
|---|---|---|---|---|
| RF001 | CT001, CT002 | EV-AUTO-001, EV-AUTO-002 | Nenhum | Bloqueado: ambos os cenários afetados pelo rate limit |
| RF002 | CT003 | EV-AUTO-003 | Nenhum | Coberto |
| RF003 | CT004 | EV-AUTO-004 | Nenhum | Coberto |
| RF004 | CT005 | EV-AUTO-005 | Nenhum | Coberto |
| RF005 | CT005 | EV-AUTO-005 | Nenhum | Coberto |
| RF006 | CT006, CT007 | EV-AUTO-006, EV-AUTO-007 | Nenhum | Coberto |
| RF007 | CT008 | EV-AUTO-008 | Nenhum | Coberto |
| RF008 | CT009, CT010, CT011, CT012 | EV-AUTO-009 a EV-AUTO-012 | Nenhum | Coberto |
| RF009 | CT011 | EV-AUTO-011 | Nenhum | Coberto |
| RF010 | CT012 | EV-AUTO-012 | Nenhum | Coberto |

## Validação

- Requisitos sem cenários: nenhum dos RF001–RF010.
- Cenários sem requisito: nenhum dos CT001–CT012.
- Bugs sem requisito funcional direto: BUG-001 e BUG-002, identificados em
  validação exploratória de interface e rastreados pelas evidências EV-MAN-001
  e EV-MAN-002.
- Cobertura planejada: 10/10 requisitos funcionais = 100%.
- Cobertura executada com ao menos um cenário aprovado: 9/10 = 90%.
- Cenários aprovados: 10/12 = 83,3% do total planejado.
- Taxa de sucesso entre cenários executados: 10/10 = 100%.
- Bugs confirmados: 2, ambos abertos e sem reteste.

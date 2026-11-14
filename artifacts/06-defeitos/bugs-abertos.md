# Bugs Abertos

## BUG-001 — Botão “Criar conta gratuita” exibido para usuário autenticado

- **Severidade:** Média
- **Prioridade:** Alta
- **Status:** Aberto
- **Origem:** Validação manual com evidência visual
- **Descrição:** Após realizar login e clicar na logo Synergy para retornar à
  tela inicial, o botão “Criar conta gratuita” é exibido mesmo com o usuário
  autenticado. A navegação superior continua mostrando o perfil e a opção
  “Sair”, confirmando que a sessão permanece ativa.
- **Resultado esperado:** Usuários autenticados não devem visualizar o botão
  destinado à criação de conta; a tela inicial deve manter as ações compatíveis
  com o estado autenticado.
- **Resultado atual:** O botão “Criar conta gratuita” aparece na tela inicial
  para o usuário autenticado.
- **Evidência:** Imagem fornecida na validação manual, mostrando o perfil
  autenticado e o botão “Criar conta gratuita” simultaneamente.

O bloqueio de CT001 e CT002 por rate limiting continua documentado em
`04-execucao/resultados-execucao.md` e não é considerado bug de produto.

## BUG-002 — Conteúdo dos cards sem espaçamento superior e selo Premium fora do enquadramento

- **Severidade:** Baixa
- **Prioridade:** Média
- **Status:** Aberto
- **Origem:** Validação manual com evidências visuais
- **Descrição:** O conteúdo interno dos cards aparece sempre colado à borda
  superior, sem espaçamento visual consistente. Além disso, a anotação/selo
  de Premium ultrapassa lateralmente o limite do card ou fica parcialmente
  cortada, comprometendo a leitura e o enquadramento do componente.
- **Resultado esperado:** Os cards devem manter espaçamento interno uniforme
  entre a borda superior e o conteúdo, e o selo Premium deve permanecer
  totalmente contido e alinhado dentro dos limites do card em diferentes telas
  e tamanhos de conteúdo.
- **Resultado atual:** Há cards com conteúdo encostado na borda superior e o
  selo “Prioridade Premium” aparece parcialmente fora do enquadramento ou
  cortado lateralmente.
- **Evidências:** Imagens fornecidas na validação manual nas telas de Eventos,
  Comunidade e Painel.

# Plano de Testes

## 1. Introdução

Este plano define a primeira rodada de validação do MVP Synergy, plataforma
web para conexão entre startups, profissionais e investidores anjo.

## 2. Objetivo

Verificar os fluxos críticos de autenticação, perfis, eventos, vagas e recursos
Premium, mantendo limite de 12 casos de teste rastreáveis.

## 3. Escopo

Cadastro, login, autorização, eventos, presença pública de investidores, vagas,
Premium, comunidade e roadmap.

## 4. Fora do escopo

Pagamento real, candidatura a vagas, diretório de startups, recuperação de
senha, confirmação de e-mail, painel administrativo completo e itens de backlog.

## 5. Estratégia

Testes funcionais, negativos e de autorização em BDD, com particionamento de
equivalência, valor limite, tabela de decisão e transição de estados quando
aplicável. A execução será posterior e não há resultados nesta etapa.

## 6. Ambiente previsto

Node.js 22, Docker, MySQL 8, Google Chrome e Microsoft Edge. A aplicação deverá
ser iniciada pelo repositório correspondente com `npm run dev`.

## 7. Casos planejados

CT001 a CT012, conforme os arquivos em `03-cenarios-gherkin`.

## 8. Critérios de entrada

- Requisitos refinados e rastreáveis.
- Ambiente da aplicação disponível.
- Contas de demonstração ou contas equivalentes disponíveis.
- Dados de teste definidos.

## 9. Critérios de saída

- Todos os 12 casos executados ou formalmente bloqueados.
- Resultados, evidências e defeitos registrados.
- Matriz de rastreabilidade atualizada.

## 10. Riscos

Riscos e respostas estão detalhados em `riscos.md`.

## 11. Métricas

Total de requisitos, cenários planejados/executados, aprovados, reprovados,
bloqueados, taxa de sucesso e quantidade de bugs.

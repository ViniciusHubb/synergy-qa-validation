# Synergy — Projeto de QA

Projeto acadêmico de Verificação e Validação de Software aplicado ao MVP
Synergy, plataforma web que conecta startups, investidores anjo e
profissionais.

## Equipe

Vinicius Oliveira · Vanessa Trezena · Vanessa Matias - Sávio · Pedro Henrique · Heloyse

## Objetivo

Avaliar a qualidade do Synergy por meio de verificação estática, especificação
de casos de teste, execução manual e automatizada, gestão de defeitos e
relatório técnico final.

## Estrutura do projeto

| Diretório | Conteúdo |
|---|---|
| `artifacts/01-requisitos` | Requisitos, regras de negócio e critérios de aceitação |
| `artifacts/02-planejamento` | Plano, estratégia, riscos e cronograma de testes |
| `artifacts/03-cenarios-gherkin` | 12 cenários de teste CT001–CT012 |
| `artifacts/04-execucao` | Resultados, casos aprovados e reprovados |
| `artifacts/05-evidencias` | Catálogo, imagens e PDF de evidências |
| `artifacts/06-defeitos` | Bugs abertos, corrigidos e retestados |
| `artifacts/07-rastreabilidade` | Matriz requisito → cenário → evidência → bug |
| `artifacts/08-automacao` | Suíte Playwright, Page Objects e configuração |
| `artifacts/09-relatorio-final` | Relatório final e PDF de entrega |
| `docs` | Documentação de seletores e referências do sistema |

## Automação

A automação utiliza Playwright Test em JavaScript, com Page Object Model,
seletores `data-testid` e credenciais carregadas por variáveis de ambiente.

### Pré-requisitos

- Node.js e npm instalados
- Aplicação Synergy disponível em `http://localhost:3000`

### Configuração

```powershell
cd artifacts/08-automacao
npm install
Copy-Item .env.example .env
```

Preencha o `.env` com as contas disponíveis no ambiente local. O arquivo `.env`
é ignorado pelo Git e não deve conter credenciais versionadas.

### Executar os testes

```powershell
cd artifacts/08-automacao
npm test
```

Para executar com o navegador visível:

```powershell
npm run test:headed
```

Para abrir o relatório HTML:

```powershell
npm run report
```

## Resultado atual

Na execução oficial após o reinício do ambiente:

- 12 cenários planejados
- 12 aprovados
- 0 reprovados
- 0 bloqueados
- Taxa de sucesso: 100%

Execuções repetidas de cadastro em sequência podem acionar temporariamente o
rate limit do ambiente e bloquear CT001 ou CT002. Essa é uma observação
operacional, não o resultado da execução oficial.

## Defeitos em aberto

- **BUG-001:** botão “Criar conta gratuita” exibido para usuário autenticado.
- **BUG-002:** conteúdo dos cards colado na borda superior e selo Premium fora
  do enquadramento.

Os detalhes, severidade, prioridade e evidências estão em
`artifacts/06-defeitos/bugs-abertos.md`.

## Entregáveis principais

- [Relatório técnico final](artifacts/09-relatorio-final/relatorio-final.md)
- [PDF da entrega final](artifacts/09-relatorio-final/entrega-final-24-11-2026.pdf)
- [PDF de evidências](artifacts/05-evidencias/evidencias-execucao-e-defeitos.pdf)
- [Casos automatizados](artifacts/08-automacao/tests/synergy.spec.js)
- [Matriz de rastreabilidade](artifacts/07-rastreabilidade/matriz-rastreabilidade.md)

## Data de entrega

24 de novembro de 2026.

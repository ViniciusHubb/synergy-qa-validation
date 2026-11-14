# Estratégia de Automação

## Tecnologia e arquitetura

- Playwright Test com JavaScript.
- Page Object Model em `pages/`, com uma classe por tela/domínio.
- Os testes em `tests/synergy.spec.js` concentram apenas fluxos e assertivas.
- Seletores exclusivamente por `data-testid`, conforme `docs/synergy-playwright-selectors.md`.
- Execução serial para evitar interferência entre dados compartilhados do ambiente.
- URL configurável por `BASE_URL`, com padrão `http://localhost:3000`.
- Credenciais recebidas por `TEST_PASSWORD` e variáveis de ambiente, sem segredo versionado.

## Comandos

```powershell
cd artifacts\08-automacao
npm install
$env:TEST_PASSWORD = "valor-local"
$env:ADMIN_PASSWORD = "valor-local-do-administrador"
npm test
```

O relatório HTML, traces, vídeos e screenshots são gerados localmente e
ignorados pelo Git. A senha real não deve ser adicionada a arquivos versionados.

## Resultado da primeira execução

Foram executados 12 testes: 10 aprovados e 2 bloqueados pelo rate limit do
ambiente.
Não houve falha confirmada como defeito do produto.
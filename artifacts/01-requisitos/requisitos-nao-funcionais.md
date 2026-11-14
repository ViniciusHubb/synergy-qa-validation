# Requisitos Não Funcionais

| ID | Categoria | Requisito | Verificação planejada |
|---|---|---|---|
| RNF001 | Segurança | Senhas devem ser protegidas por bcrypt e a sessão deve usar cookie HttpOnly assinado. | Inspeção técnica e teste de autenticação, quando o repositório da aplicação estiver disponível. |
| RNF002 | Segurança | As actions devem validar entrada, autenticação, autorização e propriedade dos recursos. | Cenários CT008, CT009 e revisão técnica. |
| RNF003 | Segurança | O sistema deve aplicar proteção contra bots, rate limiting e cabeçalhos de segurança conforme o ambiente configurado. | Verificação de ambiente, pendente. |
| RNF004 | Usabilidade | A interface deve ser responsiva, utilizar navegação consistente e apresentar mensagens de erro por campo e estados vazios explicativos. | Teste exploratório, pendente. |
| RNF005 | Compatibilidade | A aplicação deve ser validável em Google Chrome e Microsoft Edge. | Execução cross-browser, pendente. |
| RNF006 | Ambiente | O ambiente previsto utiliza Node.js 22, Docker e MySQL 8. | Verificação de configuração, pendente. |

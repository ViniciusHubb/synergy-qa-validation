# Seletores Playwright do Synergy

Os atributos `data-testid` abaixo foram adicionados ao projeto Synergy para tornar os testes
Playwright independentes de textos traduzidos, classes CSS e estrutura visual.

## Convenções

- IDs são escritos em kebab-case.
- Elementos repetidos usam o identificador do registro: `event-card-{id}`, `job-card-{id}`.
- Elementos de formulário usam o prefixo do domínio e o nome do campo.
- Para selecionar um elemento repetido, prefira `page.getByTestId(...)` com o padrão abaixo e
  valide o texto exibido dentro do card quando necessário.

## Navegação e sessão

| `data-testid`             | Elemento                                             |
| ------------------------- | ---------------------------------------------------- |
| `site-header`             | Cabeçalho principal                                  |
| `site-logo`               | Logo/link para a página inicial                      |
| `desktop-navigation`      | Navegação principal desktop                          |
| `nav-link-{label}`        | Link de navegação desktop, com o label em minúsculas |
| `header-login-link`       | Link Entrar no cabeçalho                             |
| `header-register-link`    | Link Criar conta no cabeçalho                        |
| `app-navigation`          | Navegação das seções autenticadas                    |
| `app-nav-link-{label}`    | Link de seção autenticada                            |
| `mobile-menu-toggle`      | Botão de abrir/fechar menu móvel                     |
| `mobile-menu`             | Menu móvel aberto                                    |
| `mobile-dashboard-link`   | Link Painel no menu móvel                            |
| `mobile-nav-link-{label}` | Link de navegação móvel                              |
| `mobile-profile-link`     | Link Meu perfil no menu móvel                        |
| `mobile-logout-form`      | Formulário de saída no menu móvel                    |
| `mobile-logout-button`    | Botão de saída no menu móvel                         |
| `mobile-login-link`       | Link Entrar no menu móvel                            |
| `mobile-register-link`    | Link Criar conta no menu móvel                       |
| `user-menu`               | Menu do usuário autenticado                          |
| `user-dashboard-link`     | Link Painel do usuário                               |
| `user-profile-link`       | Link do perfil do usuário                            |
| `logout-form`             | Formulário de saída desktop                          |
| `logout-button`           | Botão de saída desktop                               |

## Autenticação

| `data-testid`                                     | Elemento                       |
| ------------------------------------------------- | ------------------------------ |
| `login-form`                                      | Formulário de login            |
| `login-email`                                     | Campo de e-mail                |
| `login-password`                                  | Campo de senha                 |
| `login-submit`                                    | Botão Entrar                   |
| `register-form`                                   | Formulário de cadastro         |
| `register-role-{startup\|investor\|professional}` | Opção de perfil                |
| `register-name`                                   | Campo de nome                  |
| `register-email`                                  | Campo de e-mail                |
| `register-password`                               | Campo de senha                 |
| `register-startup-name`                           | Nome da startup                |
| `register-niche`                                  | Nicho de mercado               |
| `register-investor-company`                       | Empresa ou fundo do investidor |
| `register-professional-headline`                  | Título profissional            |
| `register-submit`                                 | Botão Criar conta              |

## Página inicial e painel

| `data-testid`                       | Elemento                   |
| ----------------------------------- | -------------------------- |
| `home-register-cta`                 | CTA Criar conta gratuita   |
| `home-events-cta`                   | CTA Ver eventos            |
| `home-feature-link-{slug}`          | Card de funcionalidade     |
| `home-all-events-link`              | Link Ver todos os eventos  |
| `home-jobs-board-link`              | Link Ver mural de vagas    |
| `home-premium-cta`                  | CTA Conhecer o Premium     |
| `dashboard-profile-completion-link` | Link Editar perfil         |
| `dashboard-section-link-{slug}`     | Card de seção do painel    |
| `dashboard-events-link`             | Link para todos os eventos |
| `dashboard-jobs-link`               | Link para o mural de vagas |
| `dashboard-create-job-link`         | Link Publicar vaga         |
| `dashboard-manage-jobs-link`        | Link Gerenciar vagas       |
| `dashboard-create-event-link`       | Link Novo evento           |
| `dashboard-event-link-{id}`         | Evento inscrito            |
| `dashboard-roadmap-link`            | Link Roadmap burocrático   |
| `dashboard-templates-link`          | Link Templates             |

## Vagas

| `data-testid`            | Elemento                               |
| ------------------------ | -------------------------------------- |
| `jobs-filters-form`      | Formulário de filtros                  |
| `jobs-search`            | Busca por cargo, habilidade ou startup |
| `jobs-type-filter`       | Filtro de tipo de contratação          |
| `jobs-work-mode-filter`  | Filtro de modelo de trabalho           |
| `jobs-filter-submit`     | Botão Filtrar                          |
| `jobs-clear-filters`     | Link Limpar                            |
| `job-card-{id}`          | Card de uma vaga                       |
| `job-details-link-{id}`  | Link para detalhes da vaga             |
| `job-create-form`        | Formulário de criação                  |
| `job-edit-form`          | Formulário de edição                   |
| `job-title`              | Título da vaga                         |
| `job-type`               | Tipo de contratação                    |
| `job-work-mode`          | Modelo de trabalho                     |
| `job-location`           | Localização                            |
| `job-salary-range`       | Faixa salarial                         |
| `job-skills`             | Habilidades                            |
| `job-description`        | Descrição                              |
| `job-is-active`          | Checkbox de vaga ativa                 |
| `job-submit`             | Botão de salvar/publicar               |
| `job-edit-link-{id}`     | Link de edição                         |
| `job-toggle-form-{id}`   | Formulário ativar/desativar            |
| `job-toggle-button-{id}` | Botão ativar/desativar                 |
| `job-delete-form-{id}`   | Formulário de exclusão                 |
| `job-delete-button-{id}` | Botão de exclusão                      |
| `job-details-back-link`  | Link de retorno dos detalhes           |
| `job-startup-website`    | Site da startup                        |
| `job-login-cta`          | CTA de login nos detalhes              |

## Eventos

| `data-testid`                         | Elemento                              |
| ------------------------------------- | ------------------------------------- |
| `events-filter-tabs`                  | Grupo de filtros de eventos           |
| `events-filter-{upcoming\|past\|all}` | Filtro por período                    |
| `event-card-{id}`                     | Card de evento                        |
| `event-details-link-{id}`             | Link para detalhes do evento          |
| `event-back-link`                     | Link de retorno à lista               |
| `event-create-form`                   | Formulário de criação                 |
| `event-title`                         | Título                                |
| `event-type`                          | Tipo                                  |
| `event-origin`                        | Origem                                |
| `event-starts-at`                     | Data/hora de início                   |
| `event-ends-at`                       | Data/hora de término                  |
| `event-location`                      | Local                                 |
| `event-is-online`                     | Checkbox de evento online             |
| `event-external-url`                  | Link externo                          |
| `event-capacity`                      | Capacidade                            |
| `event-priority-until`                | Fim da prioridade Premium             |
| `event-description`                   | Descrição                             |
| `event-submit`                        | Botão Publicar evento                 |
| `event-attendance-form`               | Formulário de inscrição/presença      |
| `event-join-attendance`               | Botão Inscrever-se/Confirmar presença |
| `event-cancel-attendance`             | Botão Cancelar                        |
| `event-external-link`                 | Link externo do evento                |
| `event-premium-link`                  | Link para conhecer o Premium          |
| `event-delete-form`                   | Formulário de exclusão                |

## Comunidade

| `data-testid`                        | Elemento                             |
| ------------------------------------ | ------------------------------------ |
| `new-post-open`                      | Botão Nova publicação                |
| `new-post-form`                      | Formulário de nova publicação        |
| `new-post-title`                     | Título da publicação                 |
| `new-post-content`                   | Conteúdo da publicação               |
| `new-post-submit`                    | Botão Publicar                       |
| `new-post-cancel`                    | Botão Cancelar                       |
| `community-back-link`                | Link de retorno                      |
| `reply-form`                         | Formulário de resposta               |
| `reply-content`                      | Campo de resposta                    |
| `reply-submit`                       | Botão Responder                      |
| `community-post-delete-form`         | Formulário de exclusão da publicação |
| `community-reply-delete-form-{id}`   | Formulário de exclusão de resposta   |
| `community-reply-delete-button-{id}` | Botão de exclusão de resposta        |
| `community-post-card-{id}`           | Card da publicação na listagem       |
| `community-post-link-{id}`           | Link para a publicação               |

## Perfil

| `data-testid`               | Elemento                           |
| --------------------------- | ---------------------------------- |
| `account-profile-form`      | Formulário de conta                |
| `account-name`              | Nome da conta                      |
| `account-email`             | E-mail somente leitura             |
| `account-submit`            | Salvar conta                       |
| `startup-profile-form`      | Formulário de perfil da startup    |
| `startup-name`              | Nome da startup                    |
| `startup-niche`             | Nicho                              |
| `startup-stage`             | Estágio                            |
| `startup-city`              | Cidade                             |
| `startup-website`           | Site                               |
| `startup-pitch`             | Pitch                              |
| `startup-description`       | Descrição                          |
| `startup-submit`            | Salvar perfil da startup           |
| `investor-profile-form`     | Formulário de perfil de investidor |
| `investor-company`          | Empresa ou fundo                   |
| `investor-ticket-min`       | Ticket mínimo                      |
| `investor-ticket-max`       | Ticket máximo                      |
| `investor-linkedin`         | LinkedIn                           |
| `investor-thesis`           | Tese de investimento               |
| `investor-submit`           | Salvar perfil de investidor        |
| `professional-profile-form` | Formulário de perfil profissional  |
| `professional-headline`     | Título profissional                |
| `professional-skills`       | Habilidades                        |
| `professional-linkedin`     | LinkedIn                           |
| `professional-portfolio`    | Portfólio/GitHub                   |
| `professional-bio`          | Sobre você                         |
| `professional-freelance`    | Disponibilidade para freelancer    |
| `professional-submit`       | Salvar perfil profissional         |

## Premium e roadmap

| `data-testid`                 | Elemento                       |
| ----------------------------- | ------------------------------ |
| `premium-activate-form`       | Formulário de ativação         |
| `premium-activate-submit`     | Botão Ativar Premium           |
| `premium-cancel-form`         | Formulário de cancelamento     |
| `premium-cancel-submit`       | Botão voltar ao plano gratuito |
| `premium-feature-link-{slug}` | Link de recurso Premium        |
| `premium-gate`                | Card de recurso bloqueado      |
| `premium-gate-link`           | Link para a página Premium     |
| `roadmap-progress`            | Card do progresso geral        |
| `roadmap-step-form-{id}`      | Formulário de uma etapa        |
| `roadmap-step-toggle-{id}`    | Botão marcar/desmarcar etapa   |
| `roadmap-resource-link-{id}`  | Link de recurso da etapa       |

## Exemplos Playwright

```ts
await page.getByTestId("login-email").fill("startup@demo.local");
await page.getByTestId("login-password").fill("Demo@123");
await page.getByTestId("login-submit").click();

await page.getByTestId("jobs-search").fill("React");
await page.getByTestId("jobs-filter-submit").click();
await expect(page.getByTestId(/^job-card-/).first()).toBeVisible();

await page.getByTestId("event-join-attendance").click();
await page.getByTestId("roadmap-step-toggle-1").click();
```

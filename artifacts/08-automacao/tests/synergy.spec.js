const { test, expect } = require('@playwright/test');
const { AuthPage } = require('../pages/auth.page');
const { RegistrationPage } = require('../pages/registration.page');
const { DashboardPage } = require('../pages/dashboard.page');
const { EventsPage } = require('../pages/events.page');
const { JobsPage } = require('../pages/jobs.page');
const { PremiumPage } = require('../pages/premium.page');
const { CommunityPage } = require('../pages/community.page');
const { RoadmapPage } = require('../pages/roadmap.page');

const password = () => process.env.TEST_PASSWORD;
const account = (name, fallback) => process.env[name] || fallback;
const unique = (prefix) => `${prefix}-${Date.now()}`;

test.describe('Synergy - execução dos 12 cenários prioritários', () => {
  test('CT001 - cadastra uma Startup com dados válidos', async ({ page }) => {
    const registration = new RegistrationPage(page);
    const email = `${unique('startup')}@qa.local`;

    await registration.open();
    await registration.fillStartup({
      name: unique('QA Startup'),
      email,
      password: password(),
      niche: 'SaaS B2B',
    });
    await registration.submit();
    if (await registration.isRateLimited()) {
      test.skip(true, 'Cadastro bloqueado pelo rate limit do ambiente de teste.');
    }
    await expect(page.getByTestId('app-navigation')).toBeVisible({ timeout: 15_000 });
  });

  test('CT002 - recusa cadastro com campo obrigatório inválido', async ({ page }) => {
    const registration = new RegistrationPage(page);

    await registration.open();
    await registration.fillInvalidEmail('email-invalido');
    await registration.submit();

    if (await registration.isRateLimited()) {
      test.skip(true, 'Cadastro bloqueado pelo rate limit do ambiente de teste.');
    }
    await expect(registration.form).toContainText(
      /e-mail|email|válid/i,
      { timeout: 15_000 },
    );
  });

  test('CT003 - impede login com credenciais inválidas', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.loginWithInvalidCredentials();

    await expect(auth.loginForm).toBeVisible();
    await expect(auth.loginForm.getByRole('alert')).toContainText(
      /inválid|incorret|erro/i,
      { timeout: 15_000 },
    );
  });

  test('CT004 - administrador cria evento externo válido', async ({ page }) => {
    const adminPassword = process.env.ADMIN_PASSWORD;
    test.skip(!adminPassword, 'ADMIN_PASSWORD não foi configurada para o ambiente de teste.');
    const authenticated = await new AuthPage(page).login(
      account('ADMIN_EMAIL', 'admin@synergy.local'),
      adminPassword,
    );
    test.skip(!authenticated, 'Conta de Administrador não está disponível no ambiente de teste.');
    const dashboard = new DashboardPage(page);
    const events = new EventsPage(page);
    await dashboard.openCreateEvent();
    await events.createExternalEvent({ title: unique('Evento QA') });

    await expect(page).toHaveURL(/\/eventos/);
  });

  test('CT005 - investidor confirma presença pública em evento', async ({ page }) => {
    await new AuthPage(page).login(account('INVESTOR_EMAIL', 'investidor@demo.local'));
    const events = new EventsPage(page);
    const availableEvent = await events.openAvailableEvent();
    test.skip(
      !availableEvent,
      'Não há evento com capacidade e presença de investidor disponível no ambiente de teste.',
    );
    await events.confirmAttendance();
  });

  test('CT006 - Startup publica vaga com dados obrigatórios', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_EMAIL', 'startup@demo.local'));
    const dashboard = new DashboardPage(page);
    const jobs = new JobsPage(page);
    await dashboard.openCreateJob();
    await jobs.create({ title: unique('Vaga QA') });

    await expect(page).toHaveURL(/\/vagas/);
  });

  test('CT007 - Startup edita e desativa sua vaga', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_EMAIL', 'startup@demo.local'));
    const dashboard = new DashboardPage(page);
    const jobs = new JobsPage(page);
    await dashboard.openManageJobs();
    await jobs.openFirstOwnedJobForEdit();
    await jobs.editAndDeactivate();

    await expect(page).toHaveURL(/\/vagas\//);
  });

  test('CT008 - profissional não gerencia vaga de Startup', async ({ page }) => {
    await new AuthPage(page).login(account('PROFESSIONAL_EMAIL', 'profissional@demo.local'));
    const jobs = new JobsPage(page);
    await jobs.openFirstPublicJob();
    await jobs.expectManagementControlsHidden();
  });

  test('CT009 - conta gratuita é bloqueada em recurso Premium', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_FREE_EMAIL', 'startup-free@demo.local'));
    const premium = new PremiumPage(page);
    await premium.open();
    await premium.ensureFreePlan();
    await premium.openCommunityAsFreeUser();
  });

  test('CT010 - upgrade Premium simulado libera recurso', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_FREE_EMAIL', 'startup-free@demo.local'));
    const premium = new PremiumPage(page);
    await premium.open();
    await premium.ensureFreePlan();
    await premium.activate();
    await premium.cancel();
  });

  test('CT011 - usuário Premium publica e responde no fórum', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_EMAIL', 'startup@demo.local'));
    const community = new CommunityPage(page);
    await community.open();
    await community.createPostAndReply(unique('Discussão QA'));
  });

  test('CT012 - Startup Premium atualiza progresso do roadmap', async ({ page }) => {
    await new AuthPage(page).login(account('STARTUP_EMAIL', 'startup@demo.local'));
    const roadmap = new RoadmapPage(page);
    await roadmap.open();
    await roadmap.completeFirstStep();
  });
});

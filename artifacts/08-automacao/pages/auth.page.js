const { expect } = require('@playwright/test');

class AuthPage {
  constructor(page) {
    this.page = page;
    this.loginForm = page.getByTestId('login-form');
    this.emailInput = page.getByTestId('login-email');
    this.passwordInput = page.getByTestId('login-password');
    this.submitButton = page.getByTestId('login-submit');
    this.appNavigation = page.getByTestId('app-navigation');
  }

  async login(email, configuredPassword = process.env.TEST_PASSWORD) {
    if (!configuredPassword) {
      throw new Error('TEST_PASSWORD deve ser definido fora do repositório.');
    }

    await this.page.goto('/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(configuredPassword);
    await this.submitButton.click();

    const invalidCredentialsAlert = this.loginForm
      .getByRole('alert')
      .filter({ hasText: /inválid|incorret/i });
    const outcome = await Promise.race([
      this.appNavigation.waitFor({ state: 'visible', timeout: 15_000 }).then(() => 'authenticated'),
      invalidCredentialsAlert.waitFor({ state: 'visible', timeout: 15_000 }).then(() => 'invalid'),
    ]);

    return outcome === 'authenticated';
  }

  async loginWithInvalidCredentials(email = 'nao-existe@qa.local', password = 'senha-incorreta') {
    await this.page.goto('/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = { AuthPage };

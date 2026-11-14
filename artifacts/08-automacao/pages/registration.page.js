const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.form = page.getByTestId('register-form');
    this.roleStartup = page.getByTestId('register-role-startup');
    this.nameInput = page.getByTestId('register-name');
    this.emailInput = page.getByTestId('register-email');
    this.passwordInput = page.getByTestId('register-password');
    this.startupNameInput = page.getByTestId('register-startup-name');
    this.nicheSelect = page.getByTestId('register-niche');
    this.submitButton = page.getByTestId('register-submit');
    this.rateLimitMessage = page.getByText(/Muitas tentativas de cadastro/);
  }

  async open() {
    await this.page.goto('/cadastro');
    await expect(this.form).toBeVisible();
  }

  async fillStartup({ name, email, password, niche }) {
    await this.roleStartup.check();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.startupNameInput.fill(name);
    await this.nicheSelect.selectOption({ label: niche });
  }

  async fillInvalidEmail(email) {
    await this.roleStartup.check();
    await this.emailInput.fill(email);
  }

  async submit() {
    await this.submitButton.click();
    await Promise.race([
      this.page.getByTestId('app-navigation').waitFor({ state: 'visible', timeout: 15_000 }),
      this.rateLimitMessage.waitFor({ state: 'visible', timeout: 15_000 }),
      expect(this.submitButton).toBeEnabled({ timeout: 15_000 }),
    ]);
  }

  async isRateLimited() {
    return (await this.rateLimitMessage.count()) > 0;
  }
}

module.exports = { RegistrationPage };

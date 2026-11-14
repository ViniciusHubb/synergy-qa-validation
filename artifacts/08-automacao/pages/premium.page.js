const { expect } = require('@playwright/test');

class PremiumPage {
  constructor(page) {
    this.page = page;
    this.activateForm = page.getByTestId('premium-activate-form');
    this.activateButton = page.getByTestId('premium-activate-submit');
    this.cancelForm = page.getByTestId('premium-cancel-form');
    this.cancelButton = page.getByTestId('premium-cancel-submit');
    this.gate = page.getByTestId('premium-gate');
  }

  async open() {
    await this.page.goto('/app/premium');
  }

  async ensureFreePlan() {
    if (await this.cancelButton.count() > 0) {
      await this.cancelButton.click();
      await expect(this.activateButton).toBeVisible();
    }
  }

  async activate() {
    await this.activateButton.click();
    await expect(this.activateForm).toHaveCount(0);
    await expect(this.cancelForm).toBeVisible();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async openCommunityAsFreeUser() {
    await this.page.goto('/app/comunidade');
    await expect(this.gate).toBeVisible();
    await expect(this.page.getByTestId('new-post-open')).toHaveCount(0);
  }
}

module.exports = { PremiumPage };

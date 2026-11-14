const { expect } = require('@playwright/test');

class JobsPage {
  constructor(page) {
    this.page = page;
    this.jobCards = page.getByTestId(/^job-card-/);
    this.createForm = page.getByTestId('job-create-form');
    this.editForm = page.getByTestId('job-edit-form');
    this.titleInput = page.getByTestId('job-title');
    this.typeSelect = page.getByTestId('job-type');
    this.workModeSelect = page.getByTestId('job-work-mode');
    this.locationInput = page.getByTestId('job-location');
    this.skillsInput = page.getByTestId('job-skills');
    this.descriptionInput = page.getByTestId('job-description');
    this.submitButton = page.getByTestId('job-submit');
  }

  async create({ title }) {
    await expect(this.createForm).toBeVisible();
    await this.titleInput.fill(title);
    await this.typeSelect.selectOption({ index: 0 });
    await this.workModeSelect.selectOption({ index: 0 });
    await this.locationInput.fill('Remoto');
    await this.skillsInput.fill('JavaScript, testes');
    await this.descriptionInput.fill('Vaga criada pela suíte automatizada.');
    await this.submitButton.click();
  }

  async openFirstOwnedJobForEdit() {
    const editLink = this.page.getByTestId(/^job-edit-link-/).first();
    await expect(editLink).toBeVisible();
    await this.page.goto(await editLink.getAttribute('href'));
    await expect(this.editForm).toBeVisible({ timeout: 15_000 });
  }

  async editAndDeactivate() {
    await this.titleInput.fill(`Vaga editada-${Date.now()}`);
    await this.submitButton.click();
    await this.page.getByTestId(/^job-toggle-button-/).first().click();
  }

  async openFirstPublicJob() {
    await this.page.goto('/vagas');
    const card = this.jobCards.first();
    await expect(card).toBeVisible();
    await card.getByTestId(/^job-details-link-/).click();
  }

  async expectManagementControlsHidden() {
    await expect(this.page.getByTestId('job-edit-link')).toHaveCount(0);
    await expect(this.page.getByTestId(/^job-delete-button-/)).toHaveCount(0);
  }
}

module.exports = { JobsPage };

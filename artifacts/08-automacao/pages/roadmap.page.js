const { expect } = require('@playwright/test');

class RoadmapPage {
  constructor(page) {
    this.page = page;
    this.progress = page.getByTestId('roadmap-progress');
    this.firstStepToggle = page.getByTestId(/^roadmap-step-toggle-/).first();
  }

  async open() {
    await this.page.goto('/app/roadmap');
    await expect(this.progress).toBeVisible();
  }

  async completeFirstStep() {
    await expect(this.firstStepToggle).toBeVisible();
    await this.firstStepToggle.click();
    await expect(this.progress).toBeVisible();
  }
}

module.exports = { RoadmapPage };

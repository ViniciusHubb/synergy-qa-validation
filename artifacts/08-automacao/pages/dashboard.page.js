const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.navigation = page.getByTestId('app-navigation');
    this.createJobLink = page.getByTestId('dashboard-create-job-link');
    this.manageJobsLink = page.getByTestId('dashboard-manage-jobs-link');
    this.createEventLink = page.getByTestId('dashboard-create-event-link');
  }

  async expectLoaded() {
    await expect(this.navigation).toBeVisible();
  }

  async openCreateJob() {
    await this.createJobLink.click();
    await expect(this.page.getByTestId('job-create-form')).toBeVisible();
  }

  async openManageJobs() {
    await this.manageJobsLink.click();
    await this.page.waitForURL(/\/app\/vagas/, { timeout: 15_000 });
  }

  async openCreateEvent() {
    await this.createEventLink.click();
    await expect(this.page.getByTestId('event-create-form')).toBeVisible();
  }
}

module.exports = { DashboardPage };

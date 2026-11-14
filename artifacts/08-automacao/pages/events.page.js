const { expect } = require('@playwright/test');

class EventsPage {
  constructor(page) {
    this.page = page;
    this.eventCards = page.getByTestId(/^event-card-/);
    this.createForm = page.getByTestId('event-create-form');
    this.titleInput = page.getByTestId('event-title');
    this.typeSelect = page.getByTestId('event-type');
    this.originSelect = page.getByTestId('event-origin');
    this.startsAtInput = page.getByTestId('event-starts-at');
    this.endsAtInput = page.getByTestId('event-ends-at');
    this.locationInput = page.getByTestId('event-location');
    this.onlineCheckbox = page.getByTestId('event-is-online');
    this.externalUrlInput = page.getByTestId('event-external-url');
    this.capacityInput = page.getByTestId('event-capacity');
    this.descriptionInput = page.getByTestId('event-description');
    this.submitButton = page.getByTestId('event-submit');
    this.attendanceForm = page.getByTestId('event-attendance-form');
    this.joinButton = page.getByTestId('event-join-attendance');
    this.cancelAttendanceButton = page.getByTestId('event-cancel-attendance');
  }

  async createExternalEvent({ title }) {
    await this.titleInput.fill(title);
    await this.typeSelect.selectOption({ index: 0 });
    await this.originSelect.selectOption('EXTERNAL');
    await this.startsAtInput.fill('2030-01-10T10:00');
    await this.endsAtInput.fill('2030-01-10T12:00');
    await this.locationInput.fill('Online');
    await this.onlineCheckbox.check();
    await this.externalUrlInput.fill('https://example.com/evento-qa');
    await this.capacityInput.fill('20');
    await this.descriptionInput.fill('Evento criado pela suíte automatizada.');
    await this.submitButton.click();
  }

  async openAvailableEvent() {
    await this.page.goto('/eventos');
    const card = this.eventCards
      .filter({ hasText: 'Nenhum investidor confirmado ainda' })
      .first();
    if (await card.count() === 0) {
      return false;
    }

    await card.getByTestId(/^event-details-link-/).click();
    await expect(this.attendanceForm).toBeVisible();
    return true;
  }

  async confirmAttendance() {
    await this.joinButton.click();
    await expect(this.cancelAttendanceButton).toBeVisible({ timeout: 15_000 });
  }
}

module.exports = { EventsPage };

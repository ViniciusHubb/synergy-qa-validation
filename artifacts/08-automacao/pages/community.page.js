const { expect } = require('@playwright/test');

class CommunityPage {
  constructor(page) {
    this.page = page;
    this.openPostButton = page.getByTestId('new-post-open');
    this.postTitleInput = page.getByTestId('new-post-title');
    this.postContentInput = page.getByTestId('new-post-content');
    this.postSubmitButton = page.getByTestId('new-post-submit');
    this.replyContentInput = page.getByTestId('reply-content');
    this.replySubmitButton = page.getByTestId('reply-submit');
    this.replyForm = page.getByTestId('reply-form');
  }

  async open() {
    await this.page.goto('/app/comunidade');
  }

  async createPostAndReply(title) {
    await this.openPostButton.click();
    await this.postTitleInput.fill(title);
    await this.postContentInput.fill('Publicação criada pela suíte automatizada.');
    await this.postSubmitButton.click();
    await this.page.getByTestId(/^community-post-link-/).first().click();
    await this.replyContentInput.fill('Resposta criada pela suíte automatizada.');
    await this.replySubmitButton.click();
    await expect(this.replyForm).toBeVisible();
  }
}

module.exports = { CommunityPage };

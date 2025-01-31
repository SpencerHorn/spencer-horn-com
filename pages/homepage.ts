import { type Locator, type Page } from 'playwright-core';

export class Homepage {
  readonly page: Page;
  linkedInButton: Locator;
  githubButton: Locator;
  downloadResumeButton: Locator;

  constructor(page: Page) {
    this.linkedInButton = page.getByRole('link', { name: 'LinkedIn' });
    this.githubButton = page.getByRole('link', { name: 'Github' });
    this.downloadResumeButton = page.getByRole('link', {
      name: 'Download Resume',
    });
  }
}

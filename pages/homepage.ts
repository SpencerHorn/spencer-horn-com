import { type Locator, type Page } from 'playwright-core';

export class Homepage {
  readonly page: Page;
  linkedInButton: Locator;
  githubButton: Locator;
  downloadResumeButton: Locator;
  salesloftButton: Locator;
  davinciButton: Locator;
  fibonacciButton: Locator;
  unspecifiedButton: Locator;
  ibmButton: Locator;
  smashingBoxesButton: Locator;
  allscriptsButton: Locator;
  salesloftDetails: Locator;
  davinciDetails: Locator;
  fibonacciDetails: Locator;
  unspecifiedDetails: Locator;
  ibmDetails: Locator;
  smashingBoxesDetails: Locator;
  allscriptsDetails: Locator;

  constructor(page: Page) {
    this.linkedInButton = page.getByRole('link', { name: 'LinkedIn' });
    this.githubButton = page.getByRole('link', { name: 'Github' });
    this.downloadResumeButton = page.getByRole('link', {
      name: 'Download Resume',
    });
    this.salesloftButton = page.getByRole('button', { name: 'Salesloft' });
    this.davinciButton = page.getByRole('button', {
      name: 'Davinci Education',
    });
    this.fibonacciButton = page.getByRole('button', {
      name: 'Fibonacci Solutions',
    });
    this.unspecifiedButton = page.getByRole('button', { name: 'Unspecified' });
    this.ibmButton = page.getByRole('button', { name: 'IBM' });
    this.smashingBoxesButton = page.getByRole('button', {
      name: 'Smashing Boxes',
    });
    this.allscriptsButton = page.getByRole('button', { name: 'Allscripts' });
    this.salesloftDetails = page.getByRole('heading', {
      name: 'SALESLOFT, Software',
    });
    this.davinciDetails = page.getByRole('heading', {
      name: 'DAVINCI EDUCATION, Test',
    });
    this.fibonacciDetails = page.getByRole('heading', {
      name: 'FIBONACCI SOLUTIONS, Lead',
    });
    this.unspecifiedDetails = page.getByRole('heading', {
      name: 'UNSPECIFIED, LLC, Co-Founder',
    });
    this.ibmDetails = page.getByRole('heading', { name: 'IBM, Test' });
    this.smashingBoxesDetails = page.getByRole('heading', {
      name: 'SMASHING BOXES, Lead Quality',
    });
    this.allscriptsDetails = page.getByRole('heading', {
      name: 'Allscripts Healthcare',
    });
  }

  async clickSalesloftButton() {
    await this.salesloftButton.click();
  }

  async clickDavinciButton() {
    await this.davinciButton.click();
  }

  async clickFibonacciButton() {
    await this.fibonacciButton.click();
  }

  async clickUnspecifiedButton() {
    await this.unspecifiedButton.click();
  }

  async clickIbmButton() {
    await this.ibmButton.click();
  }

  async clickSmashingBoxesButton() {
    await this.smashingBoxesButton.click();
  }

  async clickAllscriptsButton() {
    await this.allscriptsButton.click();
  }
}

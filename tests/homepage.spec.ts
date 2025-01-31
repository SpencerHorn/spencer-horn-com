import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';

const baseUrl = 'https://www.spencerhorn.com';

test.describe('spencerhorn.com tests', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await page.goto(baseUrl);
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test('confirm page title', async ({ page }) => {
    await test.step('visit landing page', async () => {
      await expect(page).toHaveTitle(/Spencer Horn/);
    });
  });

  test('confirm linkedin button', async () => {
    await test.step('confirm linkedin button', async () => {
      await expect(homepage.linkedInButton).toBeEnabled();
    });
  });

  test('confirm github button', async () => {
    await test.step('confirm linkedin button', async () => {
      await expect(homepage.githubButton).toBeEnabled();
    });
  });

  test('confirm download resume button', async () => {
    await test.step('confirm linkedin button', async () => {
      await expect(homepage.downloadResumeButton).toBeEnabled();
    });
  });
});

import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';

const baseUrl = 'https://www.spencerhorn.com';

test.describe('spencerhorn.com tests', () => {
  let homepage: Homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
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

  test('confirm salesloft button', async () => {
    await test.step('click salesloft button', async () => {
      await expect(homepage.salesloftButton).toBeEnabled();
      await homepage.clickSalesloftButton();
    });

    await test.step('confirm salesloft details are displayed', async () => {
      await expect(homepage.salesloftDetails).toBeVisible();
    });
  });

  test('confirm davinci button', async () => {
    await test.step('click davinci education button', async () => {
      await expect(homepage.davinciButton).toBeEnabled();
      await homepage.clickDavinciButton();
    });

    await test.step('confirm davinci education details are displayed', async () => {
      await expect(homepage.davinciDetails).toBeVisible();
    });
  });

  test('confirm fibonacci button', async () => {
    await test.step('click fibonacci solutions button', async () => {
      await expect(homepage.fibonacciButton).toBeEnabled();
      await homepage.clickFibonacciButton();
    });

    await test.step('confirm fibonacci solutions details are displayed', async () => {
      await expect(homepage.fibonacciDetails).toBeVisible();
    });
  });

  test('confirm unspecified button', async () => {
    await test.step('click unspecified button', async () => {
      await expect(homepage.unspecifiedButton).toBeEnabled();
      await homepage.clickUnspecifiedButton();
    });

    await test.step('confirm unspecified details are displayed', async () => {
      await expect(homepage.unspecifiedDetails).toBeVisible();
    });
  });

  test('confirm ibm button', async () => {
    await test.step('click ibm button', async () => {
      await expect(homepage.ibmButton).toBeEnabled();
      await homepage.clickIbmButton();
    });

    await test.step('confirm ibm details are displayed', async () => {
      await expect(homepage.ibmDetails).toBeVisible();
    });
  });

  test('confirm smashing boxes button', async () => {
    await test.step('click smashing boxes button', async () => {
      await expect(homepage.smashingBoxesButton).toBeEnabled();
      await homepage.clickSmashingBoxesButton();
    });

    await test.step('confirm smashing boxes details are displayed', async () => {
      await expect(homepage.smashingBoxesDetails).toBeVisible();
    });
  });

  test('confirm allscripts button', async () => {
    await test.step('click allscripts button', async () => {
      await expect(homepage.allscriptsButton).toBeEnabled();
      await homepage.clickAllscriptsButton();
    });

    await test.step('confirm allscripts details are displayed', async () => {
      await expect(homepage.allscriptsDetails).toBeVisible();
    });
  });
});

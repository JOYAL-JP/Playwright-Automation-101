import { test } from '@playwright/test';
import { InputFieldsPage } from '../Pages/InputFieldsPage';

test.describe('Input Fields Tests', () => {

  test.beforeEach(async ({ page }) => {

    const inputFieldsPage = new InputFieldsPage(page);

    await inputFieldsPage.navigateToPracticePage();
    await inputFieldsPage.navigateToInputFieldsPage();
  });

  test('TC003 - Input movie name and verify result', async ({ page }) => {

    const inputFieldsPage = new InputFieldsPage(page);

    await inputFieldsPage.enterMovieName('Inception');

    await inputFieldsPage.clickSubmit();

    await inputFieldsPage.verifyMovieName('Inception');
  });

});
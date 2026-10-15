import { test } from '../Fixtures/Fixtures';

test.describe('Form Tests', () => {

  test.beforeEach(async ({ formsPage }) => {
    await formsPage.navigateToPracticePage();
    await formsPage.navigateToFormsPage();
  });

  test('F01 Login Form validation', async ({ formsPage }) => {
    await formsPage.validateLoginForm();
  });

  test('F02 Personal Details Validation', async ({ formsPage }) => {
    await formsPage.personalDetailsForm();
  });

  test('F03 Address details validation', async ({ formsPage }) => {
    await formsPage.addressForm('Japan');
  });

  test('F04 Interest Form Details', async ({ formsPage }) => {
    await formsPage.interestForm();
  });
});
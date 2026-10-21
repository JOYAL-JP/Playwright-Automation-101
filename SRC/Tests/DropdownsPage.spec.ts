import { test } from '../Fixtures/Fixtures';

test.describe('Dropdown Tests', () => {

  test.beforeEach(async ({ dropdownsPage }) => {
    await dropdownsPage.navigateToPracticePage();
    await dropdownsPage.navigateToDropdownPage();
  });

  test('D01 Dropdown validation', async ({ dropdownsPage }) => {
    await dropdownsPage.validateDropdowns(['Apple', 'Orange', 'Banana']);
  });

});
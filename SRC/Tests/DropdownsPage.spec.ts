import { test } from '../Fixtures/Fixtures';

test.describe('Dropdown Tests', () => {

  test.beforeEach(async ({ dropdownsPage }) => {
    await dropdownsPage.navigateToPracticePage();
    await dropdownsPage.navigateToDropdownPage();
  });

  test('D01 Dropdown validation', async ({ dropdownsPage }) => {
    await dropdownsPage.validateDropdowns(['Apple', 'Orange', 'Banana']);
  });

  test('D02 Dropdown validation using values', async ({ dropdownsPage }) => {
    await dropdownsPage.validateDropdownusingValues();
  });

  test('D03 Dropdown validation using index', async ({ dropdownsPage }) => {
    await dropdownsPage.validateDropdownsusingIndex();
  });

  test('D04 Dropdown validation for multiple select dropdown', async ({ dropdownsPage }) => {
    await dropdownsPage.validateDropdownSelectOption();
  });
  test('D06 Dropdown validation for searchablle combox', async ({ dropdownsPage }) => {
    await dropdownsPage.validateEditCombobox();
  });
});
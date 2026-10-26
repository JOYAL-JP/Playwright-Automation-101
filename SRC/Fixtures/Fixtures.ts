import { test as base } from '@playwright/test';
import { FormsPage } from '../Pages/FormsPage';
import { DropdownsPage } from '../Pages/DropdownsPage';

type Pages = {
  formsPage: FormsPage;
  dropdownsPage: DropdownsPage;
};

export const test = base.extend<Pages>({
  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page));
  },
  dropdownsPage: async ({ page }, use) => {
    await use(new DropdownsPage(page));
  },
});

export { expect } from '@playwright/test';
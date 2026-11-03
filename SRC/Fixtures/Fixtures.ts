import { test as base } from '@playwright/test';
import { FormsPage } from '../Pages/FormsPage';
import { DropdownsPage } from '../Pages/DropdownsPage';
import { AlertsandDialogpage } from '../Pages/AlertsandDialogpage';

type Pages = {
  formsPage: FormsPage;
  dropdownsPage: DropdownsPage;
  alertsandDialogspage: AlertsandDialogpage;
};

export const test = base.extend<Pages>({
  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page));
  },
  dropdownsPage: async ({ page }, use) => {
    await use(new DropdownsPage(page));
  },
  alertsandDialogspage: async ({ page }, use) => {
    await use(new AlertsandDialogpage(page));
  },

});

export { expect } from '@playwright/test';
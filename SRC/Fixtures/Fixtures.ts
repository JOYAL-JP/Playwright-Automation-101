import { test as base } from '@playwright/test';
import { FormsPage } from '../Pages/FormsPage';

type Pages = {
  formsPage: FormsPage;
};

export const test = base.extend<Pages>({
  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page));
  },
});

export { expect } from '@playwright/test';
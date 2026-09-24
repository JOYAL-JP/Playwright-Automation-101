import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateToPracticePage() {
    await this.page.goto('/');

    await this.page.locator('a[href="/practice"]').first().click();

    await expect(this.page).toHaveURL(/practice/);
    await expect(this.page.locator('h1'))
      .toHaveText('Practice Elements');
  }


  async navigateToInputFieldsPage() {
    await this.page.locator('a[href="/practice/input-fields"]').click();

    await expect(this.page).toHaveURL(/input-fields/);
    await expect(this.page.locator('h1'))
      .toHaveText('Input Field Automation Practice');
  }

  async navigateToButtonsPage() {
    await this.page.locator('a[href="/practice/buttons"]').click();

    await expect(this.page).toHaveURL(/buttons/);
    await expect(this.page.locator('h1'))
      .toHaveText('Button Automation Practice');
  }
}
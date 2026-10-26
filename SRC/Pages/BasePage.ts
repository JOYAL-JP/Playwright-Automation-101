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

  protected async navigateAndVerify(
    link: string,
    urlPattern: RegExp,
    heading: string
) {
    await this.page.locator(link).click();

    await expect(this.page).toHaveURL(urlPattern);
    await expect(this.page.locator('h1')).toHaveText(heading);
}



async navigateToButtonsPage() {

    await this.navigateAndVerify(
        'a[href="/practice/buttons"]',
        /buttons/,
        'Button Automation Practice'
    );

}
async navigateToFormsPage() {

    await this.navigateAndVerify(
        'a[href="/practice/forms"]',
        /forms/,
        'Form Automation Practice'
    );

}

async navigateToInputFieldsPage() {

    await this.navigateAndVerify(
        'a[href="/practice/input-fields"]',
        /input-fields/,
        'Input Field Automation Practice'
    );

}
async navigateToDropdownPage() {

    await this.navigateAndVerify(
        'a[href="/practice/dropdowns"]',
        /dropdowns/,
        'Dropdown Automation Practice'
    );

}
}
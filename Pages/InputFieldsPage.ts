import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InputFieldsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async enterMovieName(movieName: string) {
    await this.page
      .getByPlaceholder('Enter a movie name…')
      .fill(movieName);
  }

  async clickSubmit() {
    await this.page
      .getByRole('button', { name: 'Submit' })
      .click();
  }

  async verifyMovieName(expectedMovie: string) {
    const actualMovie = await this.page
      .getByTestId('result-s01')
      .innerText();

    console.log(`Actual Value: ${actualMovie}`);


    await expect(
      this.page.getByTestId('result-s01')
    ).toContainText(expectedMovie);
  }
}
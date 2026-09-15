import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InputFieldsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }



  //TCS01
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

  async verifyMovieName(VmovieName:String) {

    const appearedName = await this.page
      .getByTestId('result-s01')
      .innerText();

    if (VmovieName== appearedName) {
         console.log('✅ Movie name is matching');
console.log(`Expected: ${VmovieName}`);
console.log(`Actual: ${appearedName}`);
    }
else
{
  console.log('❌ Movie name is NOT matching');
}
  }
  // TCS02


  async appendName(appendmovieName: string) {
    const appendInput = this.page.getByTestId('input-append');

    await appendInput.click();
    await appendInput.press('Control+End'); // or End
    await appendInput.pressSequentially(appendmovieName);
    await appendInput.press('Tab');
    await this.page.waitForTimeout(2000);
  }

  //TCS03


  async readFieldValue() {
    const fieldValue = await this.page.getByTestId('input-read-value').inputValue();
    console.log(fieldValue);
    return fieldValue;
  }

  async clickReadvalue() {
    await this.page.getByRole('button', { name: 'Read value' }).click();

    const valueInputed = this.readFieldValue();
    console.log(valueInputed);
await this.page.waitForTimeout(1000);


  }
}
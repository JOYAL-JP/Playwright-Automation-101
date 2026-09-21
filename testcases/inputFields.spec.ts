import { _baseTest, test } from '@playwright/test';
import { InputFieldsPage } from '../Pages/InputFieldsPage';

test.describe('Input Fields Tests', () => {

  test.beforeEach(async ({ page }) => {

    const inputFieldsPage = new InputFieldsPage(page);

    await inputFieldsPage.navigateToPracticePage();
    await inputFieldsPage.navigateToInputFieldsPage();
  });

  test('TCS01 - Input movie name and verify result', async ({ page }) => {

    const inputFieldsPage = new InputFieldsPage(page);

    const movie= 'Inception';

    await inputFieldsPage.enterMovieName(movie);

    await inputFieldsPage.clickSubmit();

    await inputFieldsPage.verifyMovieName(movie);
  });

test(' TCS02- Append text into input field and press tab', async ({ page }) => {
 
    const inputFieldsPage = new InputFieldsPage(page);
    await inputFieldsPage.appendName(" End Game");

  });


  
test(' TCS03- Read value and Press Read value Button', async ({ page }) => {
 
    const inputFieldsPage =new InputFieldsPage(page);
    await inputFieldsPage.readFieldValue();
    await inputFieldsPage.clickReadvalue();

  });

test ('TCS04- Clear the input field and check confirmation' ,async({page})=>{

  const inputFieldsPage =new InputFieldsPage(page);
  await inputFieldsPage.clearInputField();
})

});
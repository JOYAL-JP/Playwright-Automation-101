import { _baseTest, test } from '@playwright/test';
import { FormsPage } from '../Pages/FormsPage';

test.describe('From Tests', () => {

    test.beforeEach(async ({ page }) => {

        const formpage = new FormsPage(page);
        await formpage.navigateToPracticePage();
        await  formpage.navigateToFormsPage();

    });

    test('F01 Login Form validation', async ({ page }) => {

        const formpage = new FormsPage(page);
        await formpage.ValidateLoginForm();
      
    });

    test('F02 Personal Details Validation', async ({ page }) => {

        const formpage = new FormsPage(page);
        await formpage.PersonalDetailsForm();
        
      
    });
    test('F03 Address details validation', async ({ page }) => {

        const Country ="Japan"
        const formpage = new FormsPage(page);
        await formpage.AddressForm(Country);
        
      
    });

    test('F04 Interest Form Details ',async({page})=>{

        const formpage =new FormsPage(page);
        await formpage.InterestForm();
    })
});
import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }


    //F01 - Login Form Validation Also covers FRM_001

    async validateLoginForm() {
        await this.page.getByLabel('Email').fill('admin@example.com');
        await this.page.locator('#login-password').fill('Password123');
        await this.page.getByTestId('btn-login-submit').click();
        await expect(this.page.getByTestId('result-login')).toContainText("admin@example.com");
        

    }


    //FRM_002 

    async verifyRequiredFieldsError()
    {
        // await this.page.getByTestId('btn-login-reset').click();
        await this.page.getByTestId('btn-login-submit').click();
        await expect(this.page.locator('#loginEmailError')).toContainText('Email is required.');
        await expect(this.page.locator('#loginPasswordError')).toContainText('Password is required.');
    }


    //F02

    async personalDetailsForm() {
        await this.page.getByLabel('First Name ').fill('Naruto');
        await this.page.getByLabel('Last Name').fill('Uzumaki');
        await this.page.getByLabel('Phone').fill('9448728279');
        await this.page.getByLabel('Date of Birth').fill('2026-10-05');
        await this.page.getByTestId('radio-gender-male').check();
        await this.page.getByRole('button', { name: 'Save Details' }).click();
        await expect(this.page.getByTestId('result-personal')).toContainText('Naruto Uzumaki');

    }



    //F03
    async addressForm(country: string) {
        await this.page.selectOption('select', { label: country });
        await this.page.getByLabel("City ").fill('Tokyo');
        await this.page.locator('//*[@id="bio"]').fill('my dream is to become hokage the greatest of all time')
        await this.page.locator('//*[@id="addressSubmitBtn"]').click();
        await expect(this.page.getByTestId('result-address')).toContainText(country);
    }

    //F04

    async interestForm() {
        await this.page.getByLabel('Playwright').check();
        await this.page.getByRole('button', { name: "Save Interests" }).click();
        await expect(this.page.getByTestId('result-interests')).toContainText('Playwright');
    }
}
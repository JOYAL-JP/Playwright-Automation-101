import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ButtonsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }


    //TC BTN_001
    async clickToGoHome() {
        await this.page
            .getByRole('button', { name: 'Go To Home' })
            .click();
        await this.page.waitForTimeout(500);
    }

    async verifyHomeNavigation() {
        await expect(
            this.page.getByTestId('result-s01')
        ).toContainText('Home');

        const results01 = await this.page.getByTestId('result-s01').innerHTML();
        console.log(results01);

    }

    //TC BTN_002
    async assertTrim() {
        await this.page.getByTestId('btn-navigate-home').click();
        const buttonText = await this.page.getByTestId('btn-navigate-home').textContent();
        console.log('Button Text:', buttonText?.trim());
        expect(buttonText?.trim()).toBe('Go To Home');

    }


    //TC BTN_003
    async verifycordinates() {
        const coordinates = await this.page.getByTestId('btn-get-coordinates');
        const button = this.page.getByTestId('btn-get-coordinates');
        const box = await button.boundingBox();
        console.log(`X: ${box?.x}, Y: ${box?.y}`);
        await this.page.getByTestId('btn-get-coordinates').click();
        
    }
    //TC BTN_0004
    async doublClick()
    {
        await this.page.getByRole('button',{name:'Double Click Me'}).dblclick();
        await expect(this.page.getByTestId('result-s07')).toContainText('Double clicked!');
    }


    //TC BTN_005

    async rightClickAction()
    {
        await this.page.getByTestId('btn-right-click').click({button:'right'});
        await expect(this.page.getByTestId('result-s08')).toContainText('Context menu triggered!');
    }
    //TC BTN_006

    async disabledButtonAssertion()
    {
        await expect(this.page.getByTestId('btn-disabled')).toBeDisabled();
        await expect(this.page.getByTestId('result-s05')).toHaveText('Button is disabled — no action fires');
    }

    
}

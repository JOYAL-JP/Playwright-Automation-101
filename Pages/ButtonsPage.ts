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
    async doublClick() {
        await this.page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        await expect(this.page.getByTestId('result-s07')).toContainText('Double clicked!');
    }


    //TC BTN_005

    async rightClickAction() {
        await this.page.getByTestId('btn-right-click').click({ button: 'right' });
        await expect(this.page.getByTestId('result-s08')).toContainText('Context menu triggered!');
    }
    //TC BTN_006

    async disabledButtonAssertion() {
        await expect(this.page.getByTestId('btn-disabled')).toBeDisabled();
        await expect(this.page.getByTestId('result-s05')).toHaveText('Button is disabled — no action fires');

        const isEnabled = await this.page
            .getByTestId('btn-disabled')
            .isEnabled();

        console.log('Button Enabled :', isEnabled);
    }
    //TC BTN_007
    async enabledButtonAssertion() {
        await expect(this.page.getByTestId('btn-navigate-home')).toBeEnabled();
        await this.page.getByTestId('btn-navigate-home').click();
        await expect(this.page.getByTestId('result-s01')).toHaveText('Navigated to Home Page');

        const buttonsate = await this.page
            .getByTestId('btn-navigate-home')
            .isDisabled();

        console.log('Button Disabled :', buttonsate);
    }

    //TC BTN_008

    async verifyButtonVisibleInMobile() {
        await this.page.setViewportSize({ width: 375, height: 667 });

        await expect(
            this.page.getByTestId('btn-navigate-home')
        ).toBeVisible();

        await expect(
            this.page.getByTestId('btn-navigate-home')
        ).toBeEnabled();
    }
    async verifyButtonVisibleInDesktop() {
        await this.page.setViewportSize({ width: 1440, height: 900 });

        await expect(
            this.page.getByTestId('btn-navigate-home')
        ).toBeVisible();

        await expect(
            this.page.getByTestId('btn-navigate-home')
        ).toBeEnabled();
    }


    //TC BTN_009

    async keyboardAccessible() {
        const Trigger = await this.page.getByTestId("btn-navigate-home");
        await Trigger.focus();
        await Trigger.press('Enter');

    }

    //TC BTN_010

    async accessibleName() {
        const button = this.page.getByTestId('btn-navigate-home');
        await expect(button).toHaveRole('button');
        const accessibleName = await button.getAttribute('aria-label');
        await expect(accessibleName?.length != 0);
        console.log('Accessible Name:', accessibleName);
    }

    //TC BTN_011

    async verifyButtonHoverEffect() {
    const button = this.page.getByTestId('btn-click-hold'); // Use your actual locator/testid

    // Optional: Get initial state or use toHaveCSS directly
    const initialBg = await button.evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log('Before Hover:', initialBg);

    // Perform hover
    await button.hover();

    // Use Playwright's auto-retrying assertion instead of static expect
    await expect(button).not.toHaveCSS('background-color', initialBg);
    console.log('PASS: Background color changed on hover');
}

    //TC BTN_12

    async revertReloadState() {

    }
}

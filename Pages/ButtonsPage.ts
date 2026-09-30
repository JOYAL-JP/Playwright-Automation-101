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

        const buttonDoubleClick = this.page.getByTestId('btn-double-click');
        const bgBefore0 = await buttonDoubleClick.evaluate(el =>
            window.getComputedStyle(el).backgroundColor);
        console.log('Before Hover:', bgBefore0);
        await buttonDoubleClick.hover();
        const bgAfter0 = await buttonDoubleClick.evaluate(el =>
            window.getComputedStyle(el).backgroundColor);
        console.log('After Hover:', bgAfter0);
        expect(bgAfter0).not.toBe(bgBefore0);
        console.log('PASS: Background color changed on hover');

        const buttonClickandHold = this.page.getByTestId('btn-click-hold');
        const bgBefore = await buttonClickandHold.evaluate(el =>
            window.getComputedStyle(el).backgroundColor);
        console.log('Before Hover:', bgBefore);
        await buttonClickandHold.hover();
        const bgAfter = await buttonClickandHold.evaluate(el =>
            window.getComputedStyle(el).backgroundColor);
        console.log('After Hover:', bgAfter);
        expect(bgAfter).not.toBe(bgBefore);
        console.log('PASS: Background color changed on hover');


    }

    //TC BTN_12

    async revertReloadState() {

    }
}

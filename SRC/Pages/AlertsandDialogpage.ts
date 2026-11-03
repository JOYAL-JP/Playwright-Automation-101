import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsandDialogpage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
    async closeInfoAlertDialog() {
           await this.page.getByRole('button', { name: 'Open Info Dialog' }).click();
           await expect(this.page.getByTestId("info-alert-dialog")).toBeVisible();
           await this.page.getByRole("button",{name: "Close info dialog"}).click();
           await expect(this.page.getByTestId("result-s01")).toHaveText("Info dialog dismissed");
    }
}

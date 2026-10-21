import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownsPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }



    //S01 - Dropdown Validation

    async validateDropdowns(fruits: string[]) {
        for (const fruit of fruits) {
            await this.page.selectOption('select', { label: fruit });
            await expect(this.page.getByTestId('result-s01')).toContainText(fruit);
        }
    }
}

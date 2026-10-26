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

    async validateDropdownusingValues() {
        const countrySelect = this.page.getByTestId('country-select');

        await countrySelect.selectOption({ value: 'argentina' });
        await expect(this.page.getByTestId('result-s02')).toContainText('Argentina');

        await countrySelect.selectOption({ value: 'india' });
        await expect(this.page.getByTestId('result-s02')).toContainText('India');
        
}
}

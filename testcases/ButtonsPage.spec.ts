import { _baseTest, test } from '@playwright/test';
import { ButtonsPage } from '../Pages/ButtonsPage';

test.describe('Button tests', () => {

    test.beforeEach(async ({ page }) => {

        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.navigateToPracticePage();
        await ButtonPage.navigateToButtonsPage();

    });

    test('BTN_001 BTN_002- Click navigate to home and ', async ({ page }) => {

        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.clickToGoHome()
        await ButtonPage.verifyHomeNavigation();
        await ButtonPage.assertTrim();
    });

    test('BTN_003 - Find cordinates of button and matching with the given', async ({ page }) => {

        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.verifycordinates();


    })

    test('BTN_004 - Doulble click ', async ({ page }) => {
        const ButtonPage= new ButtonsPage(page);
        await ButtonPage.doublClick();
    });

test('BTN_005 - Right click action', async ({ page }) => {
        const ButtonPage= new ButtonsPage(page);
        await ButtonPage.rightClickAction();
    });

test('BTN_006 - Disabled button assertion', async ({ page }) => {
        const ButtonPage= new ButtonsPage(page);
        await ButtonPage.disabledButtonAssertion();
    });
});


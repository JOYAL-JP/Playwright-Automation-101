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
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.doublClick();
    });

    test('BTN_005 - Right click action', async ({ page }) => {
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.rightClickAction();
    });

    test('BTN_006 - Disabled button assertion', async ({ page }) => {
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.disabledButtonAssertion();
    });

    test('BTN_007 - Enabled button assertion', async ({ page }) => {
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.enabledButtonAssertion();
    });

    test('BTN_008 - Test out View ports', async ({ page }) => {
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.verifyButtonVisibleInMobile();
        await ButtonPage.verifyButtonVisibleInDesktop();
    });

    test('BTN_009 - Test Keyboard accessiblity', async ({ page }) => {
        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.keyboardAccessible();

    });

    test("BTN_010 Accessible name for button", async ({ page }) => {

        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.accessibleName();
    });
    test("BTN_011 VerifyButtonHoverState change", async ({ page }) => {

        const ButtonPage = new ButtonsPage(page);
        await ButtonPage.verifyButtonHoverEffect();
    });


});


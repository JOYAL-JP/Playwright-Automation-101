import { test } from '../Fixtures/Fixtures';
import { AlertsandDialogpage } from '../Pages/AlertsandDialogpage';

test.describe('Alerts and Dialogs Tests', () => {

  test.beforeEach(async ({ alertsandDialogspage }) => {
    await alertsandDialogspage.navigateToPracticePage();
    await alertsandDialogspage.navigateToAlertsandDialogsPage();
  });

  test('S01 Close Info Alert Dialog', async ({ alertsandDialogspage }) => {
    await alertsandDialogspage.closeInfoAlertDialog();
  });

});
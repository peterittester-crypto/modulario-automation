import { test, expect } from '@playwright/test';

test.use({ headless: false, channel: 'chrome' });

test('Form1 – základné vyplnenie a odoslanie', async ({ page }) => {

  // 1. Otvorenie stránky
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  // 2. Text input
  await page.locator('input[name="my-text"]').fill('Peter Test');

  // 3. Password input
  await page.locator('input[name="my-password"]').fill('Peter HELSO');

  // 4. Textarea
  await page.getByLabel('Textarea').fill('Toto je testovacia správa.');

  // 5. Dropdown (select)
  await page.getByLabel('Dropdown (select)').selectOption('2');

  // 6. Dropdown (datalist)
  await page.getByLabel('Dropdown (datalist)').fill('Test');

  // 7. Checked checkbox
  await page.getByLabel('Checked checkbox').check();

  // 8. Checked radio
  await page.getByLabel('Checked radio').check();

  // 9. Screenshot — MUSÍ BYŤ PRED SUBMIT
  await page.screenshot({ path: 'before-submit.png' });

  // 10. Submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // ASSERTION
  await expect(page.locator('#message')).toHaveText('Received!');

  // 11. Overenie výsledku
  await expect(page.locator('body')).toContainText('Received!');

  // 12. Pauza pre debugging
   
});

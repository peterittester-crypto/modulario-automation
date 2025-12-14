import { test, expect } from '@playwright/test';
test.use({ headless: false, channel: 'chrome' });
test('Flow Form1 to Form2', async ({ page }) => {
  const sharedData = {
    text: 'Peter Flow Test',
    password: 'MojeHeslo123',
    message: 'Toto je správa'
  };
  // FORM1
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.locator('input[name="my-text"]').fill(sharedData.text);
  await page.locator('input[name="my-password"]').fill(sharedData.password);
  await page.getByLabel('Textarea').fill(sharedData.message);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#message')).toHaveText('Received!');
  // FORM2
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  const textField = page.locator('input[name="my-text"]');
  const passwordField = page.locator('input[name="my-password"]');
  await textField.fill(sharedData.text);
  await passwordField.fill(sharedData.password);
  await expect(textField).toHaveValue(sharedData.text);
  await expect(passwordField).toHaveValue(sharedData.password);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#message')).toHaveText('Received!');
});
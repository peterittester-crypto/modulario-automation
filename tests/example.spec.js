import { test, expect } from '@playwright/test';

test('Form2 – loop pre rôzne typy inputov', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  const fields = [
    {
      type: 'text',
      action: async () =>
        page.locator('input[name="my-text"]').fill('Playwright test')
    },
    {
      type: 'password',
      action: async () =>
        page.locator('input[name="my-password"]').fill('superheslo')
    },
    {
      type: 'textarea',
      action: async () =>
        page.getByLabel('Textarea').fill('Text z loopu')
    },
    {
      type: 'select',
      action: async () =>
        page.getByLabel('Dropdown (select)').selectOption('2')
    },
    {
      type: 'checkbox',
      action: async () =>
        page.getByLabel('Checked checkbox').check()
    },
    {
      type: 'radio',
      action: async () =>
        page.getByLabel('Checked radio').check()
    }
  ];

  for (const field of fields) {
    await field.action();
  }

  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('body')).toContainText('Received!');
  await page.pause();
});

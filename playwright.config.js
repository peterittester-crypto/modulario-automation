// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // Kde sú testy
  timeout: 30 * 1000,          // 30 sekúnd na test
  retries: 0,                  // Koľko opakovaní pri páde
  use: {
    headless: false,           // Viditeľný režim
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000,  // Timeout pre akcie
    screenshot: 'only-on-failure', // Screenshot len pri chybe
    video: 'retain-on-failure',    // Video len pri chybe
  },
});

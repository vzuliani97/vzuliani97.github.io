import { defineConfig } from '@playwright/test';

// Uses the installed Google Chrome (channel), so no browser download is needed locally or in CI.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:4173', channel: 'chrome' },
  projects: [
    { name: 'desktop-light', use: { viewport: { width: 1366, height: 900 }, colorScheme: 'light' } },
    { name: 'mobile-dark', use: { viewport: { width: 375, height: 800 }, isMobile: true, hasTouch: true, colorScheme: 'dark' } },
  ],
  webServer: { command: 'npx vite preview --port 4173 --strictPort', url: 'http://localhost:4173', reuseExistingServer: true },
});

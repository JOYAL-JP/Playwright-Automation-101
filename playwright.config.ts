import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://qaplayground.com',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
  ,reporter: [
['html'],
]
});
// tests/test-fixtures.ts
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  login: LoginPage;
};

export const test = baseTest.extend<MyFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

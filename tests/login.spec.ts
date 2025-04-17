import { test } from './test-fixtures';  
import { expect } from '@playwright/test';    
import { config } from '../config/testConfig';


test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ login }) => {
    await login.navigate();
  });

  test('Successful login', async ({ login }) => {
    await login.login(config.credentials.username1, config.credentials.password);
    await login.verifyLoginSuccess();
  });
});

// Unsuccessful login test – planned as future enhancement
/*
test('Unsuccessful login', async ({ login }) => {
  await login.navigate();
  await login.login(config.credentials.username2, config.credentials.password);
  await login.verifyLoginFailure();
});
*/







   
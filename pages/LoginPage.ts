import { Page,expect } from '@playwright/test';
import { config } from '../config/testConfig';


export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    console.log('Navigating to login page:', config.PRACTICE_TEST_LOGIN);
    await this.page.goto(config.PRACTICE_TEST_LOGIN, { waitUntil: 'load' });
    await this.page.screenshot({ path: 'navigated.png' });
    await this.page.waitForSelector('#username', { timeout: 10000 });

  }
  

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit')
}
  
  async verifyLoginSuccess() {
    const successMessage = this.page.locator('h1.post-title');
   await expect(successMessage).toBeVisible();
   await expect(successMessage).toHaveText('Logged In Successfully'); 
  }
// Future enhancement: validation for failed login
/*
  async verifyLoginFailure() {
    const errorMessage = this.page.locator('#error');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
    await expect(errorMessage).toHaveText('Your username is invalid!');
  }
*/
  async getErrorMessage() {
    return this.page.textContent('#error');
  }

  async isSuccessPage() {
    return this.page.locator('h1').textContent();
  }
}

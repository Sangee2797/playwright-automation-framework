# Playwright Automation Framework

This is a TypeScript-based Playwright automation project that includes both **UI** and **API** test cases. The project showcases a modular framework with fixtures, page object model, and externalized configuration.

---

## Project Structure

```
├── tests/
│   ├── login.spec.ts           # UI test for login page
│   ├── api.test.ts             # API test cases for ReqRes
│   └── test-fixtures.ts        # Custom test fixture setup
├── pages/
│   └── LoginPage.ts            # Page Object Model for login page
├── config/
│   └── testConfig.ts           # Test data and configuration
├── playwright.config.ts        # Playwright global config
└── README.md
```

---

## Features

- UI testing with Playwright (Login page)
- API testing with ReqRes (positive & negative scenarios)
- Page Object Model for UI abstraction
- Custom fixtures for reusable page instances
- Config-driven credentials and URLs
- Video & screenshot on test failure
- Ready for CI/CD integration

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. Run a specific test

```bash
npx playwright test tests/login.spec.ts
```

### 4. Run with headed mode (see browser)

```bash
npx playwright test --headed
```

---

## Environment Configuration

All test data is maintained in:

```ts
// config/testConfig.ts

export const config = {
  PRACTICE_TEST_LOGIN: 'https://practicetestautomation.com/practice-test-login/',
  credentials: {
    username1: 'student',
    username2: 'wronguser',
    password: 'Password123',
  },
};
```

---

## API Tests (ReqRes)

### Login - Successful

```http
POST /api/login
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

### Login - Unsuccessful (missing password)

```http
POST /api/login
{
  "email": "peter@klaven"
}
```

---

## Example UI Test (Login Success)

```ts
test('Successful login', async ({ login }) => {
  await login.navigate();
  await login.login(config.credentials.username1, config.credentials.password);
  await login.verifyLoginSuccess();
});
```

---

## Reporting & Debugging

- Screenshots and videos saved under `test-results/`
- Use `--debug` or `--headed` for live browser visibility

---

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- ReqRes API (mock API for practice)

---

## TODO / Future Enhancements

- [ ] Automate invalid UI login test case
- [ ] Add logout validation
- [ ] Add CI support with GitHub Actions
- [ ] Add test tagging / filtering by type

---



import { test, expect, request } from '@playwright/test';
import { config } from '../config/testConfig';


test('POST login successful - ReqRes API', async () => {
  const context = await request.newContext();
  const response = await context.post(config.endpoints.loginUser, {
    data: {
      email: config.credentials.email,
      password: config.credentials.password,
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeDefined();
});

test('POST login unsuccessful - ReqRes API (missing password)', async () => {
  const context = await request.newContext();
  const response = await context.post(config.endpoints.loginUser, {
    data: {
      email: config.credentials.email,
    },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBe('Missing password');
});


// test('GET single user from ReqRes API', async () => {
//   const context = await request.newContext();
//   const response = await context.get(config.endpoints.getSingleUser);

//   // Assert status code
//   expect(response.status()).toBe(200);
//   expect(response.ok()).toBeTruthy();

//   // Parse and assert response body
//   const body = await response.json();
//   expect(body.data).toBeDefined();
//   expect(body.data.id).toBe(2);
//   expect(body.data.email).toBe(config.credentials.email);
// });

// test('GET single resource not found from ReqRes API (should return 404)', async () => {
//   const context = await request.newContext();
//   const response = await context.get(config.endpoints.getSingleUserNotFound);

//   // Assert status code is 404
//   expect(response.status()).toBe(404);
//   expect(response.ok()).toBeFalsy();

//   // Assert empty body (text, not JSON)
//   const body = await response.text();
//   expect(body).toBe('');
// });

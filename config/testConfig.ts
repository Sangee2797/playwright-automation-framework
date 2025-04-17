export const config = {
    PRACTICE_TEST_LOGIN: "https://practicetestautomation.com/practice-test-login/",
    credentials: {
      username1: "student",
      username2: "wrong.username@dummy.com",
      password: "Password123",
      email:"janet.weaver@reqres.in"
    },
    endpoints:{
        loginUser: "https://reqres.in/api/login",
        getSingleUserNotFound: "https://reqres.in/api/unknown/23"
    },
    minTimeout: 2000,
    timeout: 5000,
    maxTimeout: 10000,
  };
  
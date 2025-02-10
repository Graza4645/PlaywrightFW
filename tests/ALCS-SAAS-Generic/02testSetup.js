const { test } = require('@playwright/test');
const { BaseClass } = require('./01BaseClass.js');
const CommonData = require('../UtilsData/CommonData.js');

let base;

test.beforeAll(async () => {
  base = new BaseClass();
  await base.initialize();
});

test.beforeEach(async () => {
  await base.page.bringToFront();
  await base.open();
  await base.loginPage.login(CommonData.username, CommonData.password); 
});

test.afterEach(async () => {
  await base.loginPage.logout(); // ✅ 
});

test.afterAll(async () => {
  await base.cleanup();
});

module.exports = { test, base };

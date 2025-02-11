import { test } from '@playwright/test';
import { BaseClass } from './01BaseClass.js';
import CommonData from '../UtilsData/CommonData.js';

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

export { test, base };

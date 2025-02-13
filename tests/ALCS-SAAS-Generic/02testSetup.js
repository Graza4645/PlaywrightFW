// import { test } from '@playwright/test';
// import { BaseClass } from './01BaseClass.js';
// import CommonData from '../UtilsData/CommonData.js';
// import chalk from 'chalk';

// let base;

// test.beforeAll(async () => {
//   base = new BaseClass();
//   await base.initialize();
//   const timestamp = new Date().toLocaleString();

// // Log with green checkmark, bold, and timestamp
// console.log(chalk.green.bold(`✅ Successfully logged in!`), chalk.gray(`[${timestamp}]`));

// });

// test.beforeEach(async () => {
//   await base.page.bringToFront();
//   await base.open();
//   await base.loginPage.login(CommonData.username, CommonData.password); 
// });

// test.afterEach(async () => {
//   await base.loginPage.logout(); 
// });

// test.afterAll(async () => {
//   await base.cleanup();
// });

// export { test, base };






import { test } from '@playwright/test';
import { BaseClass } from './01BaseClass.js';
import CommonData from '../UtilsData/CommonData.js';

let base;

test.beforeAll(async () => {
  base = new BaseClass();
  await base.initialize();
  const timestamp = new Date().toLocaleString();
  console.log(`\x1b[32m\x1b[1m✅ Successfully Initialized and Launched Browser\x1b[0m`,`\x1b[34m[${timestamp}]\x1b[0m`);
  
});

test.beforeEach(async () => {
  await base.page.bringToFront();
  await base.open();
  await base.loginPage.login(CommonData.username, CommonData.password); 
  console.log(`\x1b[32m\x1b[1m✅ Login Successful\x1b[0m - User authenticated and logged in.` );
  
});

test.afterEach(async () => {
  await base.loginPage.logout();
  console.log(`\x1b[32m\x1b[1m✅ Logout Successful\x1b[0m - User has logged out successfully.`);
  
});

test.afterAll(async () => {
  await base.cleanup();
  
});

export { test, base };

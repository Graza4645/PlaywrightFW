// import { test } from '../ALCS-SAAS-Generic/02testSetup.js';
// import { BaseClass } from '../ALCS-SAAS-Generic/01BaseClass.js';
// import { PATH_GET } from '../ALCS-SAAS-Generic/06IConstantPath.js';

// Script-1.test.js
import { test, base } from '../ALCS-SAAS-Generic/02testSetup.js';  // Import test setup

test('Script-1: Validate Page Title', async () => {
    // Call the hello method from the LoginPage class
    await base.eonboarding.commansteps();  // This will print the special characters in the console
    
    // Add other test actions here, such as verifying the page title
   
    // Add assertions or validation logic here
});



  // Ensure eonboarding is ready before calling commansteps
 // This should now show the initialized eonboarding object
  
  // Example to retrieve all data from an Excel file:
  // let all = await base.excelUtility.dataProvider(PATH_GET, "Sheet1");
  // console.table(all);

  // If you are working with a database connection:
  // await base.databaseutility.DBConnection();

  // Test the eonboarding steps
  // await base.eonboarding.commansteps();  // This should now work correctly if eonboarding is initialized





// import { test, expect } from '@playwright/test'; // Import Playwright test utilities
// import EonBoarding from "../ALCS-SAAS-PageObjectModel/Eonboarding.js"; // Import the class

// test('Validate Page Title', async ({ page }) => {
//   // Initialize EonBoarding with the page object
//   const eonboarding = new EonBoarding(page);

//   // Check initialization
//   console.log('EonBoarding Initialized:', eonboarding);

//   // Call the commansteps method
//   await eonboarding.commansteps();
// });















































































// test('Script-2: Check Element Presence', async () => {
//   await base.eonboarding.commansteps();
//   console.log('Script two pass');
// });

// test('Script-3: Click and Verify', async () => {
//   console.log('Script three pass');
// });

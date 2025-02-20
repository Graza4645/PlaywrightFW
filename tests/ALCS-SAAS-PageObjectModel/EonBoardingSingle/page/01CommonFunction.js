// import EonBoardingTestData  from '../../../ALCS-SAAS-Test-Data/EonBoardingTestData.js';
import { test } from '@playwright/test';

export default class CommonFunction {

  constructor(page,data) {
    this.page = page;  
    this.data=data;
    
  }

  #expandSidebar() {
    return this.page.locator("//img[@class='sidebar-module__sidebarCollapseExpandIcon__uS4jx']");
  }

  #selecthiring(){
    return this.page.locator("//p[contains(text(),'Hiring')]");
  }

  #selectsalarycalculator(){
     return this.page.locator("//div[contains(text(),'Salary Calculator')]");
  }
  #selectassociateonboarding(){
    return this.page.locator("//div[contains(text(),'Associate Onboarding')]");
  }

  #selectmode(){
    return this.page.locator("//span[contains(text(),'Mode')]");
  }

  #selectmodevalue(){
    return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.MODE}')]`);
  }


  #selectclient(){
    return this.page.locator("//span[contains(@class,'InputPlaceholder-placeholder') and contains(.,'Select Client')]")
  }

  #selectclientvalue(){
    return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.CLIENT}')]`);
  }

  #selectaddcandidate(){
    return this.page.getByText('+ Add Candidate');
  }


  #selecteonboarding(){
    return this.page.getByRole('menuitem', { name: 'E-Onboarding' });
  }


  async commansteps() {
    
    try{
      await test.step('Expand Side Bar', async () => {
        await this.#expandSidebar().waitFor({ state: 'visible' });  
        await this.#expandSidebar().click(); 
      });
    } catch (error) {
      console.error("❌ Error in Expand side bar :", error.message);
      throw error;
     }
 

    try{
      await test.step('Select hiring ' , async ()=>{
         await this.#selecthiring().waitFor({state: 'visible'});
         await this.#selecthiring().click();
      });
     } catch (error) {
      console.error("❌ Error in Select hiring :", error.message);
      throw error;
     }
  

  try{
    await test.step('Select Associate Onboarding ' , async ()=>{
       await this.#selectsalarycalculator().waitFor({state: 'visible'});
       await this.#selectsalarycalculator().click();
    });
   } catch (error) {
    console.error("❌ Error in Associate Onboarding :", error.message);
    throw error;
   }

   try{
    await test.step('Select hiring ' , async ()=>{
       await this.#selecthiring().waitFor({state: 'visible'});
       await this.#selecthiring().click();
    });
   } catch (error) {
    console.error("❌ Error in Select hiring :", error.message);
    throw error;
   }

try{
  await test.step('Select Associate Onboarding ' , async ()=>{
     await this.#selectassociateonboarding().waitFor({state: 'visible'});
     await this.#selectassociateonboarding().click();
  });
 } catch (error) {
  console.error("❌ Error in Associate Onboarding :", error.message);
  throw error;
 }



   try{
    await test.step('Select Mode ' , async ()=>{
       await this.#selectmode().waitFor({state: 'visible'});
       await this.#selectmode().click();
      
    });
   } catch (error) {
    console.error("❌ Error in Select Mode :", error.message);
    throw error;
   }

   try{
    await test.step('Select Mode Value ' , async ()=>{
       await this.#selectmodevalue().waitFor({state: 'visible'});
       await this.#selectmodevalue().click();
    });
   } catch (error) {
    console.error("❌ Error in Mode Value :", error.message);
    throw error;
   }


   try{
    await test.step('Select Client ' , async ()=>{
       await this.#selectclient().waitFor({state: 'visible'});
       await this.#selectclient().click();
    });
   } catch (error) {
    console.error("❌ Error in Select Client :", error.message);
    throw error;
   }

   try{
    await test.step('Select Client value' , async ()=>{
       await this.#selectclientvalue().waitFor({state: 'visible'});
       await this.#selectclientvalue().click();
    });
   } catch (error) {
    console.error("❌ Error in Client value :", error.message);
    throw error;
   }


   try{
    await test.step('Select ++ Add Candidate ' , async ()=>{
       await this.#selectaddcandidate().waitFor({state: 'visible'});
       await this.#selectaddcandidate().click();
    });
   } catch (error) {
    console.error("❌ Error in ++ Add Candidate :", error.message);
    throw error;
   }


   try{
    await test.step('Select E-OnBoarding' , async ()=>{
       await this.#selecteonboarding().waitFor({state: 'visible'});
       await this.#selecteonboarding().click();
    });
   } catch (error) {
    console.error("❌ Error in E-OnBoarding :", error.message);
    throw error;
   }

   console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Common Function Is Completed \x1b[0m `,`\x1b[34m <<================================\x1b[0m`);


  }
}

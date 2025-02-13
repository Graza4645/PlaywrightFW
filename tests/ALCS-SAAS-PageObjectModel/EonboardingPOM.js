import { EonBoardingTestData } from "../ALCS-SAAS-Test-Data/EonBoardingTestData.js";
import { test } from '@playwright/test';

export default class EonBoarding {

  constructor(page) {
    this.page = page;  
  }

  #expandSidebar() {
    return this.page.locator("//img[@class='sidebar-module__sidebarCollapseExpandIcon__uS4jx']");
  }

  #selecthiring(){
    return this.page.locator("//p[contains(text(),'Hiring')]");
  }

  #selectassociateonboarding(){
    return this.page.locator("//div[contains(text(),'Associate Onboarding')]");
  }

  #selectmode(){
    return this.page.locator("//span[contains(text(),'Mode')]");
  }

  #selectmodevalue(){
    return this.page.locator("//label[contains(@class,'mantine-Radio-label') and contains(.,'Client')]");
  }


  

  async commansteps() {
    try {
      await test.step('Expand Side Bar', async () => {
        await this.#expandSidebar().waitFor({ state: 'visible' });  
        await this.#expandSidebar().click(); 
      });
    } catch (error) {
      console.error("❌ Error in expanding sidebar:", error.message);
      throw error;
    }

    try{
      await test.step('Select hiring ' , async ()=>{
         await this.#selecthiring().waitFor({state: 'visible'});
         await this.#selecthiring().click();
      });
     } catch (error) {
      console.error("❌ Error in expanding sidebar:", error.message);
      throw error;
     }
  

  try{
    await test.step('Select Associate Onboarding ' , async ()=>{
       await this.#selectassociateonboarding().waitFor({state: 'visible'});
       await this.#selectassociateonboarding().click();
    });
   } catch (error) {
    console.error("❌ Error in expanding sidebar:", error.message);
    throw error;
   }

   try{
    await test.step('Select Mode ' , async ()=>{
       await this.#selectmode().waitFor({state: 'visible'});
       await this.#selectmode().click();
    });
   } catch (error) {
    console.error("❌ Error in expanding sidebar:", error.message);
    throw error;
   }

   try{
    await test.step('Select Mode Value ' , async ()=>{
       await this.#selectmodevalue().waitFor({state: 'visible'});
       await this.#selectmodevalue().click();
    });
   } catch (error) {
    console.error("❌ Error in expanding sidebar:", error.message);
    throw error;
   }


  }
}

// import EonBoardingTestData  from '../../../ALCS-SAAS-Test-Data/EonBoardingTestData.js';
import { test } from '@playwright/test';

export default class CommonFunction {

  constructor(page, BasicData, state) {
    this.page = page;  
    this.data=BasicData;
    this.state=state;
    
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


  #selectmode(){
    return this.page.locator("//input[@placeholder='Mode']");
  }

  #selectmodevalue(){
    return this.page.locator(`//div[@value='${this.data.MODE}']`);
  }


  #selectcorp(){
    return this.page.locator("//button[@type='button' and contains(.,'Corporation')]")
  }

  #selectcorpvalue(){
    return this.page.locator(`//div[@value='${this.data.CORP}']`);   //HONEA6
  }

  #selectclient(){
    return this.page.locator("//button[@type='button' and contains(.,'Client')]");
  }


  #selectclientvalue(){
    return this.page.locator(`//div[@role='option' and contains(.,'${this.data.CLIENT}')]`);
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
    await test.step('Select Salary Calculator' , async ()=>{
       await this.#selectsalarycalculator().waitFor({state: 'visible'});
       await this.#selectsalarycalculator().click();
    });
   } catch (error) {
    console.error("❌ Error in Salary Calculator:", error.message);
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
    await test.step('Select Corporation ' , async ()=>{
       await this.#selectcorp().waitFor({state: 'visible'});
       await this.#selectcorp().click();
    });
   } catch (error) {
    console.error("❌ Error in Select Corporation :", error.message);
    throw error;
   }

   try{
    await test.step('Select Corporation value' , async ()=>{
       await this.#selectcorpvalue().waitFor({state: 'visible'});
       await this.#selectcorpvalue().click();
    });
   } catch (error) {
    console.error("❌ Error in Client value :", error.message);
    throw error;
   }


   try{
    await test.step('Select Client  ' , async ()=>{
       await this.#selectclient().waitFor({state: 'visible'});
       await this.#selectclient().click();
    });
   } catch (error) {
    console.error("❌ Error in select client :", error.message);
    throw error;
   }


   try{
    await test.step('Select Client value' , async ()=>{
       await this.#selectclientvalue().waitFor({state: 'visible'});
       await this.#selectclientvalue().click();
    });
   } catch (error) {
    console.error("❌ Error in select client value :", error.message);
    throw error;
   }



   console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Common Function Is Completed \x1b[0m `,`\x1b[34m <<================================\x1b[0m`);


  }
}

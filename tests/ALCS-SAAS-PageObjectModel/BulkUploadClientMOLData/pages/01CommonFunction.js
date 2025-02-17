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

  #checkall(){
    return this.page.getByLabel('Select all rows');
  }


  #cancelOfferletter(){
    return this.page.getByText('Cancel Offer Letters');
  }

#count(){
  return this.page.locator("//div[@class='CustomTable-module__count__YFbML']");
}

#actionbutton(){
  return this.page.locator("//img[@class='CustomTable-module__image__uVDvD']");
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
        await test.step('Select/Check all for cancell all offer letter ', async() =>{
            const checkall = await this.#checkall();
            const canceloffer = await this.#cancelOfferletter();
            await canceloffer.waitFor({ state : "visible"});
            while (true) {
              const count =await this.#count();
              await count.waitFor({state : "visible"});
              const currentcount=await count.textContent();
                if(parseInt(currentcount) != 0){
                    await page.waitForTimeout(500);
                   try {
                     await checkall.waitFor( {state : "visible"} );
                     await checkall.check();
                     await page.waitForTimeout(500);
                
                       } catch (error) {
                          break;
                      }
            
              if (await canceloffer.isVisible()) {
                await canceloffer.waitFor( {state : "visible"});
                await canceloffer.click(); 
                await page.waitForTimeout(500);
              } else {
                await page.waitForTimeout(500);
                const actions=await this.#actionbutton();
                await actions.waitFor( {state : "visible"} );
                await actions.click();
                await canceloffer.waitFor( {state : "visible"});
                await canceloffer.click(); 
                break;
              }
            }else{
                break;
            }
        }
            



        });

   }catch(error){
     console.error('❌ Error in Select/Check all for cancell all offer letter', error.message)
     throw error;
   }

   console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Common Function and all the offer letter has been cancelled  \x1b[0m `,`\x1b[34m <<================================\x1b[0m`);


  }
}

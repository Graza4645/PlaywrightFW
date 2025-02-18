import {test,base} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class CoreDetails{

    constructor(page, BasicData, states){
        this.page = page;
        this.data = BasicData;
        this.states = states;
    }

    #clickonbreakupcode(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Breakup Code')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectbreakupcode(){
        return this.page.locator(`//span[contains(text(),'${this.data.BREAKUPCODE}')]`);
    }

    #clickonstate(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'State')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectstate(){
        return this.page.locator(`//span[contains(text(),'${this.data.STATE}')]`);
    }

    #clickonindustrytype(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Industry Type')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectindustrytype(){
        return this.page.locator(`//span[contains(text(),'${this.data.INDUSTRYTYPE}')]`).nth(1);
    }

    #clickonzone(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Zone')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectzone(){
        return this.page.locator(`//span[contains(text(),'${this.data.ZONE}')]`);
    }

  
   async coredetails(){
    try{
        await test.step('Click on BreakUp Code ', async()=>{
               const breakup = this.#clickonbreakupcode();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on BreakUp Code ', error.message)
        throw error;
    }

    try{
        await test.step('Select BreakUp Code value', async()=>{
               const breakup = this.#selectbreakupcode();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Select BreakUp Code value', error.message)
        throw error;
    }
  


    try{
        await test.step('Click on state ', async()=>{
               const breakup = this.#clickonstate();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on state', error.message)
        throw error;
    }

    try{
        await test.step('Select state value', async()=>{
               const breakup = this.#selectstate();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Select state value', error.message)
        throw error;
    }
  

    try{
        await test.step('Click on industry type ', async()=>{
               const breakup = this.#clickonindustrytype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on industry type ', error.message)
        throw error;
    }

    try{
        await test.step('Select industry type value ', async()=>{
               const breakup = this.#selectindustrytype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in industry type value ', error.message)
        throw error;
    }
  

    try{
        await test.step('Click on Zone ', async()=>{
               const breakup = this.#clickonzone();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on Zone', error.message)
        throw error;
    }

    try{
        await test.step('Select Zone value ', async()=>{
               const breakup = this.#selectzone();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in select Zone value ', error.message)
        throw error;
    }
  









}

   

}
import {test,base} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class CoreDetails{

  
    constructor(page, BasicData, state) {
        this.page = page;  
        this.data=BasicData;
        this.state=state;
        
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
        return this.page.locator(`//span[contains(text(),'${this.state}')]`);
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
            const xpath = "(//div[@class='m_38a85659 mantine-Popover-dropdown m_88b62a41 mantine-Select-dropdown'])[4]//descendant::div[@class='m_92253aa5 mantine-Select-option m_390b5f4']";

            // Get the elements matching the XPath
            const elements = await this.page.locator(xpath);
            await this.page.waitForTimeout(2000);
            // Extract the text content from all elements
            const textContents = await elements.allTextContents();
            await this.page.waitForTimeout(2000);
            // Print the list of text contents
            console.log(textContents);
            //    const breakup = this.#selectindustrytype();
            //    await breakup.waitFor( {state : "visible"} );
            //    await breakup.click();
            
            
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
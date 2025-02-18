import {test,base} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class JobInformation{

    constructor(page, BasicData, states){
        this.page = page;
        this.data = BasicData;
        this.states = states;
    }

    #clickonjobcategory(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Job Category')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectjobcategoryvalue(){
        return this.page.locator(`//div[@value='552']`);
    }

    #clickonjoblocation(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Job Location')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectjoblocationvalue(){
        return this.page.locator(`//span[contains(text(),'${this.data.JOBLOCATION}')]`);
    }

  



  
   async jobinformation(){
    try{
        await test.step('Click on jobcategory ', async()=>{
               const breakup = this.#clickonjobcategory();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on Jobcategory ', error.message)
        throw error;
    }

    try{
        await test.step('Select Job Category Value', async()=>{
               const breakup = this.#selectjobcategoryvalue();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Select Job Category Value', error.message)
        throw error;
    }
  


    try{
        await test.step('Click on Job Location ', async()=>{
               const breakup = this.#clickonjoblocation();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on Job Location ', error.message)
        throw error;
    }

    try{
        await test.step('Select Job Location Value', async()=>{
               const breakup = this.#selectjoblocationvalue();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
            // await this.page.locator(`//span[contains(text(),'Unskilled')]`).click();
        });
    }catch(error){
        console.error('❌ Error in Select Job Location Value', error.message)
        throw error;
    }
  



   }
}
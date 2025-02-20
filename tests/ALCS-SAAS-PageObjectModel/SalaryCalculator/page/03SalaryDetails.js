import {test,base} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class SalaryDetails{

 
    constructor(page, BasicData, state) {
        this.page = page;  
        this.data=BasicData;
        this.state=state;
        
      }

    #clickonsalarytype(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Salary Type')]/descendant::input[@aria-haspopup='listbox']");
    }

    #selectsalarytype(){
        return  this.page.getByRole('option', { name: this.data.SALARYTYPE });
    }

    #clickonminimumwage(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Compare Minimum Wage With')]/descendant::input[@aria-haspopup='listbox']");
       
    }

    #selectminimumwagevalue(){
        return this.page.locator(`//div[@value='${this.data.COMPAREMINIMUMWAGEWITH}']`);
    }

  #fillsalary(){
    return this.page.locator("//label[contains(@class,'mantine-TextInput-label') and contains(.,'Salary')]/following-sibling::div/input");
               
  }



  
   async salarydetails(){
    try{
        await test.step('Click On Salary Type ', async()=>{
               const breakup = this.#clickonsalarytype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click On Salary Type', error.message)
        throw error;
    }

    try{
        await test.step('Select Salary Type  Value', async()=>{
               const breakup = this.#selectsalarytype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Select Salary Type Value', error.message)
        throw error;
    }
  


    try{
        await test.step('Click on Compare with Minimum Wage', async()=>{
               const breakup = this.#clickonminimumwage();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on Compare with Minimum Wage ', error.message)
        throw error;
    }

    try{
        await test.step('Select Minimum Wage Value', async()=>{
               const breakup = this.#selectminimumwagevalue();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
            
        });
    }catch(error){
        console.error('❌ Error in Select Minimum Wage Value', error.message)
        throw error;
    }

    // try{
    //     await test.step('Filling Salary ', async()=>{
    //            const breakup = this.#fillsalary();
    //            await breakup.waitFor( {state : "visible"} );
    //            await breakup.fill("7500")
            
    //     });
    // }catch(error){
    //     console.error('❌ Error in Filling Salary', error.message)
    //     throw error;
    // }
  



   }

}
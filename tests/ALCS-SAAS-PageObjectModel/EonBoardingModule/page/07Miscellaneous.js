import { test, expect } from '@playwright/test';

export default class  Miscellaneous{
  constructor(page, data) {
    this.page = page;
    this.data = data;
  }

  /**
   * @returns Locator for the checkmark indicating personal details are completed
   */
  #signup01() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Miscellaneous')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-check')]");
  }

  /**
   * @returns Locator for the cross mark indicating personal details are not completed
   */
  #signup02() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Miscellaneous')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-x')]");
  }

  /**
   * @param {string} fieldname 
   * @returns Locator for field validation messages
   */
  #fieldValidationxpath(fieldname) {
    return this.page.locator(`//label[contains(@class,'mantine-InputWrapper-label') and contains(.,'${fieldname}')]/following-sibling::p`);
  }

  /**
   * Function to check if an error message is displayed for a field
   * @param {string} fieldname 
   */
  async fieldValidationmethod(fieldname) {
    try {
      const locator = this.#fieldValidationxpath(fieldname);
      const errorValidationCount = await locator.count();

      if (errorValidationCount > 0) {
        const errorValidation = await locator.textContent();
        console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 ${errorValidation} \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
      }
    } catch (error) {
      console.error("❌ Error during field validation:", error.message);
    }
  }





  /**
   * @param {string} value 
   * @returns Locator for mandatory field labels
   */
  #checkMandatory(value) {
    return this.page.locator(`//label[contains(@class,'mantine-InputWrapper-label') and contains(.,'${value}')]`);
  }

  
#clickonOLTrigger(){
    return this.page.locator("//label[text()='OL Trigger']/following-sibling::div/button");
            }#selectOLTrigger(){
                 return  this.page.getByText(`${this.data.ASSOCIATE_OL_TRIGGER}`, { exact : true });
                      }   

                            
#OlReceivername(){
   return  this.page.locator("//label[text()='Soft Copy OL Receiver Name']/following-sibling::div/input")
}


#olreceiveremailid(){
    return this.page.locator("//input[@placeholder='Enter Emails']");
}
 
#finish(){
    return this.page.getByText('Finish', {exact : true});
   }

async MiscellaneousM() {
    try {
        await test.step("Fill Associate OL Trigger", async () => {
          const value = "OL Trigger";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Associate_OL_Trigger = await mandatoryField.textContent();
          if (Associate_OL_Trigger.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.#clickonOLTrigger().click();
            await this.#selectOLTrigger().click();
          }
        });
      } catch (error) {
        console.error("❌ Error in Associate OL Trigger :", error.message);
        throw error;
      }
  



      try {
        await test.step("Fill Salary_Type", async () => {
          const value = "Soft Copy OL Receiver Name";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          const Soft_Copy_OL_Receiver_Name = await mandatoryField.textContent();
        
    if (Soft_Copy_OL_Receiver_Name.includes('*') || this.data.MANDATORY == 'NO' ) {
      await this.#OlReceivername().fill('Sallu');

  }
        });
      } catch (error) {
        console.error("❌ Error in Soft Copy OL Receiver Name:", error.message);
        throw error;
      }
      


      try {
        await test.step("Fill Soft Copy OL Receiver Email ID", async () => {
          const value = "Soft Copy OL Receiver Email ID";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Soft_Copy_OL_Receiver_Email_ID = await mandatoryField.textContent();
           if (Soft_Copy_OL_Receiver_Email_ID.includes('*') || this.data.MANDATORY == 'NO' ) {
          await this.#olreceiveremailid().fill('dfghj260@gmail.com')
         }
        });
      } catch (error) {
        console.error("❌ Error Soft Copy OL Receiver Email ID", error.message);
        throw error;
      }
      

    
      const finishButton = await this.#finish();

      if (await finishButton.isEnabled()) {
          try {
              await finishButton.click();
          } catch (error) {
              console.error('❌ Error Finish Button in Miscellaneous:', error.message);
              throw error;
          }
      } else {
          console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Not Generated \x1b[0m`, `\x1b[34m <<================================\x1b[0m`);
          
        }
      
       


    try {
        const checkMark = this.#signup01();
        if (await checkMark.count() > 0) { 
          const checkClass = await checkMark.getAttribute('class') || ''; 
          if (checkClass.includes('tabler-icon-check')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Miscellaneous is Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        }
      } catch (error) {
        console.error('❌ Error while checking completion mark:', error.message);
      }
  
      
      try {
        const crossMark = this.#signup02();
        if (await crossMark.count() > 0) { 
          const checkClass = await crossMark.getAttribute('class') || '';
          if (checkClass.includes('tabler-icon-x')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Miscellaneous is Not Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        } 
      } catch (error) {
        console.error('❌ Error while checking failure mark:', error.message);
      }
    
    




}

}

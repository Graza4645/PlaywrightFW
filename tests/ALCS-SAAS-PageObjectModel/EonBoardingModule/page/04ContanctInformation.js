import { test, expect } from '@playwright/test';

export default class ContanctInformation {
  constructor(page, data) {
    this.page = page;
    this.data = data;
  }

  /**
   * @returns Locator for the checkmark indicating personal details are completed
   */
  #signup01() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Contact')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-check')]");
  }

  /**
   * @returns Locator for the cross mark indicating personal details are not completed
   */
  #signup02() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Contact')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-x')]");
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



  #mobilenumber(){
   return  this.page.locator("//label[contains(text(),'Mobile Number')]/following-sibling::div/input");
}

  #emailid(){
    return this.page.locator("//label[contains(text(),'Email ID')]/following-sibling::div/input");

  }

  #emergencynumber(){
   return  this.page.locator("//label[text()='Emergency No']/following-sibling::div/input");
  }


async ContactInformation() {
    try {
        await test.step("Fill Mobile Number", async () => {
          const value = "Mobile Number";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const mobileLabel = await mandatoryField.textContent();
          if (mobileLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#mobilenumber().fill(`${this.data.MOBILE_NUMBER}`);
            await this.fieldValidationmethod(mobileLabel);
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Mobile Number':", error.message);
        throw error;
      }
  
      try {
        await test.step("Fill Email ID", async () => {
          const value = "Email ID";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
  
          const emailLabel = await mandatoryField.textContent();
          if (emailLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#emailid().fill(`${this.data.EMAIL_ID}`);
            await this.fieldValidationmethod(emailLabel);
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Email ID':", error.message);
        throw error;
      }
  
      try {
        await test.step("Fill Emergency No", async () => {
          const value = "Emergency No";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
  
          const emergencyLabel = await mandatoryField.textContent();
          if (emergencyLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#emergencynumber().fill(`${this.data.ASSOCIATE_EMERGENCY_NO}`);
            await this.fieldValidationmethod(emergencyLabel);
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Emergency No':", error.message);
        throw error;
      }


    await this.page.getByText('Next').click();

    try {
        const checkMark = this.#signup01();
        if (await checkMark.count() > 0) { 
          const checkClass = await checkMark.getAttribute('class') || ''; 
          if (checkClass.includes('tabler-icon-check')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Contact Information is Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
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
            console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Contact Information is Not Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        } 
      } catch (error) {
        console.error('❌ Error while checking failure mark:', error.message);
      }
    
    




}

}

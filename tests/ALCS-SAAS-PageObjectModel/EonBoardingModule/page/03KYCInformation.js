import { test, expect } from '@playwright/test';

export default class KYCInformation {
  constructor(page, data) {
    this.page = page;
    this.data = data;
  }

  /**
   * @returns Locator for the checkmark indicating personal details are completed
   */
  #signup01() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Per')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-check')]");
  }

  /**
   * @returns Locator for the cross mark indicating personal details are not completed
   */
  #signup02() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Per')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-x')]");
  }

  /**
   * @param {string} fieldname 
   * @returns Locator for field validation messages
   */
  #fieldValidation(fieldname) {
    return this.page.locator(`//label[contains(@class,'mantine-InputWrapper-label') and contains(.,'${fieldname}')]/following-sibling::p`);
  }

  /**
   * Function to check if an error message is displayed for a field
   * @param {string} fieldname 
   */
  async fieldValidation(fieldname) {
    try {
      const locator = this.#fieldValidation(fieldname);
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



  #adharnumber(){
      return this.page.locator("//label[contains(text(),'Aadhaar')]/following-sibling::div/input")
  }

  #pannumber(){
    return this.page.locator("//label[contains(text(),'PAN')]/following-sibling::div/input");
  }
async KYCInformation() {
    try {
        await test.step("Fill Aadhaar Number", async () => {
            const value = 'Aadhaar No'
            const mandatoryField = await this.#checkMandatory(value);
            await mandatoryField.waitFor({ state: "visible" });

            const aadharLabel = await mandatoryField.textContent();
            if (aadharLabel?.includes("*") || this.data.MANDATORY === "NO") {
                await this.#adharnumber().fill(`${this.data.AADHAR_NUMBER}`);
                await this.validation(aadharLabel);
            }
        });
    } catch (error) {
        console.error("❌ Error in 'Fill Aadhaar Number':", error.message);
        throw error;
    }

    try {
        await test.step("Fill PAN Number", async () => {
            const value = "PAN No";
            const mandatoryField = await this.#checkMandatory(value);
            await mandatoryField.waitFor({ state: "visible" });

            const panLabel = await mandatoryField.textContent();
            if (panLabel?.includes("*") || this.data.MANDATORY === "NO") {
                await this.page.locator("//label[contains(text(),'PAN')]/following-sibling::div/input")
                    .fill(`${this.data.PAN_NUMBER}`);
                await this.validation(panLabel);
            }
        });
    } catch (error) {
        console.error("❌ Error in 'Fill PAN Number':", error.message);
        throw error;
    }

    try {
        await test.step("Fill Account Number", async () => {
            const value = "Account Number";
            const mandatoryField = await this.#checkMandatory(value);
            await mandatoryField.waitFor({ state: "visible" });

            const accountLabel = await mandatoryField.textContent();
            if (accountLabel?.includes("*") || this.data.MANDATORY === "NO") {
                await this.page.locator("//label[contains(text(),'Account Number')]/following-sibling::div/input")
                    .fill(`${this.data.ACCOUNT_NUMBER}`);
                await this.validation(accountLabel);
            }
        });
    } catch (error) {
        console.error("❌ Error in 'Fill Account Number':", error.message);
        throw error;
    }

    try {
        await test.step("Fill IFSC Code", async () => {
            const value = "IFSC Code";
            const mandatoryField = await this.#checkMandatory(value);
            await mandatoryField.waitFor({ state: "visible" });

            const ifscLabel = await mandatoryField.textContent();
            if (ifscLabel?.includes("*") || this.data.MANDATORY === "NO") {
                await this.page.locator("//label[contains(text(),'IFSC Code')]/following-sibling::div/button").click();
                await this.page.getByPlaceholder("Search IFSC Code").fill(`${this.data.IFSC_CODE}`);
                await this.page.getByText(`${this.data.IFSC_CODE}`).click();
            }
        });
    } catch (error) {
        console.error("❌ Error in 'Fill IFSC Code':", error.message);
        throw error;
    }





    try {
        const checkMark = this.#signup01();
        if (await checkMark.count() > 0) { 
          const checkClass = await checkMark.getAttribute('class') || ''; 
          if (checkClass.includes('tabler-icon-check')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Personal Details is Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
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
            console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Personal Details is NOT Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        } 
      } catch (error) {
        console.error('❌ Error while checking failure mark:', error.message);
      }
    
    




}

}

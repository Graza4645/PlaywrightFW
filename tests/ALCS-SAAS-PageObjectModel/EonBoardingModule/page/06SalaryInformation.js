import { test, expect } from '@playwright/test';

export default class  SalaryInformation{
  constructor(page, data) {
    this.page = page;
    this.data = data;
  }

  /**
   * @returns Locator for the checkmark indicating personal details are completed
   */
  #signup01() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Salary')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-check')]");
  }

  /**
   * @returns Locator for the cross mark indicating personal details are not completed
   */
  #signup02() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Salary')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-x')]");
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



  #clickondesignation(){
   return this.page.locator("//label[text()='Designation']/following-sibling::div/button")
         }#searchdesignation(){
                    return this.page.locator("//input[@placeholder='Search Designation']")
                       }#selectdesignation(){
                                    return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.DESIGNATION}')]`);
                                   }



#clickonstate(){
return this.page.locator("//label[text()='State']/following-sibling::div/button");
        }#searchstate(){
                    return this.page.locator("//input[@placeholder='Search State']")
                    }#selectstate(){
                                    return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.STATE}')]`);
                                }


#clickonIndustry(){
    return this.page.locator("//label[text()='Industry Type']/following-sibling::div/button");
            }#searchIndustry(){
                        return this.page.locator("//input[@placeholder='Search Industry Type']")
                        }#selectIndustry(){
                                        return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.INDUSTRY_TYPE}')]`);
                                    }                              


#clickonJobLocation(){
    return this.page.locator("//label[text()='Job Location']/following-sibling::div/button");
            }#searchJobLocation(){
                        return this.page.locator("//input[@placeholder='Search Job Location']")
                        }#selectJobLocation(){
                                        return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.JOB_LOCATION}')]`);
                                    }                              
    
                                    
#clickonZone(){
    return this.page.locator("//label[text()='Zone']/following-sibling::div/button");
            }#selectZone(){
                 return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.ZONE}')]`);
                      }   

                            
#clickonJobCategory(){
return this.page.locator("//label[text()='Job Category']/following-sibling::div/button");
        }#searchJobCategory(){
            return this.page.locator("//input[@placeholder='Search Job Category']")
            }
        #selectJobCategory(){
                return  this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'${this.data.JOB_CATEGORY}')]`);
                    }                              
            

#reportingmanageremail(){
    return this.page.locator("//label[text()='Reporting Manager Email ID']/following-sibling::div/input")
}


#reportingmanagername(){
    return this.page.locator("//label[text()='Reporting Manager Name']/following-sibling::div/input")
}
 //JobCategory                     
async Salaryinformation() {
    try {
        await test.step("Fill Breakup ID", async () => {
          const value = "Breakup ID";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Pay_Element_Group = await mandatoryField.textContent();
          if (Pay_Element_Group.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.page.locator("//label[text()='Breakup ID']/following-sibling::div/button").click();
            await this.page.locator(`//label[@class="m_8ee546b8 mantine-Radio-label" and contains(.,'salary')]`).click();
        }
        });
      } catch (error) {
        console.error("❌ Error in Breakup ID :", error.message);
        throw error;
      }
  
      try {
        await test.step("Fill Salary_Type", async () => {
          const value = "Salary Type (CTC/Gross/Net)";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Salary_Type = await mandatoryField.textContent();
          if (Salary_Type.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.page.locator("//label[text()='Salary Type (CTC/Gross/Net)']/following-sibling::div/button").click();
            await this.page.locator(`//label[contains(text(),'${this.data.SALARY_TYPE}')]`).nth(1).click();
            
        }
        });
      } catch (error) {
        console.error("❌ Error in Salary Type (CTC/Gross/Net) :", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill Template ID", async () => {
          const value = "Template ID";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Template_ID = await mandatoryField.textContent();
          if (Template_ID.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.page.locator("//label[text()='Template ID']/following-sibling::div/button").click();
            await this.page.locator(`//label[contains(text(),'${this.data.REQUIREMENT_ID}')]`).click();  
        } 
        });
      } catch (error) {
        console.error("❌ Error in Template_ID", error.message);
        throw error;
      }
      


      try {
        await test.step("Fill Salary Per Month", async () => {
          const value = "Salary Per Month";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Salary_Per_Month = await mandatoryField.textContent();
           if (Salary_Per_Month.includes('*') || this.data.MANDATORY == 'NO' ) {
              await this.page.locator("//label[text()='Salary Per Month']/following-sibling::div/input").fill(`${this.data.SALARY_PER_MONTH}`);
             
          }
        });
      } catch (error) {
        console.error("❌ Error in Salary Per Month", error.message);
        throw error;
      }
      
      try {
        await test.step("Select Cap", async () => {
          if(this.data.CAP == 'YES'){
            await this.page.locator("//input[@type='checkbox']/parent::label").click();
        }
        });
      } catch (error) {
        console.error("❌ Error in Cap:", error.message);
        throw error;
      }
      
    await this.page.getByText('Next').click();

    try {
        const checkMark = this.#signup01();
        if (await checkMark.count() > 0) { 
          const checkClass = await checkMark.getAttribute('class') || ''; 
          if (checkClass.includes('tabler-icon-check')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Salary Details is Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
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
            console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Salary Details is Not Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        } 
      } catch (error) {
        console.error('❌ Error while checking failure mark:', error.message);
      }
    
    




}

}

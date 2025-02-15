import { test, expect } from '@playwright/test';

export default class EmploymentDetails {
  constructor(page, data) {
    this.page = page;
    this.data = data;
  }

  /**
   * @returns Locator for the checkmark indicating personal details are completed
   */
  #signup01() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Employment')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-check')]");
  }

  /**
   * @returns Locator for the cross mark indicating personal details are not completed
   */
  #signup02() {
    return this.page.locator("//button[contains(@class,'mantine-focus-auto') and contains(.,'Employment')]/descendant::*[name()='svg'][contains(@class,'tabler-icon-x')]");
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
async employmentDetails() {
    try {
        await test.step("Fill Designation", async () => {
          const value = "Designation";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const designationLabel = await mandatoryField.textContent();
          if (designationLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickondesignation().click();
            await this.#searchdesignation().fill(`${this.data.DESIGNATION}`);
            await this.#selectdesignation().nth(1).click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Designation':", error.message);
        throw error;
      }
  
      try {
        await test.step("Fill State", async () => {
          const value = "State";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const stateLabel = await mandatoryField.textContent();
          if (stateLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickonstate().click();
            await this.#searchstate().fill(`${this.data.STATE}`);
            await this.#selectstate().click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill State':", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill Industry Type", async () => {
          const value = "Industry Type";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const industryLabel = await mandatoryField.textContent();
          if (industryLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickonIndustry().click();
            await this.#searchIndustry().fill(`${this.data.INDUSTRY_TYPE}`);
            await this.#selectIndustry().click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Industry Type':", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill Job Location", async () => {
          const value = "Job Location";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const jobLocationLabel = await mandatoryField.textContent();
          if (jobLocationLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickonJobLocation().click();
            await this.#searchJobLocation().fill(`${this.data.JOB_LOCATION}`);
            await this.#selectJobLocation().nth(1).click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Job Location':", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill Zone", async () => {
          const value = "Zone";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const zoneLabel = await mandatoryField.textContent();
          if (zoneLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickonZone().click();
            await this.#selectZone().click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Zone':", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill JobCategory", async () => {
          const value = "Job Category";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const jobCategoryLabel = await mandatoryField.textContent();
          if (jobCategoryLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#clickonJobCategory().click();
            await this.#searchJobCategory().fill(`${this.data.JOB_CATEGORY}`);
            await this.#selectJobCategory().nth(1).click();
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Job Category':", error.message);
        throw error;
      }
      

      try {
        await test.step("Fill Contract From(DOJ)", async () => {
          const value = "Contract From(DOJ)";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Contract_FromDOJ = await mandatoryField.textContent();
          if (Contract_FromDOJ.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.page.locator("//div[@class='m_46b77525 mantine-InputWrapper-root mantine-DateInput-root' and contains(.,'Contract From')]/child::div/input").click();
            const headerDate = await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']");
            await headerDate.click();
            let actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
            // console.log(actualYear,'---------------------------------');
            while (actualYear !== this.data.CONTRACT_FROMDOJ.EXPECTEDYEAR) {
                const prevButton = await this.page.locator("//button[@data-direction='previous']");
                await prevButton.click();
                actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
      
            }
    
    
    
            await this.page.getByText(`${this.data.CONTRACT_FROMDOJ.EXPECTEDMONTH}`, { exact: true }).click();
            await this.page.getByText(`${this.data.CONTRACT_FROMDOJ.EXPECTEDDATE}`, { exact: true }).click();
        }
        });
      } catch (error) {
        console.error("❌ Error in  Contract From(DOJ):", error.message);
        throw error;
      }



      try {
        await test.step("Fill Contract End Date", async () => {
          const value = "Contract End Date";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const Contract_End_Date = await mandatoryField.textContent();
          if (Contract_End_Date.includes('*') || this.data.MANDATORY == 'NO' ) {
            await this.page.locator("//div[@class='m_46b77525 mantine-InputWrapper-root mantine-DateInput-root' and contains(.,'Contract End')]/child::div/input").click();
            const headerDate = await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']");
            await headerDate.click();
            let actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
            while (actualYear !== this.data.CONTRACT_END_DATE.EXPECTEDYEAR) {
                const prevButton = await this.page.locator("//button[@data-direction='previous']");
                await prevButton.click();
                actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
      
            }
            await this.page.getByText(`${this.data.CONTRACT_END_DATE.EXPECTEDMONTH}`, { exact: true }).click();
            await this.page.getByText(`${this.data.CONTRACT_END_DATE.EXPECTEDDATE}`, { exact: true }).click();
        }
    
        });
      } catch (error) {
        console.error("❌ Error in Contract End Date", error.message);
        throw error;
      }


      try {
        await test.step("Fill Reporting Manager Email ID", async () => {
          const value = "Reporting Manager Email ID";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const managerEmailLabel = await mandatoryField.textContent();
          if (managerEmailLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#reportingmanageremail().fill(`${this.data.REPORTING_MANAGER_EMAIL_ID}`);
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Reporting Manager Email ID':", error.message);
        throw error;
      }
      
      try {
        await test.step("Fill Reporting Manager Name", async () => {
          const value = "Reporting Manager Name";
          const mandatoryField = await this.#checkMandatory(value);
          await mandatoryField.waitFor({ state: "visible" });
          
          const managerNameLabel = await mandatoryField.textContent();
          if (managerNameLabel?.includes("*") || this.data.MANDATORY === "NO") {
            await this.#reportingmanagername().fill(`${this.data.REPORTING_MANAGER_NAME}`);
          }
        });
      } catch (error) {
        console.error("❌ Error in 'Fill Reporting Manager Name':", error.message);
        throw error;
      }
  
  

    await this.page.getByText('Next').click();

    try {
        const checkMark = this.#signup01();
        if (await checkMark.count() > 0) { 
          const checkClass = await checkMark.getAttribute('class') || ''; 
          if (checkClass.includes('tabler-icon-check')) {
            console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Employment Details is Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
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
            console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Employment Details is Not Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
          }
        } 
      } catch (error) {
        console.error('❌ Error while checking failure mark:', error.message);
      }
    
    




}

}

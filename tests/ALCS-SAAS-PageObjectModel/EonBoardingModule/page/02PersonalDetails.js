import { test, expect } from '@playwright/test';

export default class PersonalDetails {
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

  #adharname(){
   return this.page.getByPlaceholder('Enter Name');
  }

  #clickgender(){
   return this.page.getByText('Select Gender', { exact: true });
  }

  #selectgendervalue(){
   return this.page.getByText(`${this.data.GENDER}` , { exact: true });
  }


  #speciallyabled(){
   return this.page.locator("//input[@type='checkbox']/parent::label");
  }

  async PersonalDetails() {
    try {
      await test.step('Fill Associate Name as per Aadhar ID', async () => {
        let value = 'Associate Name as per Aadhar ID';
        const mandatoryField = this.#checkMandatory(value);
        await mandatoryField.waitFor({ state: 'visible' });

        const MName = await mandatoryField.textContent();
        if (MName?.includes('*') || this.data.MANDATORY === 'NO') {
          await this.#adharname().fill(`${this.data.NAME}`);
          await this.fieldValidationmethod(MName);
        }
      });
    } catch (error) {
      console.error("❌ Error in 'Fill Associate Name as per Aadhar ID':", error.message);
      throw error;
    }



    try {
      await test.step('Select gender', async () => { 
        let value = 'Gender';
        const mandatoryField = this.#checkMandatory(value);
        await mandatoryField.waitFor({ state: 'visible' });
        const MGender = await mandatoryField.textContent();
        if (MGender?.includes('*') || this.data.MANDATORY === 'NO') {
          await this.#clickgender().click();
          await this.#selectgendervalue().click();
          await this.fieldValidationmethod(MGender);
        }
      });
    } catch (error) {
      console.error("❌ Error in 'Select gender':", error.message);
      throw error;
    }



    try {
      await test.step('Select Date of Birth', async () => { 
        let value = 'Date of Birth';
        const mandatoryField = this.#checkMandatory(value);
        await mandatoryField.waitFor({ state: 'visible' });

        const MDOB = await mandatoryField.textContent();
        if (MDOB?.includes('*') || this.data.MANDATORY === 'NO') {
         await this.page.locator("//input[@class='m_8fb7ebe7 mantine-Input-input mantine-DateInput-input']").click();
         const headerDate = await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']");
         await headerDate.click();
         let actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
         await this.page.waitForTimeout(500);
         while (actualYear !== this.data.EXPECTED_YEAR) {
             const prevButton = await this.page.locator("//button[@data-direction='previous']");
             await prevButton.click();
             actualYear =  await this.page.locator("//button[@class='mantine-focus-auto m_f6645d97 mantine-DateInput-calendarHeaderLevel m_87cf2631 mantine-UnstyledButton-root']").textContent();
   
         }
         await this.page.getByText(`${this.data.EXPECTED_MONTH}`, { exact: true }).click();
         await this.page.getByText(`${this.data.EXPECTED_DATE}`, { exact: true }).click();
         
          await this.fieldValidationmethod(MDOB);
        }
      });
    } catch (error) {
      console.error("❌ Error in 'Select Data Of Birth ':", error.message);
      throw error;
    }

 

    try {
      await test.step('Select SPECIALLY_ABLED', async () => { 
         if(this.data.SPECIALLY_ABLED == 'YES'){
            await this.#speciallyabled().click();
          }else{
            console.log('❌  Not Selected SPECIALLY ABLED')
          }
      });
    } catch (error) {
      console.error("❌ Error in 'SPECIALLY ABLED:", error.message);
      throw error;
    }

    await this.page.getByText('Next').click();

   
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
          console.log(`\x1b[34m================================>>  \x1b[0m`,`\x1b[31m🔴 Personal Details is Not Completed \x1b[0m`,`\x1b[34m <<================================\x1b[0m`);
        }
      } 
    } catch (error) {
      console.error('❌ Error while checking failure mark:', error.message);
    }
  
  
  
   
   
   
   
   
   
   
   }




} 

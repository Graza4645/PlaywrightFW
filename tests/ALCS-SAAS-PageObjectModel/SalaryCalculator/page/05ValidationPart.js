import { test } from '@playwright/test';
import fs from 'fs';
import { base } from '../../../ALCS-SAAS-Generic/02testSetup.js';

export default class ValidationPart {
 
  constructor(page, BasicData, state) {
    this.page = page;  
    this.data=BasicData;
    this.state=state;
    
  }

    #fillsalary() {
        return this.page.locator("//label[contains(@class,'mantine-TextInput-label') and contains(.,'Salary')]/following-sibling::div/input");
    }

    #submit() {
        return this.page.locator("//span[text()='Submit']");
    }

    #toastmessage() {
        return this.page.locator("//div[contains(@class,'mantine-Notification-title')]").first();
    }

    #takeamountfromdisplayed() {
        return this.page.locator('//div[@class="SalaryTable-module__min-wage-warning__VIN69"]');
    }

    #key() {
        return this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr/td[2]");
    }

    #value() {
        return this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr/td[3]");
    }

    async validation01() {
        try {
            await test.step('Fill salary from Validation Part', async () => {
                const salaryValue = this.#fillsalary();

                for (let i = this.data.START; i <= this.data.END; i++) {
                    await salaryValue.waitFor({ state: "visible" });
                    await salaryValue.clear();
                    await salaryValue.waitFor({ state: "visible" });
                    await salaryValue.fill(i.toString());
                    await this.page.waitForTimeout(500);

                    const submit = await this.#submit();
                    await submit.waitFor({ state: "visible" });
                    await submit.click();

                    const toast = await this.#toastmessage();
                    await toast.waitFor({ state: "visible" });
                    const message = await toast.textContent();

                    if (message == 'Error') {
                        const take = await this.#takeamountfromdisplayed();
                        await take.waitFor({ state: "visible" });
                        const takeValue = await take.textContent();
                        const match = takeValue.match(/\d+$/);

                        if (match) {
                            let lastNumber = parseInt(match[0], 10);
                            lastNumber += i;

                            const paisa = await this.#fillsalary();
                            await paisa.clear();
                            await paisa.fill(lastNumber.toString());
                            await this.page.waitForTimeout(500);

                            await (await this.#submit()).click();
                            await this.ctcgrossnetpay();
                        }
                    } else if (message == 'Success') {
                        await this.ctcgrossnetpay();
                    }
                }
            });
        } catch (error) {
            console.error('❌ Error in salary from Validation Part:', error.message);
            throw error;
        }
    }

    async ctcgrossnetpay() {
       let user;
      

         try{
            await test.step('Storing all component of salary calculator ' , async()=>{
                const keys = await this.#key();
                const values = await this.#value(); 
                const keyContents = await keys.allTextContents();
                const valueContents = await values.allTextContents();
                await base.method.writefsedata(keyContents, valueContents)
                user=await base.method.readfsdata();
            }) 
         }catch(error){
            console.error('Error in Storing all component of Salary ', error.message)
            throw error;
         }



         try {
            await test.step('Validation for Gross', async () => {
              let QAGross = 0; 
              for (const [key, value] of Object.entries(user)) {
                if (key == 'GROSS') {
                  break;
                }
                QAGross += parseInt(value);
              }
              const DEVGross=user["GROSS"];
              console.log('Total DEV Gross Value :',DEVGross)
              console.log('Total QA Gross Value :', QAGross); 
              
            });
          } catch (error) {
            console.error('❌ Error in Gross Validation:', error.message);
            throw error;
          }
          
          

          try {
            await test.step('Validation for Gross to Gratuity', async () => {
              let printValues = false;
              let QActc = 0;
              for (const [key, value] of Object.entries(user)) {
                if (key === 'GROSS') {
                  printValues = true;
                }
                if (key === 'CTC') {
                    break;
                  }

                if (printValues) {
                   QActc += parseInt(value);
                }
              }
              const value=user["CTC"];
              console.log('Total DEV CTC Value :',value)
              console.log('Total QA CTC Value :', QActc); 
        
            });
          } catch (error) {
            console.error('❌ Error in Gross to Gratuity Validation:', error.message);
            throw error;
          }
          


          try {
            await test.step('Validation for NetPay', async () => {
              let printValues = false;
              let result = 0; // Initialize result to 0
          
              for (const [key, value] of Object.entries(user)) {
                if (key === 'CTC') {
                  printValues = true;
                  continue;
                }
          
                if (key === 'NETPAY') {
                  break;
                }
          
                if (printValues) {
                  result += parseInt(value) || 0; // Ensure valid number
                }
              }
          
              let QAnetpay = parseInt(user["GROSS"]) - result;
              console.log('Total DEV NETPAY Value :',user["NETPAY"])
              console.log('Total QA CTNETPAYC Value :', QAnetpay); 
              console.log('---------------------------------------------------');
            });
          } catch (error) {
            console.error('❌ Error in NetPay Validation:', error.message);
            throw error;
          }
          
          
    }
}

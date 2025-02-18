import {test} from '@playwright/test'
const fs = require('fs');
// import { ALLSALARYPART } from '../../../ALCS-SAAS-Generic/06IConstantPath';
import SalaryAllComponent from '../../../ALCS-SAAS-Test-Data/SalaryCalculator/SalaryAllComponent.js'

export default class ValidationPart{

    constructor(page, BasicData, states){
        this.page = page;
        this.data = BasicData;
        this.states = states;
    }

    #fillsalary(){
        return this.page.locator("//label[contains(@class,'mantine-TextInput-label') and contains(.,'Salary')]/following-sibling::div/input");
    }

    #submit(){
        return this.page.locator("//span[text()='Submit']");
    
    }

    #tostmessage(){
        return  this.page.locator("//div[contains(@class,'mantine-Notification-title')]").first();
    }

    #takeamountfromdisplayed(){
       return this.page.locator('//div[@class="SalaryTable-module__min-wage-warning__VIN69"]')
               
     }
  
   async validation01(){
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
                
                const toast = await this.#tostmessage();
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
                        await this.CTC();
                    }
                } else if (message == 'Success') {
                    await this.CTC();
                }
            }
        });
    } catch (error) {
        console.error('❌ Error in salary from Validation Part:', error.message);
        throw error;
    }
    
}


        async CTC(){
           
            const keys = await this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr[*]/td[2]").allTextContents();
            const values = await this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr[*]/td[3]").allTextContents();
            
            const salaryData = {};
            for (let i = 0; i < keys.length; i++) {
                salaryData[keys[i].trim()] = values[i].trim();
            }
        
            const jsContent = `const salaryData = ${JSON.stringify(salaryData, null, 2)};\nexport default salaryData;`;
            fs.writeFileSync('tests/ALCS-SAAS-Test-Data/SalaryCalculator/SalaryAllComponent.js', jsContent);
        
            // Wait for the file to be completely written
            await this.page.waitForTimeout(2000);
        
            // Clear Node.js require cache to get updated values
            delete require.cache[require.resolve('../../../ALCS-SAAS-Test-Data/SalaryCalculator/SalaryAllComponent.js')];
        
            // Import updated data
            const updatedSalaryAllComponent = require('../../../ALCS-SAAS-Test-Data/SalaryCalculator/SalaryAllComponent.js');
            console.log(updatedSalaryAllComponent.Basic);
            // fs.unlinkSync(ALLSALARYPART)

    // try{
    //     await test.step('Click on PF Type', async()=>{
    //            const breakup = this.#clikconpftype();
    //            await breakup.waitFor( {state : "visible"} );
    //            await breakup.click();
    //     });
    // }catch(error){
    //     console.error('❌ Error in Click on PF Type ', error.message)
    //     throw error;
    // }

    // try{
    //     await test.step('Select PF Type Value', async()=>{
    //            const breakup = this.#selectpftype();
    //            await breakup.waitFor( {state : "visible"} );
    //            await breakup.click();
            
    //     });
    // }catch(error){
    //     console.error('❌ Error in Select PF Type Value', error.message)
    //     throw error;
    // }

   
  
    // if(this.data.HANDICAPPED == 'YES'){
    //     try{
    //         await test.step('Check in Handicap ', async()=>{
    //              const breakup = this.#handicapped();
    //              await breakup.waitFor( {state : "visible"} );
    //              await breakup.check();
    //         });
    //      }catch(error){
    //             console.error('❌ Error in Check in Handicap ', error.message)
    //             throw error;
    //         }
    //     }



   }



   }
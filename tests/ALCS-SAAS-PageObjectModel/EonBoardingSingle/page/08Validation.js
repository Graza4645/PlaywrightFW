import {test} from '@playwright/test'

export default class EonValidation {

    constructor(page,data){
        this.page=page;
        this.data=data;
    }


#onboardingstatus(){
    return  this.page.locator(`//tr[contains(@class,'CustomTable-module__table-row-wrapper') and contains(.,'${this.data.NAME}')]/child::td[9]`);//.textContent();
                 
}

#pancardvalidation(){
    return this.page.locator("//div[@class='m_3d733a3a mantine-Notification-description']").nth(1);

}

#clickonactionbutton(){
   return  this.page.locator(`//tr[contains(@class,'mantine-Table-tr CustomTable-module') and contains(.,'${this.data.NAME}')]/td[11]/img`);
}

#cencelofferletter(){
    return this.page.getByText('Cancel Offer Letter', { exact: true });
}

#clickoncancelicon(){
    return this.page.locator("//span[text()='Cancelled']");
}

#cancelstatus(){
    return this.page.locator(`//tr[contains(@class,'CustomTable-module__table-row-wrapper') and contains(.,'${this.data.NAME}')]/child::td[4]`);
          
}
    /** E-OnBoarding,  Validation of Active DashBoard of Associate   */

    async validationpart(){

        if(this.data.ACTIVE == 'YES'){
        try{
            await test.step('Validation of Active DashBoard  OnBoarding Status ' , async()=>{
                if(this.data.MANDATORY == 'YES' && parseInt(this.data.SALARY_PER_MONTH) < 15000){
                    const status=await this.#onboardingstatus();
                    await status.waitFor({ state : "visible"});
                    const messages = await status.textContent();
                    if (messages == 'DWS Data Pending') {
                        const timestamp = new Date().toLocaleString();
                        console.log(`\x1b[32m\x1b[1m✅ Successfully Created But Status is --> ${messages}\x1b[0m`,`\x1b[34m[${timestamp}]\x1b[0m`);
                    }  
                }

                if(this.data.MANDATORY == 'NO'){
                    const status=await this.#onboardingstatus();
                    await status.waitFor({ state : "visible"});
                    const messages = await status.textContent();
                    if (messages == 'DWS Data Pending') {
                        const timestamp = new Date().toLocaleString();
                        console.log(`\x1b[32m\x1b[1m✅ Successfully Created But Status is --> ${messages}\x1b[0m`,`\x1b[34m[${timestamp}]\x1b[0m`);
                    } 
                }
            });
        }catch(error){
            console.error('❌ Error in Active Validation ', error.message);
            throw error;
        }
    }




    

        if(this.data.MANDATORY == 'YES' && parseInt(this.data.SALARY_PER_MONTH) > 15000){
         try{
           await test.step('Validation for if salary monthly is greater than 15k pan is mandatory ' ,async() =>{
            
                        const finishButton = await this.page.getByText('Finish', {exact : true});
                        await finishButton.click();    
                        const validation= await this.#pancardvalidation()//.textContent();
                        await validation.waitFor({ state : "visible"});
                        const panerrormessage = await validation.textContent();
                        console.log("🔴 ",panerrormessage)
                                
           })
      }catch(error){
        console.error('❌ Error in PanCard Validation ', error.message)
        throw error
      }
    }

      if (this.data.CANCELLED === 'YES') {
        try {
            await test.step('Validation of cancel dashboard onboarding status', async () => {
                const action = await this.#clickonactionbutton();
                await action.waitFor({ state: "visible" });
                await action.click();
    
                const cancelOffer = await this.#cencelofferletter();
                await cancelOffer.waitFor({ state: "visible" });
                await cancelOffer.click();
    
                const cancelIcon = await this.#clickoncancelicon();
                await cancelIcon.waitFor({ state: "visible" });
                await cancelIcon.click();
    
                const cancelStatus = await this.#cancelstatus();
                await this.page.waitForTimeout(2000);
                const check = await cancelStatus.textContent();
                console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully offer letter has been Cancelled with this  ==> ${check} <== \x1b[0m`, `\x1b[34m <<================================\x1b[0m`);
            });
        } catch (error) {
            console.error('❌ Error in Cancel Validation', error.message);
            throw error;
        }
    }
    
    
     
    }
}
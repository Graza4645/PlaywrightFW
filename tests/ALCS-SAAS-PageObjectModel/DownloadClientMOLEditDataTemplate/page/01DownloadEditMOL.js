import {test} from '@playwright/test'
import { error } from 'console';

export default class DownloadEditMOl {

    constructor(page){
        this.page=page;
    }

    #clickonmode(){
      return this.page.locator("//span[contains(text(),'Mode')]");
    }

    #selectmodevalue(){
        return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'Client')]`);
    }

    #clickonclient(){
      return  this.page.locator("//span[contains(@class,'InputPlaceholder-placeholder') and contains(.,'Select Client')]");
    }

    #selectclientvalue(){
      return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'HONEA6')]`);
    }

    async downloadeditMOl(){

        try {
            await test.step('Click on Mode', async () => {
                const mode = await this.#clickonmode();
                await mode.waitFor({ state: "visible" });
                await mode.click();
            });
        } catch (error) {
            console.error('❌ Error in Click on Mode:', error.message);
            throw error;
        }
        


        try{

            await test.step('Select Value of Mode ' , async() =>{
                const modevalue= await this.#selectmodevalue();
                await modevalue.waitFor({ state : "visible"});
                await modevalue.click();
            });
        }catch(error){
            console.error('❌  Error in Select Mode Value ', error.message)
            throw error
        }
       


        try{
            await test.step('Click on Client ' , async() =>{
              const client = await this.#clickonclient();
              await client.waitFor({ state : "visible"});
              await client.click();
            });
        }catch(error){
            console.error('❌ Error on Click on Client')
        }

        try{
           await test.step('Select client value ' , async() =>{
              const clientvalue = await this.#selectclientvalue();
              await clientvalue.waitFor( { state : "visible"});
              await clientvalue.click();
           });

        }catch(error){
            console.error(' ❌ Error in Select Client Value')
        }
        
    }
}
import { click } from 'appium-uiautomator2-driver/build/lib/commands/element';
import {base, test} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class AddNewColumn {
    constructor(page,data){
        this.page=page;
        this.data=data;

    }

    #clickonaddnew(){
        return this.page.locator("//span[text()='+ Add New']");
    }

    #fillname(){
        return this.page.locator("//input[@name='name']");
    }

    #refrencevalue(){
        return this.page.locator("//input[@name='reference_value']");
    }

    #clickondatatype(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'Validation')]/descendant::input");
    }

    #selectdatatype(){
       return this.page.locator("//div[@value='String']"); 
    }


    #clickonadd(){
        return this.page.locator("//span[text()='Add']");
    }

    async addnewcolumn(){
         
        try{

            await test.step('Click on Add Button ', async()=>{
                const add= await this.#clickonaddnew();
                await add.waitFor({state:"visible"});
                await add.click();
            })
        }catch(error){
            console.error("❌ Error in Click on Add Button  :", error.message);
            throw error;
        }

        try{
            await test.step('Fill Column Name', async()=>{
                const add= await this.#fillname();
                await add.waitFor({state:"visible"});
                await add.fill('FirstColumn');
            })
        }catch(error){
            console.error("❌ Error in Fill Column Name  :", error.message);
            throw error;
        }


        try{
            await test.step('Fill Refrence Value', async()=>{
                const add= await this.#refrencevalue();
                await add.waitFor({state:"visible"});
                await add.fill('FirstColumn');
            })
        }catch(error){
            console.error("❌ Error in Fill Refrence Value:", error.message);
            throw error;
        }


        try{
            await test.step('Click on Data Type', async()=>{
                const add= await this.#clickondatatype();
                await add.waitFor({state:"visible"});
                await add.click();
            })
        }catch(error){
            console.error("❌ Error in Click on Data Type:", error.message);
            throw error;
        }




        try{
            await test.step('Select Data Type', async()=>{
                const add= await this.#selectdatatype();
                await add.waitFor({state:"visible"});
                await add.click();
            })
        }catch(error){
            console.error("❌ Error in Select Data Type:", error.message);
            throw error;
        }

        try{
            await test.step('Click on Add Button ', async()=>{
                const add= await this.#clickonadd();
                await add.waitFor({state:"visible"});
                await add.click();
            })
        }catch(error){
            console.error("❌ Error in Click on Add Button :", error.message);
            throw error;
        }


    }


}
import { test } from '@playwright/test'
import GenericMethod from '../../../ALCS-SAAS-Generic/03GenericMethod.js'

export default class DownloadEditMOl {
    constructor(page) {
        this.page = page;
        this.path= null;
        
    }
   

    #expandSidebar() {
        return this.page.locator("//img[@class='sidebar-module__sidebarCollapseExpandIcon__uS4jx']");
      }
    
    #selecthiring(){
        return this.page.locator("//p[contains(text(),'Hiring')]");
    }

    #selectassociateonboarding(){
        return this.page.locator("//div[contains(text(),'Associate Onboarding')]");
      }

    #clickonmode() {
        return this.page.locator("//span[contains(text(),'Mode')]");
    }

    #selectmodevalue() {
        return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'Client')]`);
    }

    #clickonclient() {
        return this.page.locator("//span[contains(@class,'InputPlaceholder-placeholder') and contains(.,'Select Client')]");
    }

    #selectclientvalue() {
        return this.page.locator(`//label[contains(@class,'mantine-Radio-label') and contains(.,'HONEA6')]`);
    }

    #downloadmodule(){
       return this.page.getByAltText('download master data');
    }

    #downloadEditMol(){
       return this.page.locator("(//img[@src='https://alcs-saas-ui-offerletter-qa.teamlease.com/images/download.svg'])[3]");
    }
    async downloadeditMOl() {
        const method = new GenericMethod(this.page);
        
    try{
        await test.step('Expand Side Bar', async () => {
          await this.#expandSidebar().waitFor({ state: 'visible' });  
          await this.#expandSidebar().click(); 
        });
      } catch (error) {
        console.error("❌ Error in Expand side bar :", error.message);
        throw error;
       }
   
  
      try{
        await test.step('Select hiring ' , async ()=>{
           await this.#selecthiring().waitFor({state: 'visible'});
           await this.#selecthiring().click();
        });
       } catch (error) {
        console.error("❌ Error in Select hiring :", error.message);
        throw error;
       }
  
       
       try{
        await test.step('Select Associate Onboarding ' , async ()=>{
           await this.#selectassociateonboarding().waitFor({state: 'visible'});
           await this.#selectassociateonboarding().click();
        });
       } catch (error) {
        console.error("❌ Error in Associate Onboarding :", error.message);
        throw error;
       }


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

        try {
            await test.step('Select Value of Mode', async () => {
                const modevalue = await this.#selectmodevalue();
                await modevalue.waitFor({ state: "visible" });
                await modevalue.click();
            });
        } catch (error) {
            console.error('❌ Error in Select Mode Value:', error.message);
            throw error;
        }

        try {
            await test.step('Click on Client', async () => {
                const client = await this.#clickonclient();
                await client.waitFor({ state: "visible" });
                await client.click();
            });
        } catch (error) {
            console.error('❌ Error on Click on Client:', error.message);
        }

        try {
            await test.step('Select Client Value', async () => {
                const clientvalue = await this.#selectclientvalue();
                await clientvalue.waitFor({ state: "visible" });
                await clientvalue.click();
            });
        } catch (error) {
            console.error('❌ Error in Select Client Value:', error.message);
        }
       
        try{
            await test.step('Createing New Folder', async()=>{
              this.path =await method.createfolder('ExcelSheetEditMOLDownload');
              console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully New folder is Created  \x1b[0m `,`\x1b[34m <<================================\x1b[0m`);

            })
            
        }catch(error){
            console.error('❌ Error in Not Created New Folder', error.message);
            throw error;
        }

        try{
            await test.step('Click on Download Module', async() =>{
                const download=await this.#downloadmodule();
                await download.waitFor({state : "visible"});
                await download.click();
            });
        }catch(error){
            console.log('❌ Error in Click on Download module ', error.message);
            throw error;
        }


        try{
            await test.step('Clicking on Downloading Excell Edit MOL Template ', async()=>{
               const downloadeditmol = await this.#downloadEditMol();
               await downloadeditmol.waitFor({state : "visible"});
               await downloadeditmol.click();
            });
        }catch(error){
            console.error('❌ Error in Downloading Excell Edit MOL Template', error.message);
            throw error;
        }
        
        try{
            await test.step('Delete the creted folder ', async() =>{
                await method.deletefolder(this.path);
                console.log(`\x1b[34m================================>>  \x1b[0m`, `\x1b[32m✅ Successfully Deleted Creted folder \x1b[0m `,`\x1b[34m <<================================\x1b[0m`);

            })
        }catch(error){
            console.log('❌ Error in  Deleted the Created Folder ', error.message);
            throw error
        }
         
        
    }
}

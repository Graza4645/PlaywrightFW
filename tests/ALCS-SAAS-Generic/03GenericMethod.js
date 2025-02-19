import { expect,test } from "@playwright/test";
const path = require("path");
import fs from 'fs';
import { SALARYALLCOMPONENT_PATH } from "./06IConstantPath";
import { active } from "appium-uiautomator2-driver/build/lib/commands/element";


export default class GenericMethod {
    
        constructor(page){
             this.page=page;
        }

        async check(){
            console.log("yes i am hera in method part")
        }
        async waitfortimeout(time){
            await this.page.waitForTimeout(time);
        }

        async takescreenshot(element,directory){
            await this.page.locator(element).screenshot({path : directory});
        }
     

        async mousehover(element){
            await this.page.locator(element).hover();
        }

        async maximize(Width,Height){
            await this.page.setViewportSize({ width: Width, height: Height });
        }

      
        
      
       async createfolder(foldername){
        try{
            const downloadPath = path.resolve(__dirname, `../${foldername}`);   
            if (!fs.existsSync(downloadPath)) {
              fs.mkdirSync(downloadPath);
            }
            this.page.on('download', (download) => {
                download.saveAs(path.join(downloadPath, download.suggestedFilename()));
              });
            return downloadPath;
           }
        catch(error){
           console.error('❌ Sorry Enabled to Create Folder')
        }
    }
     
   
        async deletefolder(downloadPath){
            try{
                fs.rmSync(downloadPath, { recursive: true, force: true }); 
            }catch(error){
                console.error('❌  Sorry enabled to delete folder ')
            }
            
        }

        async writefsedata(keys,values){
            console.log("hello write value")
            try{
                const salaryData = {};
                for (let i = 0; i < keys.length; i++) {
                    salaryData[keys[i].trim()] = values[i].trim();
                }
                const jsContent = JSON.stringify(salaryData, null, 2);
                fs.writeFileSync(SALARYALLCOMPONENT_PATH, jsContent, 'utf8');
            }catch(error){
                console.error('❌  Sorry enabled to write fs data in  salarydata object ')
            }
        }

        async readfsdata(){
            try{
                return JSON.parse(fs.readFileSync(SALARYALLCOMPONENT_PATH, 'utf8'));
            }catch(error){
                console.error('❌  Sorry enabled to read fs data ,', error.message)
            }
           
        }
        
}
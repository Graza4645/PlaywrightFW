import { expect,test } from "@playwright/test";
const path = require("path");
import fs from 'fs';


export default class GenericMethod {
    
        constructor(page){
             this.page=page;
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

        async check(){
            console.log("generic method ");
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
        
}
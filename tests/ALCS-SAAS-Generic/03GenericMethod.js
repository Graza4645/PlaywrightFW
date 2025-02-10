import { expect,test } from "@playwright/test";

exports.GenericMethod = 
     class GenericMethod {
    
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



        
}
import {test, base} from '../../../ALCS-SAAS-Generic/02testSetup.js'

export default class CommonFunction {
    constructor(page,data){
        this.page=page;
        this.data=data;
    }

    #expand(){
        return this.page.locator("//img[@alt='expand']")
    }

    #collapse(){
        return this.page.locator("//img[@alt='collapse']"); 
    }

    #setting(){
        return this.page.locator("//p[text()='Client Config']");
    }
 
    #moltemplateconfig(){
        return this.page.locator("//p[text()='MOL Template Config']");
    }

    






    async commonfunction(){
      
        try{
            await test.step('Expand Side Bar ', async()=>{
                const expend= await this.#expand();
                await expend.waitFor( { state : "visible"} );
                await expend.click();
            });

        }catch(error){
            console.error("❌ Error in Expand Side Bar  :", error.message);
            throw error;
        }


        try{
            await test.step('click on setting / Client Config ', async()=>{
                const expend= await this.#setting();
                await expend.waitFor( { state : "visible"} );
                await expend.click();
            });

        }catch(error){
            console.error("❌ Error in click on setting / Client Config  :", error.message);
            throw error;
        }

        try{
            await test.step('Mol Template Config ', async()=>{
                const expend= await this.#moltemplateconfig();
                await expend.waitFor( { state : "visible"} );
                await expend.click();
            });

        }catch(error){
            console.error("❌ Error in Mol Template Config :", error.message);
            throw error;
        }


        try{
            await test.step('Collapse Side Bar ', async()=>{
                const expend= await this.#collapse();
                await expend.waitFor( { state : "visible"} );
                await expend.click();
            });

        }catch(error){
            console.error("❌ Error in Collapse Side Bar :", error.message);
            throw error;
        }
    }
}

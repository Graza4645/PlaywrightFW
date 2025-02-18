import {test} from '@playwright/test'

export default class ExemptionsAndApplicability{

    constructor(page, BasicData, states){
        this.page = page;
        this.data = BasicData;
        this.states = states;
    }

    #cap(){
        return this.page.locator("(//div[@data-without-labels='true'])[1]");
    }

    #clikconpftype(){
        return this.page.locator("//div[contains(@class,'mantine-InputWrapper-root mantine-Select-root') and contains(.,'PF Type')]/descendant::input[@aria-haspopup='listbox']");
    
    }

    #selectpftype(){
        return  this.page.locator("//span[contains(text(),'Default')]")
    }

    #handicapped(){
       return this.page.locator("(//div[@data-without-labels='true'])[2]");
               
     }
  

  
   async exemptionsandApplicability(){

    if(this.data.HANDICAPPED == 'YES'){
         try{
               await test.step('check cap', async()=>{
               const breakup = this.#cap();
               await breakup.waitFor( {state : "visible"} );
               await breakup.check();
          });
        }catch(error){
               console.error('❌ Error in check cap', error.message)
               throw error;
         }
  
    }

    try{
        await test.step('Click on PF Type', async()=>{
               const breakup = this.#clikconpftype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
        });
    }catch(error){
        console.error('❌ Error in Click on PF Type ', error.message)
        throw error;
    }

    try{
        await test.step('Select PF Type Value', async()=>{
               const breakup = this.#selectpftype();
               await breakup.waitFor( {state : "visible"} );
               await breakup.click();
            
        });
    }catch(error){
        console.error('❌ Error in Select PF Type Value', error.message)
        throw error;
    }

   
  
    if(this.data.HANDICAPPED == 'YES'){
        try{
            await test.step('Check in Handicap ', async()=>{
                 const breakup = this.#handicapped();
                 await breakup.waitFor( {state : "visible"} );
                 await breakup.check();
            });
         }catch(error){
                console.error('❌ Error in Check in Handicap ', error.message)
                throw error;
            }
        }



   }



   }
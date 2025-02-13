import Basicdetails from "./page/01BasicDetails";

export default class EonB {

    constructor(page){
        // this.eonbpage=page;
        this.eonb = new Basicdetails(page);
    }
       
    async index01(){
        console.log('i am index');
    }


}
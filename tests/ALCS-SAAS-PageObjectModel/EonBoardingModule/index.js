import Basicdetails from "./page/01BasicDetails";
import CommonFunction from "./page/01CommonFunction";

export default class EonBoarding {

    constructor(page,data){
        // this.eonbpage=page;
        this.basicdetailsPage = new Basicdetails(page,data);
        this.commonfunction_Page = new CommonFunction(page,data);
    }
       
   


}
import PersonalDetails from "./page/02PersonalDetails";
import CommonFunction from "./page/01CommonFunction";
import KYCInformation from "./page/03KYCInformation";

export default class EonBoarding {

    constructor(page,data){
        this.commonfunction_Page = new CommonFunction(page,data);
        this.personaldetails = new PersonalDetails(page,data);
        this.kycinformation = new KYCInformation(page,data);
        
    }
       
   


}
import PersonalDetails from "./page/02PersonalDetails";
import CommonFunction from "./page/01CommonFunction";
import KYCInformation from "./page/03KYCInformation";
import ContanctInformation from "./page/04ContanctInformation";
import EmploymentDetails from "./page/05EmploymentDetails";
import SalaryInformation from "./page/06SalaryInformation";
import Miscellaneous from "./page/07Miscellaneous";

export default class EonBoarding {

    constructor(page,data){
        this.commonfunction_Page = new CommonFunction(page,data);
        this.personaldetails = new PersonalDetails(page,data);
        this.kycinformation = new KYCInformation(page,data);
        this.contactinformation = new ContanctInformation(page,data)
        this.employmentdetails = new EmploymentDetails(page,data)
        this.salarynformation = new SalaryInformation(page,data);
        this.miscellaneous   =  new Miscellaneous(page,data);
    }
       
   


}
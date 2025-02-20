import CommonFunction from "./page/00CommonFunction";
import CoreDetails from "./page/01CoreDetails";
import JobInformation from "./page/02JobInformation";
import SalaryDetails from "./page/03SalaryDetails";
import ExemptionsAndApplicability from "./page/04ExemptionsandApplicability";
import ValidationPart from "./page/05ValidationPart";


export default class SalaryCalculator{
    constructor(page, BasicData, state){
        this.commonfunction = new CommonFunction(page, BasicData, state);
        this.coredetails = new CoreDetails(page, BasicData, state);
        this.jobinformation = new JobInformation(page, BasicData, state);
        this.salarydetails = new SalaryDetails(page, BasicData, state);
        this.exemptionsandapplicability = new ExemptionsAndApplicability(page, BasicData, state);
        this.validationpart = new ValidationPart(page, BasicData, state);
        
    }
}
import CommonFunction from "./page/00CommonFunction";
import CoreDetails from "./page/01CoreDetails";
import JobInformation from "./page/02JobInformation";
import SalaryDetails from "./page/03SalaryDetails";
import ExemptionsAndApplicability from "./page/04ExemptionsandApplicability";

export default class SalaryCalculator{
    constructor(page, BasicData, states){
        this.commonfunction = new CommonFunction(page, BasicData, states);
        this.coredetails = new CoreDetails(page, BasicData, states);
        this.jobinformation = new JobInformation(page, BasicData, states);
        this.salarydetails = new SalaryDetails(page, BasicData, states);
        this.exemptionsandapplicability = new ExemptionsAndApplicability(page, BasicData, states);
    }
}
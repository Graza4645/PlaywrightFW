import SalaryCalculator from "../ALCS-SAAS-PageObjectModel/SalaryCalculator";
import {test , base } from '../ALCS-SAAS-Generic/02testSetup.js'
import BasicData from '../ALCS-SAAS-Test-Data/SalaryCalculator/BasicData.js'
import states from '../ALCS-SAAS-Test-Data/SalaryCalculator/State.js'


states.forEach((states) => {
    test(`hello` , async() =>{
          const salcal = new SalaryCalculator(base.page, BasicData, states);
          await salcal.commonfunction.commansteps();
          await salcal.coredetails.coredetails();
          await salcal.jobinformation.jobinformation();
          await salcal.salarydetails.salarydetails();
          await salcal.exemptionsandapplicability.exemptionsandApplicability();
          await salcal.validationpart.validation01();
    });
});



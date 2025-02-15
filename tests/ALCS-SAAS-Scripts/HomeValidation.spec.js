import { PATH_GET } from '../ALCS-SAAS-Generic/06IConstantPath.js';
import { test ,base} from '../ALCS-SAAS-Generic/02testSetup.js';  
import EonBoardingTestData from '../ALCS-SAAS-Test-Data/EonBoardingTestData.js';
import EonBoarding from '../ALCS-SAAS-PageObjectModel/EonBoardingModule/index.js';

EonBoardingTestData.forEach((data) => {
    test(`${data.Sceanario}`, async () => {
          const eonboarding = new EonBoarding(base.page, data); 
          await eonboarding.commonfunction_Page.commansteps(); 
          await eonboarding.personaldetails.PersonalDetails(); 
          await eonboarding.kycinformation.KYCInformation();
          await eonboarding.contactinformation.ContactInformation();
          await eonboarding.employmentdetails.employmentDetails();
          await eonboarding.salarynformation.Salaryinformation();
          await eonboarding.miscellaneous.MiscellaneousM();
          await eonboarding.eonvalidation.validationpart();



    

    });
});

























































// test('Script-2: Check Element Presence', async () => {
//   await base.eonboarding.commansteps();
//   console.log('Script two pass');
// });

// test('Script-3: Click and Verify', async () => {
//   console.log('Script three pass');
// });

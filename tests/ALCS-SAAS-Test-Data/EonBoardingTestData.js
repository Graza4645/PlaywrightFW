import { faker } from '@faker-js/faker';

module.exports = [
    {


  "Sceanario" : "001 Try to generate the offer letter through E-Onboarding with valid data --> {AND} <-- 002 Check if post E-Onboading creation through E- Onboarding the same is reflecting in Active dashboard",

  
  "ACTIVE"  :  "YES",
  "CANCELLED" : "NO",
/**
 * mandatory field
 */
  
  "MANDATORY" : "YES",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                :  faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2000",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  :  "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        :  "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    :  faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "YES",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : faker.internet.email(),





    }
,
{


  "Sceanario" : "003 Try to cancel the generated OL through E-Onboarding and check if post cancellation the same is reflecting under cancelled dashboard",

    
  "ACTIVE"  :  "NO",
  "CANCELLED" : "YES",
/**
 * mandatory field
 */
  
  "MANDATORY" : "YES",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                :  faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2000",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  : "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        : "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    : faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : faker.internet.email(),




    }
,
{


  "Sceanario" : "004 Check the mandatoryness of all the OL fields for E-onboarding with valid data  without the data in mandatory fields with valid inputs/data, it should not allow to generate the OL",

    
  "ACTIVE"  :  "NO",
  "CANCELLED" : "NO",
/**
 * mandatory field
 */
  
  "MANDATORY" : "YES",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                : "12",// faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2000",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  : "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        : "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    : faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : faker.internet.email(),




    }
,

{


  
    "Scenario": "005 All Field Validation\n(A) Check if Aadhaar number format validation is available while generating e-Onboarding Standard OL.\n(B) Check if PAN number format validation is available while generating e-Onboarding Standard OL. \n(C) Check if while generating the e-onboarding Standard OL validating the IFSC code.  \n(D) check if the date of birth validated correctly i.e., it should accept more than 18years old \n(E) Check if while generating the e-onboarding Standard OL Emergency No format validation is available \n(F) ",

  

  "ACTIVE"  :  "NO",
  "CANCELLED" : "NO",
/**
 * mandatory field
 */
  
  "MANDATORY" : "NO",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                : "12",// faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2019",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : "123"     ,//faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "122"     ,//"RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : "123"     ,//faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "AS",//"9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  "12"   ,//faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "QA",//"9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  : "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        : "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    : faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "AS"   ,//"14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "YES",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : "12"   ,//faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : "123"     ,//faker.internet.email(),





    }
,
{


  "Sceanario" : "006 Check if the OL is allowing to roll out less than 7 days back date",

    
  "ACTIVE"  :  "NO",
  "CANCELLED" : "NO",
/**
 * mandatory field
 */
  
  "MANDATORY" : "NO",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                :  faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2000",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  : "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        : "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    : faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : faker.internet.email(),




    }  
,
{


  "Sceanario" : "007 ",

    
  "ACTIVE"  :  "NO",
  "CANCELLED" : "NO",
/**
 * mandatory field
 */
  
  "MANDATORY" : "NO",

  /**
   *  Common or Basic Data
   */

  "MODE"          : 'Client',
  "CLIENT"        : "HONEA6",
  "ADD_CANDIDATE" : "E-Onboarding",
   
  /**
   *  01 Personal Details
   */

  "SALUTATION"          : "DR",
  "NAME"                :  faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
  "GENDER"              : "Female",
  "CLIENT_CODE"         : "T23262",
  "EXPECTED_YEAR"       : "2010",
  "EXPECTED_MONTH"      : "May",
  "EXPECTED_DATE"       : "12",
  "FATHER_HUSBAND_NAME" : "IRFAN KHAN",                                               // Name must contain only alphabets
  "MOTHER_NAME"         : "BEGAM",
  "MARRIED_STATUS"      : "Married",
  "SPECIALLY_ABLED"     : "YES",



  /**
   *  02 KYC Information
   */

  "AADHAR_NUMBER"  : faker.string.numeric(12),                             // Aadhar number must be 12 digits
  "PAN_NUMBER"     : "RDESP"+faker.string.numeric(4)+"E",                  // No msg
  "ACCOUNT_NUMBER" : faker.string.numeric(12),                             // Account number must be 9-18 digits
  "IFSC_CODE"      : "SBBJ0011007",


  
  /**
   *  03 Contact Information
   */

  "MOBILE_NUMBER"               : "9934" + faker.string.numeric(6),              // Mobile number should start with 6-9
  "EMAIL_ID"                    :  faker.internet.email(),                       //  Invalid email address
  "ASSOCIATE_PERMANENT_ADDRESS" :  "GANGS OF WASYEPUR DHANBAD",                  //  NO msg
  "PINCODE"                     :  "872911",                                     //  Pincode must be 6 digits
  "CURRENT_ADDRESS_TO"          :  "bank more dhanbad",                          // No msg
  "CURRENT_ADDRESS"             :  "Parliment Delhi",                            // No masg
  "CURRENT_PINCODE"             :  "763828",                                     // Pincode must be 6 digits
  "ASSOCIATE_EMERGENCY_NO"      : "9934" + faker.string.numeric(6),              //  Mobile number should start with 6-9



  /**
   *   05 Employment Details
   */

  "DESIGNATION"      :  "Pre Sales Representative",
  "STATE"            :  "Bihar",
  "INDUSTRY_TYPE"    :  "APPRENTICE ACT",
  "JOB_LOCATION"     :  "Patna",
  "ZONE"             :  "Zone-0",
  "JOB_CATEGORY"     : "School Pass-Outs",
  "CONTRACT_FROMDOJ" : {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Jan",
  "EXPECTEDDATE"     :  "29"
   },
  "CONTRACT_END_DATE": {
  "EXPECTEDYEAR"     :  "2025",
  "EXPECTEDMONTH"    :  "Dec",
  "EXPECTEDDATE"     :  "13"
   },
   "DEPARTMENT"      :  "DEPARTMENT",
   "BRANCH_CODE"     :  "2345687",
   "COST_CENTER"     :  "PUNJAB",
   "PO_NO"           :  "454646",
   "REPORTING_MANAGER_EMAIL_ID" : "test@gmail.com",
   "REPORTING_MANAGER_NAME"     : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
   "REPORTING_MANAGER_CONTACT_NUMBER"  : "9934" + faker.string.numeric(6),
   "REPORTING_MANAGER_EMP_CODE"        : "T" + faker.string.numeric(5),
   "INTERACTION_ID"                    : faker.string.numeric(3)+"-"+faker.string.numeric(3)+"-"+faker.string.numeric(3),


   /**
    *   07 Salary Information
    */
   
   "PAY_ELEMENT_GROUP"    :  "salary",
   "SALARY_TYPE"          :  "CTC",
   "REQUIREMENT_ID"       :  "SDE"  ,   
   "SALARY_PER_MONTH"     :  "14996",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),
  "OL_EMAIL"              : faker.internet.email(),




    }


  ]
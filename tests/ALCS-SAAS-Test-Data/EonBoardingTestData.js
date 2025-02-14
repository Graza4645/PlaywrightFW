import { faker } from '@faker-js/faker';

module.exports = [
    {


  "Sceanario" : "01 Try to generate the offer letter through E-Onboarding with valid data",

    
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
   "SALARY_PER_MONTH"     :  "75000",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : "HUMAN RESOURCE",
  "OL_EMAIL"              : "hr260@gmail.com",





    }
,
{


  "Sceanario" : "02 Try to generate the offer letter through E-Onboarding with valid data",

    
  "CANCELLED" : "YES",
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
  "NAME"                :  "12",//faker.name.lastName().replace(/[^a-zA-Z]/g, '').trim(),    // Name must contain only alphabets
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
   "SALARY_PER_MONTH"     :  "75000",
   "COMPARE_MIN_WAGE"     :  "Gross",
   "CAP"                  :  "NO",


  /**
   *  08 Miscellaneous
   */

  "ASSOCIATE_OL_TRIGGER"  : "No",
  "OL_HR_NAME"            : "HUMAN RESOURCE",
  "OL_EMAIL"              : "hr260@gmail.com",





    }
,

  ]
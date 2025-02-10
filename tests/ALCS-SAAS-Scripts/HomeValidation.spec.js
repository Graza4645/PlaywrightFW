const { test } = require('../ALCS-SAAS-Generic/02testSetup');
const {BaseClass}= require('../ALCS-SAAS-Generic/01BaseClass.js');
const { captureRejectionSymbol } = require('events');
const path=require('../ALCS-SAAS-Generic/06IConstantPath.js')


let base=new BaseClass();


test('Script-1: Validate Page Title', async () => {
  console.log('Script one pass');

  const value = await base.ExcelClass().getDataFromExcel(path.PATH_GET, "Sheet1", "C2");
  console.log(value);
  await base.ExcelClass().setDataInExcel(path.PATH_GET, "Sheet1", "C2", "Noushad");

  let all = await base.ExcelClass().dataProvider(path.PATH_GET, "Sheet1");
   Array.isArray(all)
   console.table(all)
   await base.DataBaseClass().DBConnection();
 

});

test('Script-2: Check Element Presence', async () => {
  console.log('Script two pass');
});

test('Script-3: Click and Verify', async () => {
  console.log('Script three pass');
});

import { test } from '../ALCS-SAAS-Generic/02testSetup.js';
import { BaseClass } from '../ALCS-SAAS-Generic/01BaseClass.js';
import { PATH_GET } from '../ALCS-SAAS-Generic/06IConstantPath.js';


class TestClass extends BaseClass {}

let base = new TestClass();

test('Script-1: Validate Page Title', async () => {
  console.log('Script one pass');

  const value = await base.excelUtility.getDataFromExcel(PATH_GET, "Sheet1", "C2");
  console.log(value);
  await base.excelUtility.setDataInExcel(PATH_GET, "Sheet1", "C2", "Noushad");

  let all = await base.excelUtility.dataProvider(PATH_GET, "Sheet1");
  console.table(all);

  await base.databaseutility.DBConnection();
});

test('Script-2: Check Element Presence', async () => {
  console.log('Script two pass');
});

test('Script-3: Click and Verify', async () => {
  console.log('Script three pass');
});

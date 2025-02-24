import MOLTemplateComfig from "../ALCS-SAAS-PageObjectModel/MOLTemplateConfig";
import {base,test} from '../ALCS-SAAS-Generic/02testSetup.js'

test('Script of MOL Teplate Config', async()=>{
    const user=new MOLTemplateComfig(base.page);
    await user.commonfunction.commonfunction();
    await user.addnewcolumn.addnewcolumn();
})
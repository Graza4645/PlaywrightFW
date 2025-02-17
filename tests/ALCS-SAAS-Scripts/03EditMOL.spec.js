import EditMOL from "../ALCS-SAAS-PageObjectModel/DownloadClientMOLEditDataTemplate";
import { test ,base} from '../ALCS-SAAS-Generic/02testSetup.js';  

test('Edit MOL template Download' ,async() =>{
const user= new EditMOL(base.page);
await user.donloadeditmol.downloadeditMOl();

});
import CommonFunction from "./page/01Commonfunction";
import AddNewColumn from "./page/02AddNewColumn";

export default class MOLTemplateComfig {

    constructor(page,data){
       this.commonfunction= new CommonFunction(page,data);
       this.addnewcolumn= new AddNewColumn(page,data);
    }

} 
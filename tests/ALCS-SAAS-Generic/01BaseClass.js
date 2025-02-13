import { chromium } from 'playwright';
import CommonData from '../UtilsData/CommonData.js';
import LoginPage from '../ALCS-SAAS-PageObjectModel/LoginPage.js';
import { ExcellUtility } from '../ALCS-SAAS-Generic/04ExcelUtility.js';
import { Databaseutility } from '../ALCS-SAAS-Generic/05DataBaseUtility.js';
import EonBoarding from '../ALCS-SAAS-PageObjectModel/EonBoardingModule/index.js';
import EonB from '../ALCS-SAAS-PageObjectModel/EonBoardingModule/index.js';

export class BaseClass {
    constructor(data) {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.isFirstRun = true;
        this.excelUtility = new ExcellUtility();
        this.databaseutility = new Databaseutility();
        this.data=data;
    
    }

    async initialize() {
        try {
            if (!this.browser) {
                this.browser = await chromium.launch({ headless: false });
                this.context = await this.browser.newContext();
                this.page = await this.context.newPage();
                await this.page.setViewportSize({ width: 1900, height: 1100 });
                this.loginPage = new LoginPage(this.page);
                this.eonboarding = new EonBoarding(this.page,this.data); 
        

               
            }
            return this.page;
        } catch (error) {
            console.error("❌ Error initializing Playwright:", error.message);
            throw error;
        }
    }

    async open() {
        try {
            if (this.isFirstRun && this.page) {
                await this.page.goto(CommonData.Url);
                this.isFirstRun = false; 
            }
        } catch (error) {
            console.error("❌ Error navigating to URL:", error.message);
        }
    }

    async cleanup() {
        try {
            if (this.context) {
                await this.context.close();
            }
            if (this.browser) {
                await this.browser.close();
                const timestamp = new Date().toLocaleString();
                console.log(`\x1b[32m\x1b[1m✅ Playwright Browser Closed Successfully\x1b[0m - Operation completed.`,`\x1b[34m[${timestamp}]\x1b[0m`);
                  
            }
        } catch (error) {
            console.error("❌ Error during cleanup:", error.message);
        }
    }
}

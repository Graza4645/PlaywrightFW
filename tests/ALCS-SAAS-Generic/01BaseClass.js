const { chromium } = require('playwright');
const CommonData = require('../UtilsData/CommonData.js');
const LoginPage = require('../ALCS-SAAS-PageObjectModel/LoginPage.js');
import { ExcellUtility } from '../ALCS-SAAS-Generic/04ExcelUtility.js';
import { Databaseutility } from '../ALCS-SAAS-Generic/05DataBaseUtility.js';

exports.BaseClass= class BaseClass {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.isFirstRun = true;
        this.excelUtility = new ExcellUtility();
        this.databaseutility= new Databaseutility();
    }

    async initialize() {
        try {
            if (!this.browser) {
                this.browser = await chromium.launch({ headless: false });
                this.context = await this.browser.newContext();
                this.page = await this.context.newPage();
                await this.page.setViewportSize({ width: 1900, height: 1100 });
                this.loginPage = new LoginPage(this.page);
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

   ExcelClass() {
        return this.excelUtility;
    }

    DataBaseClass(){
        return this.databaseutility;
    }


    async cleanup() {
        try {
            if (this.context) {
                await this.context.close();
            }
            if (this.browser) {
                await this.browser.close();
            }
        } catch (error) {
            console.error("❌ Error during cleanup:", error.message);
        }
    }
}



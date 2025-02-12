import { EonBoardingTestData } from "../ALCS-SAAS-Test-Data/EonBoardingTestData.js";
import { test } from '@playwright/test';

export default class EonBoarding {
  constructor(page) {
    this.page = page;  // Use this.page, no need for #page as a private field
  }

  // Private method
  #expandSidebar() {
    return this.page.locator("//img[@class='sidebar-module__sidebarCollapseExpandIcon__uS4jx']");
  }

  // Public method to perform common steps
  async commansteps() {
    console.log('Expand-----------------------------------------------');
    try {
      await test.step('Expand Side Bar', async () => {
        await this.#expandSidebar().click();  // Call the private method here
        // await expandButton.waitFor({ state: 'visible' });
        // await expandButton.click();
        // console.log('Sidebar expanded');
      });
    } catch (error) {
      console.error("❌ Error in expanding sidebar:", error.message);
      throw error;
    }
  }
}

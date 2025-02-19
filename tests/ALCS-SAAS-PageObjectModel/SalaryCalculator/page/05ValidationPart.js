import { test } from '@playwright/test';
import fs from 'fs';
import { base } from '../../../ALCS-SAAS-Generic/02testSetup.js';

export default class ValidationPart {
    constructor(page, BasicData, states) {
        this.page = page;
        this.data = BasicData;
        this.states = states;
    }

    #fillsalary() {
        return this.page.locator("//label[contains(@class,'mantine-TextInput-label') and contains(.,'Salary')]/following-sibling::div/input");
    }

    #submit() {
        return this.page.locator("//span[text()='Submit']");
    }

    #toastmessage() {
        return this.page.locator("//div[contains(@class,'mantine-Notification-title')]").first();
    }

    #takeamountfromdisplayed() {
        return this.page.locator('//div[@class="SalaryTable-module__min-wage-warning__VIN69"]');
    }

    #key() {
        // Locate all first column (second 'td' in each row)
        return this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr/td[2]");
    }

    #value() {
        // Locate all second column (third 'td' in each row)
        return this.page.locator("//table[@class='SalaryTable-module__salary-table__hsraT m_b23fa0ef mantine-Table-table']/tbody/tr/td[3]");
    }

    async validation01() {
        try {
            await test.step('Fill salary from Validation Part', async () => {
                const salaryValue = this.#fillsalary();

                for (let i = this.data.START; i <= this.data.END; i++) {
                    await salaryValue.waitFor({ state: "visible" });
                    await salaryValue.clear();
                    await salaryValue.waitFor({ state: "visible" });
                    await salaryValue.fill(i.toString());
                    await this.page.waitForTimeout(500);

                    const submit = await this.#submit();
                    await submit.waitFor({ state: "visible" });
                    await submit.click();

                    const toast = await this.#toastmessage();
                    await toast.waitFor({ state: "visible" });
                    const message = await toast.textContent();

                    if (message == 'Error') {
                        const take = await this.#takeamountfromdisplayed();
                        await take.waitFor({ state: "visible" });
                        const takeValue = await take.textContent();
                        const match = takeValue.match(/\d+$/);

                        if (match) {
                            let lastNumber = parseInt(match[0], 10);
                            lastNumber += i;

                            const paisa = await this.#fillsalary();
                            await paisa.clear();
                            await paisa.fill(lastNumber.toString());
                            await this.page.waitForTimeout(500);

                            await (await this.#submit()).click();
                            await this.CTC();
                        }
                    } else if (message == 'Success') {
                        await this.CTC();
                    }
                }
            });
        } catch (error) {
            console.error('❌ Error in salary from Validation Part:', error.message);
            throw error;
        }
    }

    async CTC() {
        const keys = await this.#key();
        const values = await this.#value();

        // Wait for elements to be visible
        await keys.waitFor({ state: "visible" });
        await values.waitFor({ state: "visible" });

        // Extract text contents from all the matched elements (multiple rows)
        const keyContents = await keys.allTextContents();
        const valueContents = await values.allTextContents();

        console.log(keyContents, valueContents);

        // Example to check or process the data
        keyContents.forEach((key, index) => {
            console.log(`Key: ${key}, Value: ${valueContents[index]}`);
        });

        // Optional: Save data to a file
        // const salaryData = {};
        // for (let i = 0; i < keyContents.length; i++) {
        //     salaryData[keyContents[i].trim()] = valueContents[i].trim();
        // }

        // const jsContent = JSON.stringify(salaryData, null, 2);
        // const filePath = 'tests/ALCS-SAAS-Test-Data/SalaryCalculator/SalaryAllComponent.json';
        // fs.writeFileSync(filePath, jsContent, 'utf8');
        // const AllComponent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        // const ctcValue = AllComponent["Basic"];
        // console.log("The value of 'Basic' is:", ctcValue);
    }
}

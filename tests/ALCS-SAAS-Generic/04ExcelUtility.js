const XLSX = require("xlsx");
const path = require("path");
const fs = require('fs');

/**
 *   @author MD NOUSHAD ANSARI
 */


 export default class ExcellUtility {
    constructor() {}



    /**
     * Fetch data from an Excel file based on sheet name and specific cell.
     * @param {string} filePath - The absolute or relative path to the Excel file.
     * @param {string} sheetName - The name of the sheet.
     * @param {string} cellAddress - The Excel cell address (e.g., "C2").
     * @returns {string|null} - The data from the specified cell, or null if not found.
     */
    async getDataFromExcel(filePath, sheetName, cellAddress) {
        try {
            const resolvedPath = path.resolve(filePath);
            console.log(`✅ Accessing Excel file at: ${resolvedPath}`);
            const workbook = XLSX.readFile(resolvedPath);
            const sheet = workbook.Sheets[sheetName];
            if (!sheet) {
                throw new Error(`Sheet "${sheetName}" not found.`);
            }
            const cell = sheet[cellAddress];
            return cell ? cell.v : null;
       } catch (error) {
        console.error("❌ Error reading Excel file:", error.message);
        return null;
      } 
  }





    /**
     * Write data to a specific cell in an Excel sheet.
     * @param {string} filePath - The absolute or relative path to the Excel file.
     * @param {string} sheetName - The name of the sheet where data should be written.
     * @param {string} cellAddress - The Excel cell address (e.g., "C2").
     * @param {string|number} value - The value to write into the specified cell.
     */
      async setDataInExcel(filePath, sheetName, cellAddress, value) {
         try {
            const resolvedPath = path.resolve(filePath);
            console.log(`✅ Accessing Excel file at: ${resolvedPath}`);
            const workbook = XLSX.readFile(resolvedPath);
            const sheet = workbook.Sheets[sheetName];
            if (!sheet) {
                throw new Error(`Sheet "${sheetName}" not found.`);
            }
            sheet[cellAddress] = { v: value };
            XLSX.writeFile(workbook, resolvedPath);

            console.log(`✅ Successfully written "${value}" to ${sheetName} at ${cellAddress}`);
         } catch (error) {
        console.error("❌ Error writing to Excel file:", error.message);
        }
    }    




  
    /**
     * Reads all data from an Excel sheet and returns it as a flattened array.
     * @param {string} filePath - The absolute or relative path to the Excel file.
     * @param {string} sheetName - The name of the sheet to extract data from.
     * @returns {Promise<Array>} - Returns a flattened array containing all data from the sheet (excluding headers).
     */

   async dataProvider(filePath, sheetName) {
    try {
        const resolvedPath = path.resolve(filePath);
        console.log(`✅ Accessing Excel file at: ${resolvedPath}`);
        const workbook = XLSX.readFile(resolvedPath);
        const sheet = workbook.Sheets[sheetName];
        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }
        let rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        rows.shift();
        let flatData = rows.flat();

        //console.log(`✅ Data successfully fetched from ${sheetName}:`, flatData);
        return flatData;
    } catch (error) {
        console.error("❌ Error reading Excel file:", error.message);
        return []; 
    }
} 




}



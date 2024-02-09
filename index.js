require("dotenv").config();
const deeplApiKey = process.env.DEEPL_API_KEY;
const deepl = require("deepl-node");
const ExcelJS = require("exceljs/dist/es5");
const workbook = new ExcelJS.Workbook();
const translator = new deepl.Translator(deeplApiKey);
const ProgressBar = require("progress");
const chalk = require("chalk");

const bar = new ProgressBar(chalk.blue("[:bar] :current/:total"), {
  complete: "*",
  width: 20,
  total: 0,
});

const wordArray = ["Add your words here"];
const worksheet = workbook.addWorksheet("Sheet 1");

/**
 * Translates a word, adds a row to the worksheet, and resolves the promise.
 *
 * @param {string} word - The word to be translated and added to the worksheet.
 * @return {Promise} A Promise that resolves when the word is translated and the row is added.
 */
function translateAndAddRow(word) {
  return new Promise((resolve, reject) => {
    translator
      .translateText(word, "en", "fr") // Translate the word to choice language
      .then((result) => {
        worksheet.addRow([result.text, word]);
        bar.tick();
        resolve();
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

/**
 * Asynchronously translates each word in the wordArray and adds the translation to an Excel file.
 */
async function translateWords() {
  try {
    bar.total = wordArray.length;
    for (const word of wordArray) {
      await translateAndAddRow(word);
    }

    await workbook.xlsx.writeFile("translated_words.xlsx");
    console.log("Excel file generated successfully.");
  } catch (err) {
    console.error("Error to generate Excel file :", err);
  }
}

translateWords();

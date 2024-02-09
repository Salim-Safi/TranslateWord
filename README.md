# Deepl Translator for Anki

## Overview

This project allows for quick translation of English words to French using the Deepl API. The translated words are then saved in an Excel file for easy integration with Anki flashcards.

## Purpose

The primary aim of this project is to streamline the creation of Anki flashcards. By providing a list of English words, the script automatically translates them to French and organizes the results in a format suitable for importing into Anki.

## Getting Started

1. Install dependencies: `npm install`
2. Set up `.env` file with your Deepl API key.
3. Run the script: `npm start`

The translated words will be saved in the `translated_words.xlsx` file.

Feel free to customize the script according to your needs and contribute to its improvement!

## Dependencies

- `deepl-node` for translation
- `exceljs` for Excel file handling
- `dotenv` for managing API keys securely
- `progressbar` for visualizing progress
- `chalk` for colorful console output

## Author

Salim 

## License

This project is licensed under the [MIT License](LICENSE).

---

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Other configurations...
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // This is where the report will be saved
      overwrite: false, // Don't overwrite the results of a previous run
      html: true, // Don't generate an HTML file for each spec file
      json: true, // Do generate a JSON file for each spec file
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com', // Optional: set a base URL
  },
});
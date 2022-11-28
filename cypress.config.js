const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
		specPattern: "cypress/e2e/**/*.cy.{js,jsx,tx,tsx}",
		chromeWebSecurity: false
		},
    reporter: "mochawesome",
		reporterOptions: {
			reportDir: 'cypress/reports',
			overwrite: false,
			html: false,
			json: true
  },
});

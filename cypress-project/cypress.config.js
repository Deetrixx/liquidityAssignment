const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: "https://juice-shop.herokuapp.com/",
    specPattern: 'cypress-project/cypress/e2e/customerFeedback.spec.cy.js',
  },
});

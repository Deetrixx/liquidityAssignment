const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // integrationFolder:"/Users/dennisqa/Desktop/My Docs/TechAssingment/cypress-project/cypress/integration",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://www.imbankgroup.com/ke/",
    developer: "Charles Ondabu",
    version: "1.0.0",
    viewportWidth: 1280, 
    viewportHeight: 720,
  },
  
});

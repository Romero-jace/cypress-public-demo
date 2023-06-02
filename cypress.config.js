const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1600,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://en.wikipedia.org/wiki/Main_Page",
    experimentalStudio: true,
  },
});

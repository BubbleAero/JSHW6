const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      openMode: 2,
      runMode: 2
    },
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('Скриншот сохранен:', details.path);
      });
    },
  },
  env: {
    viewports: {
      laptop: { width: 1366, height: 768 },
      mobile: { width: 375, height: 667 }
    }
  },
  viewportWidth: process.env.CYPRESS_viewport
    ? require("./cypress.config.js").env.viewports[process.env.CYPRESS_viewport].width
    : 1366,
  viewportHeight: process.env.CYPRESS_viewport
    ? require("./cypress.config.js").env.viewports[process.env.CYPRESS_viewport].height
    : 768
});

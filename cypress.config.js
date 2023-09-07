const { defineConfig } = require("cypress");
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import addCucumberPreprocessorPlugin from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**.features",
    async setupNodeEvents(on, config) {
      const bundler = createBlunder({
        plugins: [createEsbuildPlugin(confug)],
      });
      on("file:preprocessor", blunder);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});

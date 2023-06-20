exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.oranum.com',
      show: true,
      browser: 'webkit',
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js',
  },
  mocha: {
    reporterOptions: {
      reportDir: 'output',
    },
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    mochawesome: {
      uniqueScreenshotNames: true,
    },
    allure: {
      enabled: true,
      outputDir: './output/allure-results',
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0,
  },
  {
    pattern: 'amOnPage',
    timeout: 300,
  },
  ],
  tests: './*_test.js',
  name: 'oranum-automation',
};


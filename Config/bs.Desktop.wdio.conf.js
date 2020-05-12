const wdioConf = require('./bs.base.wdio.conf').config;

exports.config = merge(wdioConf, {
  commonCapabilities: {
    build: process.env.BROWSERSTACK_BUILD_ID + '-Desktop',
    resolution: '1920x1080',
    'browserstack.selenium_version': '4.0.0-alpha-2',
  },
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'Chrome',
      browser_version: '78.0',
      os: 'Windows',
      os_version: '8.1',
      chromeOptions: {
        args: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--disable-web-security',
        ],
      },
    },
    {
      browserName: 'Firefox',
      os: 'Windows',
      os_version: '8.1',
    },
    {
      browserName: 'Edge',
      os: 'Windows',
      os_version: '10',
    },
    {
      browserName: 'Safari',
      browser_version: '12.0',
      os: 'OS X',
    },
  ],

  cucumberOpts: {
    tagExpression: 'not @ignore and not @mobile',
  },

  beforeScenario: function(uri, feature, scenario) {
    browser.maximizeWindow();
  },
});

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (let i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
});

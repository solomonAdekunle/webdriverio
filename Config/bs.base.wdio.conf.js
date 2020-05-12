const wdioConf = require('./local.wdio.conf').config;

exports.config = merge(wdioConf, {
  configName: 'bs',
  services: ['browserstack'],
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specFileRetries: 1,
  maxInstances: 10,
  commonCapabilities: {
    project: process.env.BROWSERSTACK_PROJECT_NAME,
    'browserstack.localIdentifier': process.env.LOCAL_IDENTIFIER,
    'browserstack.local': 'true',
    'browserstack.debug': 'true',
    'browserstack.console': 'errors',
    'browserstack.networkLogs': 'true',
  },

  before: function(capabilities, feature) {
    global.baseUrl = process.env.BASE_URL;
    global.isMobileSession = capabilities.real_mobile;
  },
});

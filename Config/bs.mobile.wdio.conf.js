const wdioConf = require('./bs.base.wdio.conf').config;

exports.config = merge(wdioConf, {

  commonCapabilities: {
    build: process.env.BROWSERSTACK_BUILD_ID + '-Mobile',
    'browserstack.appium_version': '1.16.0'
  },
  capabilities: [
    {
      os_version : "11",
      device : "iPhone 8 Plus",
      real_mobile : "true",
      browserName : "iPhone"
    },
    {
      os_version : "13",
      device : "iPhone XS",
      real_mobile : "true",
      browserName : "iPhone"
    },
    {
      os_version : "11",
      device : "iPad 6th",
      real_mobile : "true",
      browserName : "iPad"
    },
    {
      os_version : "6.0",
      device : "Samsung Galaxy S7",
      real_mobile : "true",
      browserName : "Android"
    },
    {
      os_version : "9.0",
      device : "Samsung Galaxy S10",
      real_mobile : "true",
      browserName : "Android"
    },
    {
      os_version : "9.0",
      device : "Samsung Galaxy Tab S5e",
      real_mobile : "true",
      browserName : "Android"
    }
  ],
  cucumberOpts: {
    tagExpression: 'not @ignore and not @desktop',
  }
});

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (let i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
});

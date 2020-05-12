
const { logFeatureName, logTestName, logStep } = require('../support/logger');
const { setSessionName } = require('../support/browserstackHelper');
exports.config = {

    runner: 'local',
    specs: ['./features/**/*.feature'],
    logLevel: 'info',

    screenshotPath: './webdriverio-lesson/errorScreenshots/',

    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'cucumber',
    cucumberOpts: {
        compiler: ['js:babel-register'],
        requireModule: ['@babel/register'],
        require: ['./step-definitions/*.js'],
        format: ['pretty'],
        colors: true,
        timeout: 60000,
        tagExpression: 'not @ignore',
    },

    reporters: ['spec',
        [
            'allure',
            {
                outputDir: './webdriverio-lesson/reports/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    beforeFeature: function (uri, feature) {
        logFeatureName(feature.document.feature.name);

        if (this.configName === 'bs') {
            setSessionName(feature.document.feature.name);
        }
    },

    beforeScenario: function (uri, feature, scenario) {
        logTestName(scenario.name);
    },

    beforeStep: function (uri, feature, stepData) {
        logStep(stepData.step.text);
    }
};
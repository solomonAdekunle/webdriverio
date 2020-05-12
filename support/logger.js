const info = message => {
    console.info(message);
};

module.exports = {
    info,

    logFeatureName: featureName => {
        info(`=====================  Feature: '${featureName}' =====================`);
    },

    logTestName: testName => {
        info(`=====================  Test case: '${testName}' =====================`);
    },

    logTestEnd: (result, scenarioName) => {
        if (result.status === 'passed') {
            info(`***** Test case: '${scenarioName}' passed! *****`);
        } else {
            browser.takeScreenshot();
            info(`>>>>>>>> TEST CASE: '${scenarioName}' FAILED <<<<<<<<`);
        }
    },

    logStep: stepName => {
        info(`--------==[ [Step]: ${stepName} ]==--------`);
    },
};

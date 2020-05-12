const request = require('request-promise-native');

module.exports = {
    setSessionName: sessionName => {
        const requestOptions = {
            url: `https://api.browserstack.com/automate/sessions/${browser.sessionId}.json`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: `{"name":"${sessionName}"}`,
            auth: {
                user: process.env.BROWSERSTACK_USERNAME,
                pass: process.env.BROWSERSTACK_ACCESS_KEY,
            },
        };
        request(requestOptions);
    }
};
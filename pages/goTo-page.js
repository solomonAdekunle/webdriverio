const config = require('../configUrls.js');

const region = process.env.REGION;
const env = process.env.ENV;

const getUrl = config[env][region].url;
const getUrlLogin = config[env][region].loginURL;

class GoTo {

    async goToDesktop_HomePage() {
        await browser.navigateTo(getUrl);
    }

    async goToDesktop_LoginPage() {
        await browser.navigateTo(getUrlLogin);

    }
}
module.exports.GoTo = GoTo;

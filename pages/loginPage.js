const longinText = "h1.heading_1J5QW";
const checkRSLogo = "a[data-automation-id='login-logo']";
const usernameTextbox = "input#username";
const passwordTextBox = "input#password";
const loginButton = "button[data-automation-id='login-submit-button']";


class LoginPage {

    async validateLoginpageTitle() {
        return await longinText.toString();

    }

    async isRSLogoDisplayed() {
        return await checkRSLogo.toString();
    }

    async usernameField() {
        return await usernameTextbox.toString();
    }
    async passwordField() {
        return await passwordTextBox.toString();
    }

    async loginButton() {
        return await loginButton.toString();
    }
}
module.exports.LoginPage = LoginPage;
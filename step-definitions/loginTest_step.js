const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const config = require('../configUrls.js');
const basePage = require('../pages/basePage');
const { GoTo } = require('../pages/goTo-page');


const { LoginPage } = require('../pages/loginPage');
var region = process.env.REGION;
var env = process.env.ENV;
var getValue = config[env][region].properties; // this enable to you to read from properties files
const getUserName= getValue.login_username;
const getPassword= getValue.login_password;
const getLoginLabel = getValue.login_Title_label;
const headerURL = new GoTo(),
    loginPage = new LoginPage();



Given(/^I go to Login page$/, async () => {
   await headerURL.goToDesktop_LoginPage();

});

When(/^I enter username$/, async () => {
    myUserNameTextBox  = (await loginPage.usernameField());
    await basePage.sendText(myUserNameTextBox, getUserName);
       
  });

  When(/^I enter password$/, async () => {
    const myPasswordTextBox = (await loginPage.passwordField());
    await basePage.sendText(myPasswordTextBox,getPassword);
  });

  When(/^I click on login button/, async () => {
    const clickMyLoginButton = (await loginPage.loginButton());
    await basePage.clickElement(clickMyLoginButton);
     
  
  });


Then(/^I should see RS Logo$/, async () => { 
   const checkLogo = await loginPage.isRSLogoDisplayed();
    await basePage.checkElementVisibleEqualTrue(checkLogo);
    // expect(await checkLogo).equal(true);

});

Then(/^I should see login text$/, async () => {
    const loginTextLabel = await loginPage.validateLoginpageTitle();
    await basePage.validateTextEqual(loginTextLabel,getLoginLabel);
});


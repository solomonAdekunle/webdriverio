//import { Given } from "cucumber";
const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const config = require('../configUrls.js');
const basePage = require('../pages/basePage');
const { GoTo } = require('../pages/goTo-page');
const { HeaderComponents } = require('../pages/newHeaderPage');
const { LoginPage } = require('../pages/loginPage');
var region = process.env.REGION;
var env = process.env.ENV;
var getValue = config[env][region].properties; // this enable to you to read from properties files

const headerURL = new GoTo(),
    newHeader = new HeaderComponents(),
    loginPage = new LoginPage();



Given(/^I go to home page$/, function () {
    headerURL.goToDesktop_HomePage()();


});


When(/^I click on login link$/, async () => {
    const clickMyLoginLink = (await newHeader.clickLoginLink());
    await basePage.clickElement(clickMyLoginLink, 2);


});


Then(/^I should navigate to Login page$/, async () => {
    expect(await browser.getUrl()).contains("/login");

});

Then(/^I should see a logOut link$/, async () => {
    let myLoginOutLink = await newHeader.logOutLink();
    await basePage.waitForElement(myLoginOutLink);
    await basePage.checkElementVisibleEqualTrue(myLoginOutLink);

});






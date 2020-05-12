const expect = require('chai').expect;


const clickElement = async (selector) => {
  const el = await $(selector);
  await el.click();

};

const sendText = async (selector, value) => {
  const el = await $(selector);
  await el.setValue(value);
};

const validateTextEqual = async (selector, value) => {
  const el = await $(selector);
  expect(await el.getText()).eql(value);
};

const checkElementVisibleEqualTrue = async (selector, value) => {
  const el = await $(selector);
  expect(await el.isDisplayed()).equal(true);
};

const checkElementIsNotVisible = async (selector, value) => {
  const el = await $(selector);
  expect(await el.isDisplayed()).equal(false);
};
const validateAttributeValuesContains = async (selector, attribute, value) => {
  const el = await $(selector);
  expect(await el.getAttribute(attribute)).contains(value);
};
const validateListOfAttributeValues = async (selector, attribute, value) => {
  const allListElements = $$(selector);
  expect(await (await allListElements).map(function (el) {
    return el.getAttribute(value);
  }));
};
  const waitForElement= async (selector)=>{
    const el = await $(selector);
   await el.waitForExist(10000);
  };
    
  const getTextFromElements = async (selector)=>{
    const allListElements = await $$(selector);
    expect(await (allListElements).map(function(el){
      return el.getAttribute("innerText");
    }));
  };
  const checkCurrentUrlContains = async(value) =>{
    expect(await browser.getUrl()).contains(value);
  };
  const checkTitle = async(value) =>{
    const title = await browser.getTitle();
    expect(await title).eql(value);

  };

  const getElementByIndex = async(selector, index)=>{
    const el = await $(selector);
    await el.selectByIndex(value);

  };
 const checkListOfElements= async (selector, size)=>{
   const el = await $(selector);
   expect(await el.getSize()).eql(size);

 };
  
module.exports = {
  clickElement,
  validateTextEqual,
  sendText,
  checkElementVisibleEqualTrue,
  checkElementIsNotVisible,
  validateAttributeValuesContains,
  validateListOfAttributeValues,
  waitForElement,
  getTextFromElements,
  checkCurrentUrlContains,
  checkTitle,
  checkListOfElements,
  getElementByIndex,
};
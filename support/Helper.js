const {GoTo} = require('../pages/goTo-page');
const {NewHeaderPage} = require('../pages/homePage.js');


class Helper{
    constructor () {
        this.goTo_page = new GoTo();
        this.homePage = new NewHeaderPage();

}
}
module.exports.Helper= Helper;
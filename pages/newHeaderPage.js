const loginLink = ".loginName a:nth-child(1)";
const loginL = ".loginName a";
const logOutLink = "a#js-logInOut";


class HeaderComponents {

    async clickLoginLink() {
        return loginL.toString();

    }

    async logOutLink() {
        return  logOutLink.toString();
    }
}
module.exports.HeaderComponents = HeaderComponents;
const atLocale = require('./properties/at');
const auLocale = require('./properties/au');
const befrLocale = require('./properties/befr');
const benlLocale = require('./properties/benl');
const chLocale = require('./properties/ch');
const cnLocale = require('./properties/cn');
const czLocale = require('./properties/cz');
const deLocale = require('./properties/de');
const dechLocale = require('./properties/dech');
const dkLocale = require('./properties/dk');
const esLocale = require('./properties/es');
const frLocale = require('./properties/fr');
const hkenLocale = require('./properties/hken');
const hkcnLocale = require('./properties/hkcn');
const huLocale = require('./properties/hu');
const ieLocale = require('./properties/ie');
const itLocale = require('./properties/it');
const jpLocale = require('./properties/jp');
const krLocale = require('./properties/kr');
const myLocale = require('./properties/my');
const nlLocale = require('./properties/nl');
const noLocale = require('./properties/no');
const nzLocale = require('./properties/nz');
const phLocale = require('./properties/ph');
const plLocale = require('./properties/pl');
const ptLocale = require('./properties/pt');
const seLocale = require('./properties/se');
const sgLocale = require('./properties/sg');
const thLocale = require('./properties/th');
const twenLocale = require('./properties/twen');
const twcnLocale = require('./properties/twcn');
const ukLocale = require('./properties/uk');
const zaLocale = require('./properties/za');


module.exports = {

    prod: {
        jp: {
            url: "https://jp.rs-online.com/web/",
            loginURL: "https://jp.rs-online.com/login",
            properties: jpLocale
        },
        uk: {
            url: "https://uk.rs-online.com/",
            loginURL: "https://uk.rs-online.com/login",
            properties: ukLocale
        }

    },
    "nonprod-ci": {
        uk: {
            url: process.env.URL,
            properties: ukLocale
        },
        de: {
            url: process.env.URL,
            properties: deLocale
        },
        jp: {
            url: process.env.URL,
            properties: jpLocale
        },

    }
};
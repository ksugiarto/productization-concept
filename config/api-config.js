'use strict';

var env = process.env.NODE_ENV || 'development';
var baseVersion = require(`../package.json`).version;
var siteEnv = require(`./presets/_${ process.env.SITE_ENV }`);
console.log(`== Base Version: ${ baseVersion }`);
console.log(`== ENV_SET: ${ process.env.SITE_ENV }-${ siteEnv.version }`);

module.exports = function () {
  var api = siteEnv.env[`${env}`];

  return {
    env: env,
    baseVersion: baseVersion,
    siteName: siteEnv.name,
    siteVersion: siteEnv.version,
    isPrivate: siteEnv.isPrivate,
    logo: siteEnv.logo,
    logoWhite: siteEnv.logoWhite,
    aboutUrl: siteEnv.aboutUrl,
    
    hostUrl: api.hostUrl,

    // ========[ LANDING PAGE ]========
    getProjects: `${ api.hostUrl }${ siteEnv.api.getProjects }?name=&authz_token=${ api.authz_token }`,
    getCustomers: `${ api.hostUrl }${ siteEnv.api.getCustomers }?name=&authz_token=${ api.authz_token }`,
  }
}();

/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612145078522_1412';

  // add your middleware config here
  config.middleware = ['todo'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  userConfig.security = {
    csrf: false,
  }
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  userConfig.mysql = {
    client:{
      host:'localhost',
      port:3306,
      user:'root',
      password:'ly200316',
      database:'demo1'
    }
  }
  return {
    ...config,
    ...userConfig,
  };
};

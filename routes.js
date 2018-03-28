'use strict';

var home = require('./controllers/home_controller');

module.exports = (app) => {
  app.use('/', home);
};

'use strict';

var express = require('express');
var request = require('request');
var api = require('../config/api-config');
var router = express.Router();

function checkPrivate (req, res, next) {
  if (api.isPrivate) {
    // Private Company detected
    next();
  } else {
    // Public Company detected
    next('route');
  }
}

/* GET home page. */
router.get('/', checkPrivate, (req, res, next) => {
  console.log("=== GET / ===");

  // GET Customers
  request.get({
    uri: api.getCustomers,
    'Content-Type': 'application/json',
  }, (error, response, result) => {
    // Call index_private
    res.render('homes/index_private', {
      siteName: api.siteName,
      content: JSON.stringify(result),
      logo: api.logo,
      logoWhite: api.logoWhite
    })
  });
});

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("=== GET / ===");

  // GET Customers
  request.get({
    uri: api.getProjects,
    'Content-Type': 'application/json',
  }, (error, response, result) => {
    // Call index_public
    res.render('homes/index_public', {
      siteName: api.siteName,
      content: JSON.stringify(result),
      logo: api.logo,
      logoWhite: api.logoWhite
    })
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');
var env = require('dotenv').config();
var darkSkySecretKey = process.env.DARK_SKY_SECRET;

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://api.darksky.net/forecast/' + darkSkySecretKey + '/32.8288185,-116.9500564',function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

module.exports = router;
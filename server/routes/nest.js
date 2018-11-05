var express = require('express');
var router = express.Router();
var request = require('request');
var env = require('dotenv').config();
var nest_token = process.env.NEST_TOKEN;

/* GET home page. */
router.get('/', function(req, res) {
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': nest_token
    },
    uri: 'https://developer-api.nest.com',
    method: 'GET'
  }, function (error, response, body) {
    if(!error){
      res.send(body);
    } else {
      res.send(error);
    }
  });
});

module.exports = router;
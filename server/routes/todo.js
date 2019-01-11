var express = require('express');
var router = express.Router();
var request = require('request');
var env = require('dotenv').config();
var todoistToken = process.env.TODOIST_TOKEN;

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    headers:{
      'Content-Type': 'application/json',
      'Authorization': todoistToken
    },
    uri: 'https://beta.todoist.com/API/v8/tasks',
    method: 'GET'
  }, function(error, response, body){
    if(!error){
      res.send(body);
      console.log(body);
    } else {
      res.send(error);
    }
  })
});

router.post('/:id', function(req, res){
  request({
    method: 'post',
    url: 'https://beta.todoist.com/API/v8/tasks/' + req.params.id + '/close',
    headers:{
      'Authorization': todoistToken
    }
  }, function(error, response, body){
    if(error){
      res.send(error);
      console.log(error);
    } else {
      res.send(body)
      console.log(body)
    }
  })
});

module.exports = router;
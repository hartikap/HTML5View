/**
  * This file is a router for User resource
  * version:0.0.1
  * Author: Pekka Hartikainen
  * Description: Created this new file
  */

var express = require("express");
var query = require('./queries');

var router = express.Router();

// This router handles a request to uri localhost:3000/friends/login
router.post('/login', function(req,res) {
    
    
});

// This router handles a request to uri localhost:3000/friends/register
router.post('/register', function(req,res) {
    
    query.registerFriend(req,res);
    
});


module.exports = router;
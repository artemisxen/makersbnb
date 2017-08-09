var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.post('/', function(req, res) {
  // res.send('respond with a resource');
  models.User.create({
    name: req.body.name,
    username: req.body.username,
    mobileNo: req.body.phone,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.inputPassword
     })
     .then(function(){
       res.redirect('/');
     });
});

module.exports = router;

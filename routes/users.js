var express = require('express');
var router = express.Router();
var models = require('../models');

/* POST new user info */
router.post('/', function(req, res) {

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

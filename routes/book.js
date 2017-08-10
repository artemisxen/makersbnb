var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET book page. */
router.get('/', function(req, res, next) {
  models.Space.findAll().then(function(spaces){
    console.log(spaces);
    res.render('pages/book', {
      spaces: spaces
    });
  });
});

module.exports = router;

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

router.post('/', function (req, res) {
  /*
   - get the space name and potential booking date from the params
   - check the availabilty table to check that the booking is available
   - add a new entry to the booking table to record the interest in booking the space
   */
});

module.exports = router;

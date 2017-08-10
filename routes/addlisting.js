var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET add-listing page. */
router.get('/', function(req, res, next) {
  res.render('pages/addlisting');
});

/* POST new listing to Space */
router.post('/', function(req, res) {
  models.Space.create({
    building: req.body.building,
    street: req.body.street,
    postcode: req.body.postcode,
    description: req.body.description,
    price: req.body.price,
    title: req.body.title,
    imagePath: req.body.imagePath
    })
     .then(function(){
       res.redirect('/book');
     });
});

module.exports = router;

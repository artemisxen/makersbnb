var express = require('express');
var router = express.Router();

/* GET book page. */
router.get('/', function(req, res, next) {
  res.render('pages/book');
});

module.exports = router;

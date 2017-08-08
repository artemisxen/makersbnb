var express = require('express');
var router = express.Router();

/* GET add-listing page. */
router.get('/', function(req, res, next) {
  res.render('pages/addlisting');
});

module.exports = router;

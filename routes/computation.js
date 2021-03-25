var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let randsha=Math.floor(Math.random()*100)
  res.render('compute', {result:'exponent function applied to '+randsha+' is '+Math.exp(randsha)});
});

module.exports = router;

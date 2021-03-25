var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let randsha=Math.floor(Math.random()*100)
  res.render('compute', {result:'atan function applied to '+randsha+' is '+Math.atan(randsha)});
});

module.exports = router;

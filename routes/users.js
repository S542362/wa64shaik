var express = require('express');
var router = express.Router();
var icecream=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  icecream = icecream+1;
  res.send('User accesses are: '+icecream);
});

module.exports = router;

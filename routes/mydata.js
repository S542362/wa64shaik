var express = require('express');
var router = express.Router();
var icecream =0; 
/* GET home page. */
router.get('/', function(req, res, next) {
    icecream=icecream +1;
  res.render('mydata', { title : 'shabnam shaik' });
});

module.exports = router;

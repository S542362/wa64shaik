var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    icecream=icecream +1;
  res.render('mydata', { title : 'shabnam shaik'});
});

module.exports = router;

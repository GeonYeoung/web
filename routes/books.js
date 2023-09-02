var express = require('express');
var router = express.Router();

/* GET 도서관리 page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '도서관리',name:"이름" });  
});

module.exports = router;

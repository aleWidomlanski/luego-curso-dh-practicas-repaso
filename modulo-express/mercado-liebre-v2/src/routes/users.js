var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Bienvenido al login');
});
router.get('/register', function(req, res, next) {
  res.send('Bienvenido al register');
});

module.exports = router;

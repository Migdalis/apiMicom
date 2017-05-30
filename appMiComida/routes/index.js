var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi Comida | Login' });
});
/* PAGINA DE REGISTRO */
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro | Mi Comida' });
});


module.exports = router;

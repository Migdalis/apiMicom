var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login | Mi Comida' });
});
/* PAGINA DE REGISTRO */
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro | Mi Comida' });
});

/* PAGINA PRINCIPAL */
router.get('/principal', function(req, res, next) {
  res.render('principal', { title: 'Inicio | Mi Comida' });
});

/* PAGINA AJUSTES */
router.get('/ajustes', function(req, res, next) {
  res.render('ajustes', { title: 'Inicio | Mi Comida' });
});

module.exports = router;

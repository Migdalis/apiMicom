var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController.js');

/*
 * GET
 */
router.get('/', usuarioController.list);

/*
 * GET
 */
router.get('/:id', usuarioController.show);

/*
 * POST
 */
router.post('/new', usuarioController.create);
router.post('/login', usuarioController.login);

/*
 * PUT
 */
router.put('/:id', usuarioController.update);
//router.put('/addsuscriptor', usuarioController.updatesuscriptor);
//router.put('/addcategoria', usuarioController.updatecategoria);

/*
 * DELETE
 */
router.delete('/:id', usuarioController.remove);

module.exports = router;

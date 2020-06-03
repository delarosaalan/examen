const express = require('express');
// vamos a router a los pintores
let pintor = require('../controllers/PintoresController.js');
// creamos nuestrass rutas
let router = express.Router();

router.get('/', pintor.list);
module.exports = router;

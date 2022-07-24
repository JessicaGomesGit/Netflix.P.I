var express = require('express');
var router = express.Router();
const controller = require("../controllers/PerfilController");
const controllerUsuaris = require("../controllers/usuariosControlers");
const controllerSeries = require("../controllers/series2controller");

/* GET users listing. */
router.get('/', controllerUsuaris.index);

router.get('/', controllerSeries.index);

router.get("/perfil", controller.index )
module.exports = router;


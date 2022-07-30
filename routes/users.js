var express = require('express');
var router = express.Router();
const controllerLogin = require("../controllers/LoginController")
const controller = require("../controllers/PerfilController");
const controllerUsuarios = require("../controllers/usuariosControlers");
const controllerSeries = require("../controllers/series2controller");

//Middleware
const validation = require("../Middleware/validadeRegisterMiddleware.js");
const uploadFile= require("../Middleware/multerMiddleware.js");


//formulario de Registro
router.get('register', UsuariosController.register);

//processando o registro
router.post('register', UsuariosController.register);


/* GET users listing. */

router.get("/login", controllerLogin.index );

router.get('/', controllerUsuarios.index);

router.get('/', controllerSeries.index);

router.get("/perfil", controller.index );

module.exports = router;


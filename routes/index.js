var express = require('express');
var router = express.Router();
let auth = require('../Middleware/auth');
const controller = require("../controllers/HomeController");
const controllerLogin = require("../controllers/LoginController")
const controllerDestaque = require("../controllers/DestaqueController")
const controllerPagamento = require("../controllers/PagamentoController1");
const controllerPagamento2 = require("../controllers/PagamentoController2");
const controllerPagamento3 = require("../controllers/PagamentoController3");
const controllerFilmes = require('../controllers/Filmes1Controller');
const seriesController = require("../controllers/seriesController");
const Perfilcontroller = require ("../controllers/PerfilController");
const series2Controller = require ("../controllers/series2controller");
const filmesApiController = require ("../controllers/filmesApiController");
const searchController = require ("../controllers/searchController")

router.get("/", controller.index )

router.get("/login", controllerLogin.index )

router.get("/destaque", controllerDestaque.index )

router.get("/pagamento1", controllerPagamento.index )

router.get("/pagamento2", controllerPagamento2.index )

router.get("/pagamento3", controllerPagamento3.index )

router.get ("/filmes" , controllerFilmes.index ) 
router.get ("/filmes/minha-lista/:idFilme/:idUsuario" , controllerFilmes.addFavorito ) 

router.get("/series", seriesController.index )
router.get ("/series/minha-lista/:idSerie/:idUsuario" , seriesController.addFavorito ) 

router.get("/api/series", series2Controller.index )
router.get("/api/filmes", filmesApiController.getFilmes )

router.get("/perfil" , Perfilcontroller.index )

router.get("/search", searchController.index )



module.exports = router;

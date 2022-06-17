var express = require('express');
var router = express.Router();
const controller = require("../controllers/HomeController");
const controllerLogin = require("../controllers/LoginController")
const controllerDestaque = require("../controllers/DestaqueController")
const controllerPagamento = require("../controllers/PagamentoController1");
const controllerPagamento2 = require("../controllers/PagamentoController2");
const controllerPagamento3 = require("../controllers/PagamentoController3");
const controllerFilmes = require('../controllers/Filmes1Controller');
const seriesController = require("../controllers/seriesController");

/* GET home page. */

router.get("/", controller.index )

router.get("/login", controllerLogin.index )

router.get("/destaque", controllerDestaque.index )

router.get("/pagamento1", controllerPagamento.index )

router.get("/pagamento2", controllerPagamento2.index )

router.get("/pagamento3", controllerPagamento3.index )

router.get ("/filmes" , controllerFilmes.index ) 

router.get("/series", seriesController.index )

module.exports = router;

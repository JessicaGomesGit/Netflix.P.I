var express = require('express');
var router = express.Router();
const controller = require("../controllers/HomeController");
const controllerLogin = require("../controllers/LoginController")
const controllerDestaque = require("../controllers/DestaqueController")
const controllerPagamento = require("../controllers/PagamentoController1");

/* GET home page. */

router.get("/", controller.index )

router.get("/login", controllerLogin.index )

router.get("/destaque", controllerDestaque.index )

router.get("/pagamento1", controllerPagamento.index )

module.exports = router;

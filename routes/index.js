var express = require('express');
var router = express.Router();
const controller = require("../controllers/HomeController");
const controllerLogin = require("../controllers/LoginController")
const controllerDestaque = require("../controllers/DestaqueController")
const controllerPagamento = require("../controllers/PagamentoController1");
const controllerPagamento2 = require("../controllers/PagamentoController2");
const controllerPagamento3 = require("../controllers/PagamentoController3");
const controlleradmin = require("../controllers/adminController");
/* GET home page. */

router.get("/", controller.index )

router.get("/login", controllerLogin.index )

router.get("/destaque", controllerDestaque.index )

router.get("/pagamento1", controllerPagamento.index )

router.get("/pagamento2", controllerPagamento2.index )

router.get("/pagamento3", controllerPagamento3.index )

router.get ("/admin", controlleradmin.index )


module.exports = router;

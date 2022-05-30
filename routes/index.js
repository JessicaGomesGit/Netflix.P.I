var express = require('express');
var router = express.Router();
const controller = require("../controllers/HomeController");
const controllerLogin = require("../controllers/LoginController")

/* GET home page. */

router.get("/", controller.index )

router.get("/login", controllerLogin.index )

module.exports = router;

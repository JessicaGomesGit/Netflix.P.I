var express = require('express');
var router = express.Router();
const controller = require("../controllers/PerfilController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 router.get("/perfil", controller.index )
module.exports = router;

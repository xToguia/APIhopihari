const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", () => {console.log("Login de rota")});
router.put("/:id", usuariosController.atualizarUsuario);
router.post("/id", usuariosController.cadastrarUsuario);

module.exports = router;
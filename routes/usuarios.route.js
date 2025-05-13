const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", usuariosController.login);
router.put("/:id", usuariosController.atualizarUsuario);
router.post("/cadastro", usuariosController.cadastro);

module.exports = router;
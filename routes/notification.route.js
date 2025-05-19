const express = require('express');
const login = require('../middlewares/login');
const { getNotificacoes } = require('../controllers/notification.controller');

const router = express.Router();

// Rota GET para obter notificações
router.get('/notifications', login.require, getNotificacoes);

module.exports = router;
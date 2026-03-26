const express = require('express')
const menuController = require('../controller/menuController')

const router = express.Router()

router.get('/menuPizzas', menuController.listarPizzas)
router.post('/menuPizzas', menuController.adicionarPizzas)

module.exports = router;
const express = require('express')
const menuController = require('../controller/menuController')

const router = express.Router()

router.get('/menuPizzas', menuController.listarPizzas)

module.exports = router;
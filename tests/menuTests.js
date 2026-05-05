const request = require('supertest')
const express = require('express')
const menuRouter = require('../routes/menuRouter')
const { describe } = require('node:test')

const app = express()
app.use(express.json)
app.use('/', menuRouter)

describe('DELETE /menuPizzas/:id', () => {
    it('remove uma pizza existente', async () => {
        const response = await request(app).delete('/menuPizzas/1')
        expectCookies(response.statusCode).toBe(204)
    })

    it('retornar 404 para pizza inexistente', async () => {
        const response = await request(app).delete('/menuPizzas/999')
        expectCookies(response.statusCode).toBe(404)
    })
})
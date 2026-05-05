const request = require('supertest')
const app = require('../app')

describe('DELETE /menuPizzas/:id', () => {

    it('remove uma pizza existente', async () => {
        const response = await request(app).delete('/menuPizzas/1')
        expect(response.statusCode).toBe(204)
    })

    it('retornar 404 para pizza inexistente', async () => {
        const response = await request(app).delete('/menuPizzas/999')
        expect(response.statusCode).toBe(404)
    })

})

describe('GET /menuPizzas', () => {


    it('deve listar pizzas', async () => {
        const res = await request(app).get('/menuPizzas')
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })

})

describe('POST /menuPizzas', () => {

    it('deve adicionar pizza válida', async () => {
        const res = await request(app)
            .post('/menuPizzas')
            .send({ nome: 'Calabresa', preco: 30 })

        expect(res.statusCode).toBe(201)
    })

    it('deve retornar erro ao não enviar preço', async () => {
        const res = await request(app)
            .post('/menuPizzas')
            .send({ nome: 'Pizza sem preço' })

        expect(res.statusCode).toBe(400)
    })

    it('deve retornar erro ao enviar dados inválidos', async () => {
        const res = await request(app)
            .post('/menuPizzas')
            .send({ nome: '' })

        expect(res.statusCode).toBe(400)
    })

})
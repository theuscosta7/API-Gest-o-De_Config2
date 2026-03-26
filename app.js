const express = require('express')
const cors = require('cors')
const menuRouter = require('./routes/menuRouter')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', menuRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Menu rodando na porta: ${PORT}`)
})

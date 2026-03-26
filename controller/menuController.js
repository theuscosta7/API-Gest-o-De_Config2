const menuPizzas = [
    { id: 1, nome: 'Frango com Catupiry e Bacon', preco: 49.90 },
    { id: 2, nome: 'Lombo Especial', preco: 59.90 },
    { id: 3, nome: 'Chocolate Nevado', preco: 47.90 },
]

exports.listarPizzas = (req, res) => {
    res.status(200).json(menuPizzas)
}

exports.adicionarPizzas = (req, res) => {
    const novaPizza = req.body

    if (!novaPizza.nome || !novaPizza.preco) {
        return res.status(400).json({ mensagem: "Nome e Preço são obrigatórios!" })
    }

    menuPizzas.push(novaPizza)
    res.status(201).json({ mensagem: "Pizza cadastrada com sucesso!", pizza: novaPizza })
}
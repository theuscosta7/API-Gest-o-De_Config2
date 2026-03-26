const menuPizzas = [
    { id: 1, nome: 'Frango com Catupiry e Bacon', preco: 49.90 },
    { id: 2, nome: 'Lombo Especial', preco: 59.90 },
    { id: 3, nome: 'Chocolate Nevado', preco: 47.90 },
]

exports.listarPizzas = (req, res) => {
    res.status(200).json(menuPizzas)
}


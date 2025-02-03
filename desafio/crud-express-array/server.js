const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let itens = [
    { id: 1, nome: 'xbox one', descricao: 'console de videogame', preco: 1500 },
    { id: 2, nome: 'ps4', descricao: 'console de videogame', preco: 1000 },   
    { id: 3, nome: 'nintendo switch', descricao: 'console de videogame', preco: 1500 }
];

//Lista todos os itens 

app.get('/itens', (req, res) => {
    res.json(itens);
});

//Lista os itens pelo id
app.get("/item/:id", (req, res) => {
    const item = itens.find(i => i.id ===
        parseInt(req.params.id));
    if(!item) return
    res.status(404).json({ message: 'Item não encontrado'});
        res.json(item);
});

//Adiciona um novo item 
app.post('/itens', (req, res) => {
    const { nome, descricao, preco} = req.body;

    if (!nome || !descricao || !preco) {
        return res.status(400).json({
            message: 'Nome, descrição e preço são obrigatórios'});
    }

const novoItem = {
    id: itens.length ?
    itens[itens.length - 1].id + 1 : 1,
     nome, descricao, preco 
};

itens.push(novoItem);
res.status(201).json(novoItem);

});

//Atualizar um item pelo id
app.put("itens/:id", (req,res) => {
    const {nome, descricao, preco} = req.body;
    const itemIndex = itens.findIndex(i =>
        i.id === parseInt(req.params.id));

      if (itemIndex === -1) {
        return
    res.status(404).json({ message: "Item não encontrado"});    
      }

      itens[itemIndex] =
      {...itens[itemIndex], nome, descricao, preco};
       res.json(items[itemIndex]);

});

// Deleta item pelo id
app.delete("/itens/:id", (req, res) => {
    const itemIndex = itens.findIndex(i =>
        i.id === parseInt(req.params.id));

    if (itemIndex === -1) {
        res.status(404).json({ message: "Item não encontrado"});
    }

    itens.splice(itemIndex, 1);
    res.status(204).send();
});

//Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


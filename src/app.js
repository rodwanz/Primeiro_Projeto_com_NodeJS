import express from 'express'
const app = express()
app.use(express.json())

const selecoes = [
    {id:1, selecao: 'Brasil', grupo: "G"},
    {id:2, selecao: 'Suíça', grupo: "G"},
    {id:3, selecao: 'Sérvia', grupo: "G"},
    {id:4, selecao: 'Camarões', grupo: "G"},
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
    res.send('Iniciando, dando passos largos com funções!')
})

app.get('/selecoes', (req, res) =>{
    res.status(200).send (selecoes)
})

app.get('/selecoes/:id', (req, res) =>{
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send ("Seleção cadastrada com sucesso!")
})

app.delete('/selecoes/:id', (req, res) =>{
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

export default app

import express from 'express';

const app = express();

//mock
const selecoes = [
    {id: 1, selecao: "Brasil", grupo: "G"},
    {id: 2, selecao: "Espanha", grupo: "D" },
    {id: 3, selecao: "Argentina", grupo: "E" },
    {id: 4, selecao: "Alemanha", grupo: "E"},
    {id: 5, selecao: "Colombia", grupo: "G"}
]

//criar rota padrão ou raíz
app.get('/', (req, res) => {
    res.send('CURSO DE NODE JS!')
});

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes)
})


export default app

import app from './api-rest/src/app.js'

const port = 3001;

//escutar a porta 3001
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});


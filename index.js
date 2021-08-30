const express = require('express');
const bodyParser = require ('body-parser')
const app = express();

app.use(bodyParser.json());

express

const port = 3000;

const mensagens = [
  "Primeira mensagem",
  "Segunda mensagem"
]

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/mensagens', (req, res) => {
    res.send(mensagens);
  });

  app.post('/mensagens', (req, res) => {
    const mensagens = req.body.texto;

    mensagens.push(mensagens);

    res.send('mensagem criada com sucesso');
  });

app.listen(port, () => {
  console.info('Servidor rodando em http://localhost:3000' + port);
});

//ler individual

app.get('/mensaegns/:id', (req, res) => {
  console.log(req.params);
  res.send('Ler individual por ID');
});
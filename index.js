////////////////////////////////////////////////
// Dependencias
///////////////////////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid/v4');

///////////////////////////////////////////////
// Setup
///////////////////////////////////////////////
var app = express();
const PORT = 3000;

app.set("json spaces", 4);
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//************************************************************************************
// arqui estamos criadno nossa lista temporária que ira simular nosso Banco de Dados
//************************************************************************************
tasks = Array.apply(null, Array(5)).map( () => {
        return {
                "id": uuid(),
                "name": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
});

///////////////////////////////////////////////
// Routes 
///////////////////////////////////////////////
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    let id = req.params.id;
    let task = tasks.filter(task => task.id === id)[0];
    res.json(task);
});  

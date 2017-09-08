var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid/v4');

var app = express();
const PORT = 3000;

app.set("json spaces", 4);
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

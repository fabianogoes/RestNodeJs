var express = require('express');
var consign = require('consign');
var app = express();

consign()
    .include('./config/middlewares.js')
    .then('./config/boot.js')
    .then('models')
    .then('controllers')
    .into(app);
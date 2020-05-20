const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
//permite enviar dados em formato de json
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology: true});
//Para requisitar todos os modelos criados é necessario chamar a biblioteca requireDir e puxar todo o diretório de modelos.
requireDir('./SRC/Models');

// 'use' serve para pegar todas as requisições feitas, não importa se é get,set e blablabla, e sera enviado para o arquivo routes aonde lá sera tratado o que sera feito com cada tipo de requisição. 
app.use('/api', require("./SRC/routes"));


app.listen('7777');

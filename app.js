'use strict';

var express = require('express');
var server = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var RotaAutenticacao = require('./rotas/rotaautenticacao.js');
var RotaCliente = require('./rotas/rotacliente.js');
var RotaEmpresa = require('./rotas/rotaempresa.js');
var RotaEntregador = require('./rotas/rotaentregador.js');
var RotaPedido = require('./rotas/rotapedido.js');
var RotaProduto = require('./rotas/rotaproduto.js');
var RotaUsuario = require('./rotas/rotausuario.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tcc_diego', function (error) {
    if (error) {
        console.log('Erro ao conectar no mongodb: ' + error);
    }
});

server.use(cookieParser());
server.use('/api/autenticacao', RotaAutenticacao(express, bodyParser));
server.use('/api/cliente', RotaCliente(express, bodyParser));
server.use('/api/empresa', RotaEmpresa(express, bodyParser));
server.use('/api/entregador', RotaEntregador(express, bodyParser));
server.use('/api/pedido', RotaPedido(express, bodyParser));
server.use('/api/produto', RotaProduto(express, bodyParser));
server.use('/api/usuario', RotaUsuario(express, bodyParser));
server.use('/', express.static('./html'));

server.listen(3000, function () {
  console.log('Servidor rodando na porta 3000');
});

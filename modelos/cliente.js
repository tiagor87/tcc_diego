'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  nome: {type: String},
  telefone: {type: String},
  endereco: {type: String},
  referencia: {type: String},
  dataNascimento: {type: Date}
});

module.exports = mongoose.model('Cliente', clienteSchema);

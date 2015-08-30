'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var clienteSchema = new Schema({
    nome: {type: String},
    telefone: {type: String},
    endereco: {type: String},
    referencia: {type: String},
    dataNascimento: {type: Date}
  });

  return mongoose.model('Cliente', clienteSchema);
}

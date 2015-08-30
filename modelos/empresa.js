'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var empresaSchema = new Schema({
    ativo: {type: Boolean, default: true},
    nome: {type: String},
    cnpj: {type: String},
    endereco: {type: String},
    telefone: {type: String},
    email: {type: String},
    entregadores: {type: mongoose.Schema.Types.ObjectId, ref: 'Entregador'}
  });

    return mongoose.model('Empresa', empresaSchema);
}

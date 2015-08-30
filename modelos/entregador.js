'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var entregadorSchema = new Schema({
    ativo: {type: Boolean, default: true},
    nome: {type: String},
    rg: {type: String},
    cpf: {type: String},
    celular: {type: String},
    empresa: {type: mongoose.Schema.Types.ObjectId, ref: 'Empresa'}
  });

  return mongoose.model('Entregador', entregadorSchema);
}

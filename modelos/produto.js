'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var produtoSchema = new Schema({
    ativo: {type: boolean, default: true},
    nome: {type: string},
    descricao: {type: string},
    tamanho: {type: string, enum: ['pequeno', 'medio', 'grande']}
  });

  return mongoose.model('Produto', produtoSchema);
}

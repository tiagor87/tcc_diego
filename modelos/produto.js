'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
  ativo: {type: boolean, default: true},
  nome: {type: string},
  descricao: {type: string},
  tamanho: {type: string, enum: ['pequeno', 'medio', 'grande']}
});

module.exports = mongoose.model('Produto', produtoSchema);

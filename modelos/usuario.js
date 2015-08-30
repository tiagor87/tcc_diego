'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
  ativo: {type: boolean, default: true},
  nome: {type: string},
  senha: {type: string}
});

module.exports = mongoose.model('Usuario', usuarioSchema);

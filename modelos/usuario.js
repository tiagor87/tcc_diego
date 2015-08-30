'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var usuarioSchema = new Schema({
    ativo: {type: boolean, default: true},
    nome: {type: string},
    senha: {type: string}
  });

  return mongoose.model('Usuario', usuarioSchema);
}

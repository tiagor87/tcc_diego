'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var pedidoItemSchema = new Schema({
    ativo: {type: boolean, default: true},
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'Produto'},
    quantidade: Number,
    valor: Number
  });

  return mongoose.model('PedidoItem', pedidoItemSchema);
}

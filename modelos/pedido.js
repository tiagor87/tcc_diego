'use strict';

module.exports = function () {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var pedidoSchema = new Schema({
    ativo: {type: Boolean, default: true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'},
    itens: {type: mongoose.Schema.Types.ObjectId, ref: 'PedidoItem'},
    status: {type: String, enum: ['pendente', 'em_transito', 'cancelado', 'entregue']},
    valor: Number
  });

  return mongoose.model('Pedido', pedidoSchema);
}

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoSchema = new Schema({
  ativo: {type: Boolean, default: true},
  cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'},
  itens: {type: mongoose.Schema.Types.ObjectId, ref: 'PedidoItem'},
  status: {type: String, enum: ['pendente', 'em_transito', 'cancelado', 'entregue']},
  valor: Number
});

module.exports = mongoose.model('Pedido', pedidoSchema);

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoItemSchema = new Schema({
  ativo: {type: boolean, default: true},
  produto: {type: mongoose.Schema.Types.ObjectId, ref: 'Produto'},
  quantidade: Number,
  valor: Number
});

module.exports = mongoose.model('PedidoItem', pedidoItemSchema);

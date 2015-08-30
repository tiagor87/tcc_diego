'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Pedido = Promise.promisifyAll(require('../modelos/pedido.js'));

  var ServicoPedido = function () {
  }

  ServicoPedido.prototype.gravar = function (pedidoData) {
    var pedido = new Pedido(pedidoData);
    return pedido.save();
  }

  ServicoPedido.prototype.obterPorId = function (id) {
    return Pedido.findById(id);
  }

  ServicoPedido.prototype.obter = function (filtro) {
    return Pedido.find(filtro);
  }
}

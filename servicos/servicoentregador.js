'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Entregador = Promise.promisifyAll(require('../modelos/entregador.js'));

  var ServicoEntregador = function () {
  }

  ServicoEntregador.prototype.gravar = function (entregadorData) {
    var entregador = new Entregador(entregadorData);
    return entregador.save();
  }

  ServicoEntregador.prototype.obterPorId = function (id) {
    return Entregador.findById(id);
  }

  ServicoEntregador.prototype.obter = function (filtro) {
    return Entregador.find(filtro);
  }
}

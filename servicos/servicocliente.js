'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Cliente = Promise.promisifyAll(require('../modelos/cliente.js'));

  var ServicoCliente = function () {
  }

  ServicoCliente.prototype.gravar = function (clienteData) {
    var cliente = new Cliente(clienteData);
    return cliente.save();
  }

  ServicoCliente.prototype.obterPorId = function (id) {
    return Cliente.findById(id);
  }

  ServicoCliente.prototype.obter = function (filtro) {
    return Cliente.find(filtro);
  }

  return new ServicoCliente();
}

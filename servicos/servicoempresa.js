'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Empresa = Promise.promisifyAll(require('../modelos/empresa.js'));

  var ServicoEmpresa = function () {
  }

  ServicoEmpresa.prototype.gravar = function (empresaData) {
    var empresa = new Empresa(empresaData);
    return empresa.save();
  }

  ServicoEmpresa.prototype.obterPorId = function (id) {
    return Empresa.findById(id);
  }

  ServicoEmpresa.prototype.obter = function (filtro) {
    return Empresa.find(filtro);
  }
}

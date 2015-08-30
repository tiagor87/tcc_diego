'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Usuario = Promise.promisifyAll(require('../modelos/produto.js'));

  var ServicoUsuario = function () {
  }

  ServicoUsuario.prototype.gravar = function (produtoData) {
    var produto = new Usuario(produtoData);
    return produto.save();
  }

  ServicoUsuario.prototype.obterPorId = function (id) {
    return Usuario.findById(id);
  }

  ServicoUsuario.prototype.obter = function (filtro) {
    return Usuario.find(filtro);
  }
}

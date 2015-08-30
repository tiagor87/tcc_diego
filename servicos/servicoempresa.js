'use strict';

module.exports = function () {
  var Promise = require('bluebird');
  var Usuario = Promise.promisifyAll(require('../modelos/usuario.js'));

  var ServicoUsuario = function () {
  }

  ServicoUsuario.prototype.gravar = function (usuarioData) {
    var usuario = new Usuario(usuarioData);
    return usuario.save();
  }

  ServicoUsuario.prototype.obterPorId = function (id) {
    return Usuario.findById(id);
  }

  ServicoUsuario.prototype.obter = function (filtro) {
    return Usuario.find(filtro);
  }
}

'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicousuario.js');

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var usuario = request.body;
      servico.gravar(usuario)
        .then(function () {
          response.status(201).json(usuario);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.body;
      servico.obter(filtro)
        .then(function (usuarios) {
          response.status(200).json(usuarios);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (usuario) {
          response.status(200).json(usuario);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (usuario) {
          usuario.ativo = false;
          return servico.gravar(usuario);
        })
        .then(function () {
          response.status(204).end();
        })
        .catch(function (error) {
          next(error);
        });
    });

    return router;
}

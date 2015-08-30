'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicoentregador.js');

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var entregador = request.body;
      servico.gravar(entregador)
        .then(function () {
          response.status(201).json(entregador);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.body;
      servico.obter(filtro)
        .then(function (entregadores) {
          response.status(200).json(entregadores);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (entregador) {
          response.status(200).json(entregador);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (entregador) {
          entregador.ativo = false;
          return servico.gravar(entregador);
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

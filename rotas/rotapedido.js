'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicopedido.js');

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var pedido = request.body;
      servico.gravar(pedido)
        .then(function () {
          response.status(201).json(pedido);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.body;
      servico.obter(filtro)
        .then(function (pedidos) {
          response.status(200).json(pedidos);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (pedido) {
          response.status(200).json(pedido);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (pedido) {
          pedido.ativo = false;
          return servico.gravar(pedido);
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

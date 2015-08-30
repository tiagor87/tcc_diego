'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicoproduto.js');

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var produto = request.body;
      servico.gravar(produto)
        .then(function () {
          response.status(201).json(produto);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.body;
      servico.obter(filtro)
        .then(function (produtos) {
          response.status(200).json(produtos);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (produto) {
          response.status(200).json(produto);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (produto) {
          produto.ativo = false;
          return servico.gravar(produto);
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

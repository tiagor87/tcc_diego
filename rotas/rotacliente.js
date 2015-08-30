'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicocliente.js')();

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var cliente = request.body;
      servico.gravar(cliente)
        .then(function () {
          response.status(201).json(cliente);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.query;
      servico.obter(filtro)
        .then(function (clientes) {
          response.status(200).json(clientes);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (cliente) {
          response.status(200).json(cliente);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (cliente) {
          cliente.ativo = false;
          return servico.gravar(cliente);
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

'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();
  var servico = require('../servicos/servicoempresa.js');

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      var empresa = request.body;
      servico.gravar(empresa)
        .then(function () {
          response.status(201).json(empresa);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .get(bodyParser.urlencoded({extended: true}), function (request, response, next) {
      var filtro = request.body;
      servico.obter(filtro)
        .then(function (empresas) {
          response.status(200).json(empresas);
        })
        .catch(function (error) {
          next(error);
        });
    });

  router
    .route('/:id')
    .get(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (empresa) {
          response.status(200).json(empresa);
        })
        .catch(function (error) {
          next(error);
        })
    })
    .delete(function (request, response, next) {
      servico.obterPorId(request.params.id)
        .then(function (empresa) {
          empresa.ativo = false;
          return servico.gravar(empresa);
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

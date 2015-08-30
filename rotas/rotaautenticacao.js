'use strict';

module.exports = function (express, bodyParser) {
  var router = express.Router();

  router
    .route('/')
    .post(bodyParser.json({}), function (request, response, next) {
      if (request.body.usuario === 'diego' && request.body.senha === '123456') {
        var token = new Buffer('diego:123456').toString('base64');
        response
          .status(201)
          .cookie('token', token, { maxAge: process.env.COOKIE_EXPIRATION_TIME || 900000 })
          .end();
      } else {
        response.status(401).send('Usuário ou senha inválidos.');
      }
    })
    .delete(function (request, response, next) {
      response.cookies.clearCookie('token').end();
    });

    return router;
}

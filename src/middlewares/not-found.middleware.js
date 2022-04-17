const notFoundMiddleware = (request, response) => {
    response.statusCode = 404;
    response.send({
      mensaje: "Error 404 - path not found",
    });
  };
  module.exports = notFoundMiddleware;
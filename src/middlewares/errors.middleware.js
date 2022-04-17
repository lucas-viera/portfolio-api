const errorsMiddleware = (error, request, response, next) => {
    response.statusCode = 400;
    response.send("Error 400");
  };
  
module.exports = errorsMiddleware;
  
const jwt = require("jsonwebtoken");
const JWT_SECRET = "TODO";  //TODO

const authMiddleware = (request, response, next) => {
const token = request.header("Authorization");

  //In case there is no token received
  if (!token) {
    return response.status(401).send({
      error: "Error 401 - Access Denied",
    });
  }

  //Validate token with jwt.verify within try-catch
  try {
    const verify = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    //Invalid token case
    return response.status(400).send({
      error: "Error 400 - Invalid Token",
    });
  }
};

module.exports = { authMiddleware, JWT_SECRET };

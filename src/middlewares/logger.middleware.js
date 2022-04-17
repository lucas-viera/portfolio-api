const fs = require("fs");

// logger middleware must use next because it will 
// be followed by another middleware after
const loggerMiddleware = (request, response, next) => {
  //save URL and currente date
  const content = `Visited ${request.path} at ${new Date()}\n`;
  fs.writeFile("./data/logFile.log", content, { flag: "a+" }, () => {
    //Do nothing
  });
  next();
};
module.exports = loggerMiddleware;

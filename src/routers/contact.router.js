const express = require("express");
const { append } = require("express/lib/response");
const path = require("path");
const contactRouter = express.Router();

contactRouter.post(('submit-form'))


module.exports = contactRouter;




// // Multer setup
// const uploadMiddleware = multer({ dest: path.join("public", "uploads") });

// //Configurar ruta para mandar contacto
// contactRouter.post("/send", uploadMiddleware.single("CV"), function (request, response) {
//   const datos = request.body;
//   const cv = request.file;
//   console.log(datos, cv);
//   response.send({ message: "OK!" });
// });
const cors = require("cors");
const express = require ('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");

//Environment variables
require("dotenv").config();

// Middlewares - requirements
const loggerMiddleware = require("./middlewares/logger.middleware");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const errorsMiddleware = require("./middlewares/errors.middlware");

// Routers - requirements
//const authRouter = require("./routers/auth.router");
const aboutRouter = require("./routers/about.router");
const contactRouter = require("./routers/contact.router");
const educationRouter = require("./routers/education.router");
const experienceRouter = require("./routers/experience.router")
const projectsRouter = require ("./routers/projects.router");

// Cors and external middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// Logger middleware must be used at the begining
app.use(loggerMiddleware);
app.all("/*", notFoundMiddleware);
app.use(errorsMiddleware);

// Routers - usage
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/education", educationRouter);
app.use("/experience", experienceRouter);
app.use("/projects", projectsRouter);

//Others - errors
app.all("/*", notFoundMiddleware);
app.use(errorsMiddleware);

var server = app.listen(PORT, ()=>{
    console.log('Sever running on port', server.address().port)
});
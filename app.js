const express = require ('express');
const app = express();
const app_port = 3000;
const bodyParser = require("body-parser");
const path = require("path");

// // Root
// app.get('/', (request, response) =>{
//     response.sendStatus(200);
//     response.send("Visit to root");
// });

// // About
// app.get('/about', (request, response) =>{
//     response.sendStatus(200);
//     response.send("Visit to about");
// });

// // Contact
// app.get('/contact', (request, response) =>{
//     response.sendStatus(200);
// });

// // Projects
// app.get('/projects', (request, response) =>{
//     response.sendStatus(200);
// });

// // Education
// app.get('/education', (request, response) =>{
//     response.sendStatus(200);
// });

// // Experience
// app.get('/jobs', (request, response) =>{
//     response.sendStatus(200);
// });

// Middlewares - requirements
const loggerMiddleware = require("./middlewares/logger.middleware");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const errorsMiddleware = require("./middlewares/errors.middlware");
// 
app.use(loggerMiddleware);
app.all("/*", notFoundMiddleware);
app.use(errorsMiddleware);

// Routers - requirements
const authRouter = require("./routers/auth.router");
const aboutRouter = require("./routers/about.router");
const contactRouter = require("./routers/contact.router");
const educationRouter = require("./routers/education.router");
const experienceRouter = require("./routers/experience.router")
const projectsRouter = require ("./routers/projects.router");

//Others - errors
app.all("/*", notFoundMiddleware);
app.use(errorsMiddleware);

var server = app.listen(app_port, ()=>{
    console.log('Sever running on port', server.address().port)
});
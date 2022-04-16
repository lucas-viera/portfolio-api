var express = require ('express');
var app = express();
var app_port = 3000;

// Root
app.get('/', (request, response) =>{
    response.sendStatus(200);
});

// About
app.get('/about', (request, response) =>{
    response.sendStatus(200);
});

// Contact
app.get('/contact', (request, response) =>{
    response.sendStatus(200);
});

// Projects
app.get('/projects', (request, response) =>{
    response.sendStatus(200);
});

// Education
app.get('/education', (request, response) =>{
    response.sendStatus(200);
});



app.listen(app_port);
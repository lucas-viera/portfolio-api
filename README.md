# Portfolio backend repository

## Project Setup

1. Begin by creating `package.json` file
- `npm init --yes`


2. Install libraries needed as follows
- `npm install -s express`
- `npm install -s body-parser`
- `npm install -s path`
- `npm install -s multer`   (maybe we won't use it)
- `npm install -s bcrypt`
- `npm install -s jsonwebtoken`

1. Install `nodemon` globally - you can skip this step if your system already has `nodemon` installed..
- `npm install -f nodemon`

## Run project
- Run `nodemon app.js` in project folder


## Observations
- Authentication will be implemented for only one user with 'admin' role as a proof of concept feature.
- Nodemailer useful [website](https://nodemailer.com/about/)
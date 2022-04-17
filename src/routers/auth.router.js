const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("./../middlewares/auth.middleware");
const authRouter = express.Router();


// ...


module.exports = authRouter;

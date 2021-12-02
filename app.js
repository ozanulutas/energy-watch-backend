require("dotenv").config();
const express = require("express");

const mountRoutes = require("./routes");

const app = express();


mountRoutes(app);

module.exports = app;
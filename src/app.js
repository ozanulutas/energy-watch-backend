require("dotenv").config();
const express = require("express");

const pg = require("./db/pg-client");
const mountRoutes = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

pg.connect()

mountRoutes(app);

module.exports = app;
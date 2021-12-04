require("dotenv").config();
const express = require("express");

const db = require("./db/db");
const mountRoutes = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.connect()

mountRoutes(app);

module.exports = app;
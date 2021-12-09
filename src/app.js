require("dotenv").config();
const express = require("express");
const cors = require('cors')

const pg = require("./db/pg-client");
const mongoose = require("./db/mongoose");
const mountRoutes = require("./routes");


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// DB connections
pg.connect()
mongoose.connect()


// Use routes
mountRoutes(app);

module.exports = app;
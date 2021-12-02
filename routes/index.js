// Register routes here
const facility = require("./facility");

module.exports = app => {
  app.use("/facilities", facility)
}
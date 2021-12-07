// Register routes here
const facility = require("./facility");
const customCol = require("./custom-col");

module.exports = app => {
  app.use("/facilities", facility)
  app.use("/custom-cols", customCol)
}
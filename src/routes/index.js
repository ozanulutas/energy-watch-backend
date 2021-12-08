// Register routes here
const facility = require("./facility");
const customCol = require("./custom-col");
const user = require("./user");

module.exports = app => {
  app.use("/facilities", facility)
  app.use("/custom-cols", customCol)
  app.use("/user", user)
}
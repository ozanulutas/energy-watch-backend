// Register routes here
const facility = require("./facility");
const consumption = require("./consumption");
const customCol = require("./custom-col");
const user = require("./user");
const userRole = require("./user-role");

module.exports = app => {
  app.use("/facilities", facility)
  app.use("/consumptions", consumption)
  app.use("/custom-cols", customCol)
  app.use("/user", user)
  app.use("/user-roles", userRole)
}
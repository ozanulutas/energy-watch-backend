/**
 * Register services here
 * Contains the majority of your business logic
 * Calls the data access layer or models
 */
const facility = require("./facility");
const consumption = require("./consumption");
const customCol = require("./custom-col");
const user = require("./user");
const userRole = require("./user-role");

module.exports = {
  facility,
  consumption,
  customCol,
  user,
  userRole
}
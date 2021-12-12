/**
 * Register models/data access layers here 
 * This layer is only for db access
 */
const facility = require("./facility");
const consumption = require("./consumption");
const customCol = require("./custom-col");
const User = require("./user");
const UserRole = require("./user-role");

module.exports = {
  facility,
  consumption,
  customCol,
  User,
  UserRole,
}
/**
 * Register models/data access layers here 
 * This layer is only for db access
 */
const facility = require("./facility");
const customCol = require("./custom-col");
const User = require("./user");
const UserRole = require("./user-role");

module.exports = {
  facility,
  customCol,
  User,
  UserRole,
}
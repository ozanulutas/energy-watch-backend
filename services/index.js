/**
 * Register services here
 * Contains the majority of your business logic
 * Calls the data access layer or models
 */
const facility = require("./facility");
const customCol = require("./custom-col");

module.exports = {
  facility,
  customCol
}
/**
 * Register models/data access layers here 
 * This layer is only for db access
 */
const facility = require("./facility");
const customCol = require("./custom-col");

module.exports = {
  facility,
  customCol,
}
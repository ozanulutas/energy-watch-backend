/**
 * Register controllers here
 * Controllers orchestrate the service calls and decide what to do with the data returned.
 * Controllers don't really contain any logic other than handling the request and calling services. 
 */
const facility = require("./facility");
const customCol = require("./custom-col");
const user = require("./user");

module.exports = {
  facility,
  customCol,
  user,
}
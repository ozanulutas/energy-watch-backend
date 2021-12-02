const { facility } = require("../services")

const getAll = async(req, resp) => {
  console.log("facility controller");
  facility.getAll();

  resp.end();
}

module.exports = {
  getAll,
}
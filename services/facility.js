const { facility } = require("../db")

const getAll = async () => {
  console.log("facility service");
  facility.getAll();
}


module.exports = {
  getAll,
}
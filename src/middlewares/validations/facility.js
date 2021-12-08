// const { body } = require('express-validator');
const { customCol } = require("../../services");
const validationHandlers = require("./validation-handlers")

// Returns validation handlers 
module.exports = async () => {
  try {
    // Gets user specificied cols
    const customCols = await customCol.getByTblId(1)

    // Prepares an array of validation handlers
    const validations = customCols.map(col => {
      return validationHandlers[col.type](col.name, col.type)
    })

    return validations

  } catch (error) {
    console.log(error.message);
  }
}

const { body } = require('express-validator');
const { customCol } = require("../../services");
const validationHandlers = require("./validation-handlers")

// Validations for facility operations

// Returns validation handlers 
module.exports = async () => {
  try {
    // Gets user specificied cols
    const customCols = await customCol.getByTblId(1)
    console.log(customCols); 

    // Prepares an array of validation handlers
    const validations = customCols.map(col => {
      return validationHandlers[col.type](col.name, col.type)
    })

    const baseValidations = [
      body("name")
        .not()
        .isEmpty()
        .withMessage("name is required")
        .trim()
        .escape(),
      body("membership_start_date")
        .not()
        .isEmpty()
        .withMessage("membership_start_date is required")
        // .isDate()
        // .withMessage("membership_start_date type must be date and format must be 'YYYY-MM-DD'")
        .trim()
        .escape(),
      body("membership_end_date")
        .not()
        .isEmpty()
        .withMessage("membership_end_date is required")
        // .isDate()
        // .withMessage("membership_end_date type must be date and format must be 'YYYY-MM-DD'")
        .trim()
        .escape(),
      body("employees")
        .not()
        .isEmpty()
        .withMessage("employees is required")
        .isInt()
        .withMessage("employees type must be integer")
        .trim()
        .escape(),
      body("is_special")
        .not()
        .isEmpty()
        .withMessage("is_special is required")
        .isBoolean()
        .withMessage("is_special type must be date")
        .trim()
        .escape(),
    ]

    return [
      ...baseValidations,
      ...validations
    ]

  } catch (error) {
    console.log(error.message);
  }
}

const { customCol, facility } = require("../db")

/**
 * Returns user specified column records by table id
 * @param {int} tblId 
 * @returns {array} - Records
 */
const getByTblId = async (tblId) => {
  try {
    return await customCol.getByTblId(tblId)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Returns user specified column records by table id
 * @returns {array} - Records
 */
const getAllTypes = () => {
  try {
    return customCol.getAllTypes()

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a new user specified column
 * @param {object} body - Column name and values to insert
 * @returns {string} - Success message
 */
const create = async (body) => {
  try {
    // Marks custom column's name with '_' to specifiy it is created by user
    body.name = `_${body.name}`

    // Checks if col name is duplicate
    const { count: colCount } = await customCol.countByTblIdAndName(body.tbl_id, body.name)
    if (colCount > 0) {
      throw new Error("Duplicate column names are not allowed.")
    }

    return await customCol.create(body)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Deletes a new user specified column and returns the name value of the record
 * Then uses it's name to remove all json key-value pairs from associated table
 * @param {string} name - Custom column's name
 * @param {number} tblId - Custom column's table id which it belongs
 * @returns {string} - Success message
 */
const remove = async (name, tblId) => {
  try {
    const colName = await customCol.remove(name, tblId)
    await facility.removeJsonKeys(colName)

    return "Custom column is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  getAllTypes,
  create,
  remove,
}
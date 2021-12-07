const { customCol, facility } = require("../db")

/**
 * Returns user specified column records by table id
 * @param {int} tblId 
 * @returns {array} - Record
 */
const getByTblId = async (tblId) => {
  try {
    return await customCol.getByTblId(tblId)

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
    // @TODO: duplicate col name kontrolü
    // Marks custom column's name with '+' to specifiy it is created by user
    body.name = `+${body.name}`
    return await customCol.create(body)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Deletes a new user specified column and returns the name value of the record
 * Then uses it's name to remove all json key-value pairs from associated table
 * @param {number} id - Custom column's id
 * @returns {string} - Success message
 */
const remove = async (id) => {
  try {
    const colName = await customCol.remove(id)
    await facility.removeJsonKeys(colName)

    return "Custom column is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  create,
  remove,
}
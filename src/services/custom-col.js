const { customCol, facility } = require("../db")

/**
 * Returns user specified column records by table id
 * @param {int} tblId 
 * @returns {array}
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
 * @param {string} body.name - Custom column's name
 * @param {string} body.type - Custom column's type
 * @param {string} body.alias - Custom column's alias
 * @param {int} body.tbl_id - Table id which custom column belongs to
 * @param {string} body.user_id - User id which custom column belongs to
 * @returns {object}
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
 * @returns {object}
 */
const remove = async (id) => {
  try {
    const colName = await customCol.remove(id)
    await facility.removeJsonKeys(colName)

    return { message: "Custom column is succesfully deleted." }

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  create,
  remove,
}
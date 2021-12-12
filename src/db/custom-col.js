const db = require("./pg-client");
const columnTypes = require("../utils/data/column-types")
/**
 * Returns user specified column records by table id
 * @param {int} tblId 
 * @returns {Promise<array>}
 */
const getByTblId = async (tblId) => {
  try {
    const result = await db.query(`
      SELECT custom_col.name, custom_col.alias, custom_col.type FROM 
      custom_col JOIN tbl 
      ON tbl.id = custom_col.tbl_id 
      WHERE tbl.id = $1
    `, [tblId])

    return result.rows

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Gets all custom column types
 * @returns {array}
 */
const getAllTypes = () => {
  try {
    return columnTypes

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a new user specified column
 * @param {object} customCol - Column name and values to insert
 * @returns {Promise<string>} - Success message
 */
const create = async (customCol) => {
  try {
    // Dynamically creates the insert query
    const fieldNames = Object.keys(customCol)
    const query = `INSERT INTO custom_col 
      (${fieldNames.map((fieldName) => `${fieldName}`).join(", ")}) 
      VALUES (${fieldNames.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(customCol))

    return "Custom column is succesfully created."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Deletes a new user specified column and returns the name value of the record
 * @param {string} name - Custom column's name
 * @param {number} tblId - Custom column's table id which it belongs
 * @returns {Promise<string>} - Name of the deleted column
 */
const remove = async (name, tblId) => {
  try {
    const query = "DELETE FROM custom_col WHERE name = $1 AND tbl_id = $2 RETURNING name"
    const result = await db.query(query, [name, tblId])

    return result.rows[0].name

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  getAllTypes,
  create,
  remove
}
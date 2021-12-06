const db = require("./db");

/**
 * Returns user specified column records by table id
 * @param {int} tblId 
 * @returns {array}
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
 * Creates a new user specified column
 * @param {object} customCol - Column name and values to insert
 * @param {string} customCol.name - Custom column's name
 * @param {string} customCol.type - Custom column's type
 * @param {string} customCol.alias - Custom column's alias
 * @param {int} customCol.tbl_id - Table id which custom column belongs to
 * @param {string} customCol.user_id - User id which custom column belongs to
 * @returns {object}
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

    return { message: "Custom column is succesfully created." }

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Deletes a new user specified column and returns the name value of the record
 * @param {number} id - Custom column's id
 * @returns {string}
 */
const remove = async (id) => {
  try {
    const query = "DELETE FROM custom_col WHERE id = $1 RETURNING name"
    const result = await db.query(query, [id])

    return result.rows[0].name

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  create,
  remove
}
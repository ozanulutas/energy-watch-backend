const db = require("./pg-client");

/**
 * Returns all facility records with user sepecified cols
 * @param {array} customCols - Custom column records associated with table
 * @returns {Promise<array>}
 */
const getAll = async (customCols) => {
  try {
    const result = await db.query(`
      SELECT id, name, membership_start_date, membership_end_date, employees, is_special, user_id
      ${customCols.map((col) => `, custom_cols ->> '${col.name}' AS +${col.alias}`).join("")}
      FROM facility ORDER BY id
    `)

    return result.rows

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * 
 * @param {integer} id - Facility's record id 
 * @param {array} customCols - Custom column records associated with table
 * @returns {Promise<object>}
 */
const getById = async (id, customCols) => {
  try {
    const query = `
      SELECT id, name, membership_start_date, membership_end_date, employees, is_special
      ${customCols.map((col) => `, custom_cols ->> '${col.name}' AS ${col.alias}`).join("")}
      FROM facility WHERE id = $1 ORDER BY id
    `
    const result = await db.query(query, [id])

    return result.rows

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a new facility record
 * @param {object} facility - Facility column name and values to insert
 * @returns {Promise<string>}
 */
const create = async (facility) => {
  try {
    const cols = Object.keys(facility)
    const query = `INSERT INTO facility 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(facility))

    return "Facility is succesfully created."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Updates a facility record
 * @param {integer} id - Facility's record id
 * @param {object} facility - Facility column name and values to insert
 * @returns {Promise<string>}
 */
const update = async (id, facility) => {
  try {
    const cols = Object.keys(facility)
    const query = `UPDATE facility 
      SET ${cols.map((col, i) => `${col} = $${i + 1}`).join(", ")} 
      WHERE id = $${cols.length + 1}
    `
    await db.query(query, [...Object.values(facility), id])

    return "Facility is succesfully updated."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes a facility record
 * @param {integer} id - Facility's record id 
 * @returns {Promise<string>}
 */
const remove = async (id) => {
  try {
    const query = "DELETE FROM facility WHERE id = $1"
    await db.query(query, [id])

    return "Facility is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes all specificed json keys from custom column at facility records
 * @param {string} jsonKey - Key of a json record
 * @returns {Promise<string>}
 */
const removeJsonKeys = async (jsonKey) => {
  try {
    const query = "UPDATE facility SET custom_cols = custom_cols - $1"
    await db.query(query, [jsonKey])

    return "Facility column is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeJsonKeys
}
const db = require("./db");

/**
 * Returns all facility records with user sepecified cols
 * @param {array} customCols - Custom column records associated with table
 * @returns {array}
 */
const getAll = async (customCols) => {
  try {
    const result = await db.query(`
      SELECT id, name, membership_start_date, membership_end_date, employees, is_special
      ${customCols.map((col) => `, custom_cols ->> '${col.name}' AS ${col.alias}`).join("")}
      FROM facility ORDER BY id
    `)

    return result.rows

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a new facility record
 * @param {object} facility - Facility column name and values to insert
 * @param {string} facility.name - Facility's name
 * @param {date} facility.membership_start_date - Facility's membership start date
 * @param {date} facility.membership_end_date - Facility's membership end date
 * @param {integer} facility.employees - Facility's number of employees
 * @param {boolean} facility.is_special - Facility's special membership state 
 * @param {object} facility.custom_cols - User specificied columns for facility
 * @returns {object}
 */
const create = async (facility) => {
  try {
    const cols = Object.keys(facility)
    const query = `INSERT INTO facility 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(facility))

    return { message: "Facility is succesfully created." }

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Updates a facility record
 * @param {integer} id - Facility's record id
 * @param {object} facility - Facility column name and values to insert
 * @param {string} facility.name - Facility's name
 * @param {date} facility.membership_start_date - Facility's membership start date
 * @param {date} facility.membership_end_date - Facility's membership end date
 * @param {integer} facility.employees - Facility's number of employees
 * @param {boolean} facility.is_special - Facility's special membership state 
 * @param {object} facility.custom_cols - User specificied columns for facility
 * @returns {object}
 */
const update = async (id, facility) => {
  try {
    const cols = Object.keys(facility)
    const query = `UPDATE facility 
      SET ${cols.map((col, i) => `${col} = $${i + 1}`).join(", ")} 
      WHERE id = $${cols.length + 1}
    `
    await db.query(query, [...Object.values(facility), id])

    return { message: "Facility is succesfully updated." }

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes all specificed json keys from custom column at facility records
 * @param {string} jsonKey 
 * @returns {object}
 */
const removeJsonKey = async (jsonKey) => {
  try {
    const query = "UPDATE facility SET custom_cols = custom_cols - $1"
    await db.query(query, [jsonKey])

    return { message: "Facility column is succesfully deleted." }

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create,
  update,
  removeJsonKey
}
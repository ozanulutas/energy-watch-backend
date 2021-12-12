const db = require("./pg-client");

/**
 * Returns all consumption records with user sepecified cols
 * @param {array} customCols - Custom column records associated with table
 * @returns {Promise<array>}
 */
const getAll = async (customCols) => {
  try {
    const result = await db.query(`
      SELECT consumption.id, consumption.date_range, consumption.start_date, consumption.end_date, consumption.department, consumption.fee, consumption.discounted_price, consumption.consumption, facility.name as facility_name
      ${customCols.map((col) => `, consumption.custom_cols ->> '${col.name}' AS ${col.name}`).join("")}
      FROM consumption JOIN facility ON consumption.facility_id = facility.id
      ORDER BY id
    `)

    return result.rows

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a new consumption record
 * @param {object} consumption - Consumption column name and values to insert
 * @returns {Promise<string>}
 */
const create = async (consumption) => {
  try {
    // Get col names
    const cols = Object.keys(consumption)
    const query = `INSERT INTO consumption 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(consumption))

    return "Consumption is succesfully created."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Updates a consumption record
 * @param {integer} id - Consumption's record id
 * @param {object} consumption - Consumption column name and values to insert
 * @returns {Promise<string>}
 */
const update = async (id, consumption) => {
  try {
    const cols = Object.keys(consumption)
    const query = `UPDATE consumption 
      SET ${cols.map((col, i) => `${col} = $${i + 1}`).join(", ")} 
      WHERE id = $${cols.length + 1}
    `

    await db.query(query, [...Object.values(consumption), id])

    return "Consumption is succesfully updated."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes a consumption record
 * @param {integer} id - Consumption's record id 
 * @returns {Promise<string>}
 */
const remove = async (id) => {
  try {
    const query = "DELETE FROM consumption WHERE id = $1"
    await db.query(query, [id])

    return "Consumption is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes all specificed json keys from custom columns at consumption records
 * @param {string} jsonKey - Key of a json record
 * @returns {Promise<string>}
 */
const removeJsonKeys = async (jsonKey) => {
  try {
    const query = "UPDATE consumption SET custom_cols = custom_cols - $1"
    await db.query(query, [jsonKey])

    return "Consumption column is succesfully deleted."

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create,
  update,
  remove,
  removeJsonKeys
}
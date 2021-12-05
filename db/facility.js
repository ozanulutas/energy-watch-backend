const db = require("./db");

// Returns all facility records with user sepecified cols
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

// Creates a new facility record
const create = async (payload) => {
  try {
    const cols = Object.keys(payload)
    const query = `INSERT INTO facility 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(payload))

    return { message: "Facility is succesfully created." }

  } catch (err) {
    throw new Error(err)
  }
}

// Updates a facility record
const update = async (id, payload) => {
  try {
    const cols = Object.keys(payload)
    const query = `UPDATE facility 
      SET ${cols.map((col, i) => `${col} = $${i + 1}`).join(", ")} 
      WHERE id = $${cols.length + 1}
    `
    await db.query(query, [...Object.values(payload), id])

    return { message: "Facility is succesfully updated." }

  } catch (err) {
    throw new Error(err)
  }
}

// Updates a facility record
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
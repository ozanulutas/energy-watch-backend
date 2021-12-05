const db = require("./db");

// Returns user specified column records by table name
const getByTblId = async (tblId) => {
  try {
    const result = await db.query(`
      SELECT custom_col.name, custom_col.alias FROM 
      custom_col JOIN tbl 
      ON tbl.id = custom_col.tbl_id 
      where tbl.id = $1
    `, [tblId])

    return result.rows
    
  } catch (err) {
    console.log(err);
    throw new Error(err)
  }
}

// Creates a new user specified column
const create = async (payload) => {
  try {
    const cols = Object.keys(payload)
    const query = `INSERT INTO custom_col 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(payload))

    return { message: "Custom column is succesfully created." }

  } catch (err) {
    throw new Error(err)
  }
}

// Deletes a new user specified column
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
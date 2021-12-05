const db = require("./db");

// Returns all facility records
const getAll = async () => {
  try {
    let result = await db.query(`
      SELECT custom_col.name, custom_col.alias FROM 
      custom_col JOIN tbl 
      ON tbl.id = custom_col.tbl_id 
      where tbl.id = 1
    `)
    const cols = result.rows

    console.log(`
    SELECT id, name, membership_start_date, membership_end_date, employees, is_special
    ${cols.map((col) => `, custom_cols ->> '${col.name}' AS ${col.alias}`).join("")}
    FROM facility
  `);

    result = await db.query(`
      SELECT id, name, membership_start_date, membership_end_date, employees, is_special
      ${cols.map((col) => `, custom_cols ->> '${col.name}' AS ${col.alias}`).join("")}
      FROM facility
    `)
    console.log(result.rows);

    return result.rows
    
  } catch (err) {
    throw new Error(err)
  }
}

const create = async (body) => {
  console.log("facility data access layer");
  try {
    const cols = Object.keys(body)
    const query = `INSERT INTO facility 
      (${cols.map((col) => `${col}`).join(", ")}) 
      VALUES (${cols.map((_, i) => `$${i + 1}`).join(", ")})
    `
    await db.query(query, Object.values(body))

    return { message: "Category is succesfully created." }

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create
}
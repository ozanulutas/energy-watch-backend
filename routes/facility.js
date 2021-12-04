const router = require("express").Router();
const { facility } = require("../controllers");
// const db = require("../db/db");

router.get("/", facility.getAll);
router.post("/", facility.create);

// router.get("/", async (req, resp) => {
//   try {
//     let result = await db.query(`
//       select col_name from tbl_metadata 
//       join tables on tables.id = tbl_metadata.tbl_id 
//       where tables.name = 'tbl'
//     `)
//     const cols = result.rows

//     const query = `
//       select id, last_name
//       ${cols.map((col) => `, jso ->> '${col.col_name}' as ${col.col_name}`).join(", ")}
//       from tbl2
//     `
//     console.log(query);
//     result = await db.query(query)
//     console.log(result.rows);

//     // result = await db.query(`
//     //   select *, jso ->> 'customer' as customer, jso ->> 'product' as product from tbl2
//     // `)
//     resp.status(200).json({ data: result.rows })
//   } catch (err) {
//     resp.json({ message: err.message })
//   }
// })

module.exports = router;
const { customCol } = require("../services")

// Gets the custom column records by table name and sends it as response
const getByTblId = async (req, resp) => {
  try {
    const data = await customCol.getByTblId(req.params.tblId)
    resp.status(200).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Creates a custom column record
const create = async (req, resp) => {
  try {
    const data = await customCol.create(req.body)
    resp.status(201).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}


module.exports = {
  getByTblId,
  create
}
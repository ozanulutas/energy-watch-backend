const { customCol } = require("../services")

// Gets the custom column records by table name and sends it as response
const getByTblId = async (req, resp) => {
  try {
    const result = await customCol.getByTblId(req.params.tblId)
    resp.status(200).json({ data: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Creates a custom column record and sends response message
const create = async (req, resp) => {
  try {
    const result = await customCol.create(req.body)
    resp.status(201).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Removes a custom column with its records from associated table and sends response message
const remove = async (req, resp) => {
  try {
    const result = await customCol.remove(req.params.id)
    resp.status(200).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}


module.exports = {
  getByTblId,
  create,
  remove,
}
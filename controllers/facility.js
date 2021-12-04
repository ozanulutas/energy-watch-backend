const { facility } = require("../services")

// Gets the facility records and sends it as response
const getAll = async (req, resp) => {
  console.log("facility controller");
  try {
    const data = await facility.getAll()
    resp.status(200).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Creates a facility record
const create = async (req, resp) => {
  console.log("facility controller");
  try {
    const data = await facility.create(req.body)
    resp.status(201).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

module.exports = {
  getAll,
  create
}
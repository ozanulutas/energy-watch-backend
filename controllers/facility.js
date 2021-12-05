const { facility } = require("../services")
// // const { body, validationResult } = require('express-validator');

// Gets the facility records and sends it as response
const getAll = async (req, resp) => {
  try {
    const data = await facility.getAll()
    resp.status(200).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Creates a facility record
const create = async (req, resp) => {
  // // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return resp.status(400).json({ errors: errors.array() });
  // }
  try {
    const data = await facility.create(req.body)
    resp.status(201).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Updates a facility record
const update = async (req, resp) => {
  try {
    const data = await facility.update(req.params.id, req.body)
    resp.status(201).json({ data })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

module.exports = {
  getAll,
  create,
  update
}
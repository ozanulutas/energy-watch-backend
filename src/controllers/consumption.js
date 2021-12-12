const { consumption } = require("../services")
const { validationResult } = require('express-validator')

// Gets all consumption records and sends it as response
const getAll = async (req, resp) => {
  try {
    const result = await consumption.getAll()
    resp.status(200).json({ results: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}


// Creates a consumption record for a facility
const create = async (req, resp) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    req.body.user_id = req.user.id
    // req.body.facility_id = req.params.id
    
    const result = await consumption.create(req.body)
    resp.status(201).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}


// Updates a facility record and sends message
const update = async (req, resp) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const result = await consumption.update(req.params.id, req.body)
    resp.status(200).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Deletes a consumption record and sends message
const remove = async (req, resp) => {
  try {
    const result = await consumption.remove(req.params.id)
    resp.status(200).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}
module.exports = {
  getAll,
  create,
  update,
  remove,
}

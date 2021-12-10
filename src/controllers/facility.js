const { facility } = require("../services")
const { validationResult } = require('express-validator')

// Gets the facility records and sends it as response
const getAll = async (req, resp) => {
  try {
    const result = await facility.getAll()
    resp.status(200).json({ results: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Gets a facility record by id and sends it as response
const getById = async (req, resp) => {
  try {
    const result = await facility.getById(req.params.id)
    // TODO: data keylerini result oalrak değiştir
    resp.status(200).json({ data: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Creates a facility record and sends message
const create = async (req, resp) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    req.body.user_id = req.user.id
    const result = await facility.create(req.body)
    resp.status(201).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Updates a facility record and sends message
const update = async (req, resp) => {
  try {
    const result = await facility.update(req.params.id, req.body)
    resp.status(200).json({ message: result })

  } catch (err) {
    resp.json({ message: err.message })
  }
}

// Deletes a facility record and sends message
const remove = async (req, resp) => {
  try {
    const result = await facility.remove(req.params.id)
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
  getById,
}

const { user } = require("../services")
const { validationResult } = require('express-validator')

// Logs user in
const login = async (req, resp) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const result = await user.login(req.body)
    resp.status(200).json(result)

  } catch (err) {
    resp.status(400).json({ message: err.message })
  }
}

// Registers a user
const register = async (req, resp) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const result = await user.register(req.body)
    resp.status(201).json({ message: result })

  } catch (err) {
    resp.status(400).json({ message: err.message })
  }
}


module.exports = {
  login,
  register,
}
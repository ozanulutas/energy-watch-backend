const { user } = require("../services")

// Gets the custom column records by table name and sends it as response
const login = async (req, resp) => {
  try {
    const result = await user.login(req.body)
    resp.status(200).json({ jwt: result })

  } catch (err) {
    resp.status(400).json({ message: err.message })
  }
}

// Creates a custom column record and sends response message
const register = async (req, resp) => {
  try {
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
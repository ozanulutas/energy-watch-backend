const { userRole } = require("../services")

// Gets all user roles
const getAll = async (req, resp) => {
  try {
    const result = await userRole.getAll()
    resp.status(200).json(result)

  } catch (err) {
    resp.status(400).json({ message: err.message })
  }
}


module.exports = {
  getAll,
}
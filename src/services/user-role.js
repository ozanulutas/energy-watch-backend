const { UserRole } = require("../db")

/**
 * Gets all user roles
 * @returns {promise<string>}
 */
const getAll = async () => {
  try {
    
    return await UserRole.find({})

  } catch (err) {
    throw new Error(err.message)
  }
}


module.exports = {
  getAll,
}
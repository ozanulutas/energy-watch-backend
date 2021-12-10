const { User } = require("../db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * Creates a new user record
 * @param {object} body 
 * @returns {promise<string>}
 */
const register = async (body) => {
  try {
    const { name, email, password, role } = body

    // Throws err if user is already exists
    if (await User.findOne({ email })) {
      throw new Error("User is already exists.")
    }

    const user = new User({ name, email, password, role })
    user.password = await bcrypt.hash(password, 10)
    await user.save()

    return "User is successfully created."

  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * Logs user in
 * @param {object} body 
 * @returns {promise<string>} 
 */
const login = async (body) => {
  try {
    const { email, password } = body
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error("User is not exists")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error("Invalid password")
    }
    // TODO: usera ait custom columnları çek ve jwt ye ekle

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      }
    }

    const token = jwt.sign(payload, process.env.TOKEN_KEY, { expiresIn: "2h" })


    return { user: { name: user.name, role: user.role, email, token } }

  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  register,
  login
}
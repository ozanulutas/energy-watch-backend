const { User } = require("../db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { addListener } = require("../db/user")

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

    const token = jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      // { expiresIn: "2h" }
    )


    return {
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
        email: user.email,
        token
      }
    }

  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * Updates user settings
 * @param {string} id - User id
 * @param {object} body 
 * @returns {promise<string>}
 */
const updateSettings = async (id, body) => {
  try {
    const { name, role } = body
    const user = await User.findOne({ _id: id })

    // Throws err if user is already exists
    if (!user) {
      throw new Error("User does not exists.")
    }

    user.name = name
    user.role = role

    await user.save()

    return {
      message: "User settings are successfully updated.",
      user: {
        name: user.name,
        role: user.role,
      }
    }

  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * Updates user settings
 * @param {string} id - User id
 * @param {object} body 
 * @returns {promise<string>}
 */
const updatePassword = async (id, body) => {
  try {
    let { password } = body
    const user = await User.findOne({ _id: id })

    // Throws err if user is already exists
    if (!user) {
      throw new Error("User does not exists.")
    }

    password = await bcrypt.hash(password, 10)

    user.password = password

    await user.save()

    return  "User password is successfully updated."

  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  register,
  login,
  updateSettings,
  updatePassword
}
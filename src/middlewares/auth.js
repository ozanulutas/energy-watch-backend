const jwt = require("jsonwebtoken")

const roles = {
  admin: 1,
  editor: 2,
  user: 3,
}

const auth = (role) => (req, resp, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"]

  if (!token) {
    return resp.status(400).json({ message: "A token is required for authentication" })
  }

  try {
    const { user } = jwt.verify(token, process.env.TOKEN_KEY)

    if (!roles[role] || roles[user.role] > roles[role]) {
      return resp.status(401).json({ message: `${role} role is required for this action! You are ${user.role}.` })
    }

    req.user = user

    next()

  } catch (err) {
    return resp.status(401).json({ message: "Invalid Token" })
  }
  // return next()
}


module.exports = auth
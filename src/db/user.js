const { Schema, model } = require("mongoose")

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "editor", "user"],
      message: "{VALUE} role is not supported"
    },
    default: "user"
  }
})

module.exports = model("User", User)
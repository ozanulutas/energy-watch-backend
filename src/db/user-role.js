const { Schema, model } = require("mongoose")

const UserRole = new Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = model("UserRole", UserRole)
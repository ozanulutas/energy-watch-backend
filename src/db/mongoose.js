const mongoose = require("mongoose")

module.exports = {
  connect: () => mongoose.connect(
    process.env.MONGOOSE, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, 
    err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to mongodb...");
      }
    }
  )
}
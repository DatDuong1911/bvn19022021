var mongoose = require("../configs/dbConnect")

var Schema = mongoose.Schema

var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
})

var userModel = mongoose.model("user", userSchema)

module.exports = userModel
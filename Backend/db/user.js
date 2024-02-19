const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
})

module.exports = mongoose.model("users", usersSchema)


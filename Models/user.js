const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
    username: String,
    password: String
})

module.exports = mongoose.model('user' , userSchema)
// Importing the requirements
 const express = require('express')
 const mongoose = require('mongoose')
 const cors = require('cors')
 const bodyparser = require('body-parser')
 const userRoute = require('./Routes/user')
// Declarations
const app = express()

// CORS Middleware
app.use(cors({origin: 'http://localhost:3000'}))

// BodyParser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

// Test route

app.use('/users', userRoute)

app.get('/helloworld', (req, res)=>{
    res.send("<strong>Hello Everyone</strong>")
})

app.get('/display/:name' ,(req,res)=>{
    res.send(req.params.name)
})
var PORT = process.env.PORT || 3000
//Starting the Server
app.listen(PORT, ()=>{
    mongoose.connect('mongodb://localhost:27017/meanworkshop')
})
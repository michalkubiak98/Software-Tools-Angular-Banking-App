const express = require('express')
const connectDB = require('./database/mongoose')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
// load config
dotenv.config({ path: './config/config.env'})

connectDB()
const app = express()

const bodyParser = require('body-parser')
// Body Parser - to accept form data we need body parser
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())

// CORS localhost:3000 - backend api localhost:4200 - front-end
// CORS HEADER MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// Use Morgan logging while in development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}



// Dash routes
app.use('/dashboard', require('./routes/dashboard'))

app.use('/cards', require('./routes/cards'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
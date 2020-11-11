const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

    firstName: {
        type: String
    },    
    lastName: {
        type: String
    },
    street: {
        type: String
    },
    town: {
        type: String
    },
    county: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String
    },
    regNo: {
        type: Number
    },
    passcode: {
        type: Number
    },
    balance: {
        type: Number
    } 
})

const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = { Customer }
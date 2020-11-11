const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({

    cardNo: {
        type: Number
    },
    customerId: {
        type: String
    },
    expiry: {
        type: String
    },
    status: {
        type: String
    },
    cvv: {
        type: Number
    },
    pincode: {
        type: Number
    }
})

const Card = mongoose.model('Card', CardSchema)
module.exports = { Card }


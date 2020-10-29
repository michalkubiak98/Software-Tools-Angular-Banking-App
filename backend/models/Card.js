/* const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({

    cardNo: {
        type: Number
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    expiry: {
        type: Date
    },
    cvv: {
        type: Number
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('Card', CardSchema)

*/
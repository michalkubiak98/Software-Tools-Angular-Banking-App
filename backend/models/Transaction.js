const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({

    customerId: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String
    },
    amount: {
        type: Number
    },
    inOut: {
        type: String
    }
    // Then after update customer's balance
})

module.exports = mongoose.model('Transaction', TransactionSchema)



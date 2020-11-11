const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({

    customerId: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: String
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

const Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = { Transaction }



/* const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransactionType'
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


*/
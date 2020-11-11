const mongoose = require('mongoose')

const TransactionTypeSchema = new mongoose.Schema({

    description: {
        type: String
    }
})

module.exports = mongoose.model('TransactionType', TransactionTypeSchema)



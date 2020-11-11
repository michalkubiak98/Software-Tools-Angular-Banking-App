const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// Bring in all models (exported from an index file)
const { Customer, Card, Transaction, TransactionType } = require('../models')


// Get customer Cards
router.get('/', async (req, res) => {


    try {
        await Transaction.find({ }).then((transaction) => {
            //send the customers data
            res.send(transaction)
        })
    }
    catch (err){
        console.log(err)
    }

})


router.post('/', async (req, res, next) => {

    try {
        const customerId = req.body.customerId
        const title = req.body.title
        const date = req.body.date
        const type = req.body.type
        const amount = req.body.amount
        const inOut = req.body.inOut

        
        const newTransaction = new Transaction({
            customerId, title, date,
            type, amount, inOut
        })

        await newTransaction.save().then((transactionDoc) => {
            res.send(transactionDoc)
        })
    }
    catch (err){
        console.log(err)
    }
})


module.exports = router;
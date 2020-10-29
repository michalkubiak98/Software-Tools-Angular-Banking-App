const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// Bring in all models (exported from an index file)
const { Customer } = require('../models')


// TEST - after testing frontend connection to the backend this displays the Customer objects on /dashboard
router.get('/', (req, res, next) => {
    Customer.find({}).then((customers) => {
        res.send(customers)
    })
})
router.post('/', (req, res, next) => {
    //body parser lets us use req.body. whatever
    const firstName = req.body.firstName
    const secondName = req.body.secondName

    const newCustomer = new Customer({
        firstName,
        secondName
    })

    newCustomer.save().then((customerDoc) => {
        res.send(customerDoc)
    })
})



// Get customer Cards
router.get('/cards', (req,res) => {
    res.send('cards')
})

// Get customer transactions table
router.get('/transactions', (req,res) => {
    res.send('transactions')
})

// Get Customer Balance
router.get('/balance', (req,res) => {
    res.send('balance')
})

// Get customer Direct Debits
router.get('/direct-debits', (req,res) => {
    res.send('direct debits')
})

module.exports = router;
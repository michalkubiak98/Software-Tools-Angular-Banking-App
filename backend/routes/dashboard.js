const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// Bring in all models (exported from an index file)
const { Customer, Card, Transaction, TransactionType } = require('../models')


// TEST - after testing frontend connection to the backend this displays the Customer objects on /dashboard
router.get('/', async (req, res) => {


    try {
        await Customer.find({
  
            //specific find conditions
            //find customers with a user id that matches the authenticate() function in appjs
            
            
            //_userId: req.user_id
  
  
        }).then((customers) => {
            //send the customers data
            res.send(customers)
        })
    }
    catch (err){
        console.log(err)
    }

})


router.post('/', async (req, res, next) => {

    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const street = req.body.street
        const town = req.body.town
        const county = req.body.county
        const dateOfBirth = req.body.dateOfBirth
        const email = req.body.email
        const regNo = req.body.regNo
        const passcode = req.body.passcode
        const balance = req.body.balance


        const newCustomer = new Customer({firstName, lastName, street,
            town, county, dateOfBirth, email, regNo, passcode, balance
        })

        await newCustomer.save().then((customerDoc) => {
            res.send(customerDoc)
        })
    }
    catch (err){
        console.log(err)
    }
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
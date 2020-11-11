const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

// Bring in all models (exported from an index file)
const { Customer, Card, Transaction, TransactionType } = require('../models')


// Get customer Cards
router.get('/', async (req, res) => {


    try {
        await Card.find({ }).then((card) => {
            //send the customers data
            res.send(card)
        })
    }
    catch (err){
        console.log(err)
    }

})


router.post('/', async (req, res, next) => {

    try {
        const cardNo = req.body.cardNo
        const customerId = req.body.customerId
        const expiry = req.body.expiry
        const status = req.body.status
        const cvv = req.body.cvv
        const pincode = req.body.pincode

        
        const newCard = new Card({
            cardNo, customerId, expiry,
            status, cvv, pincode
        })

        await newCard.save().then((cardDoc) => {
            res.send(cardDoc)
        })
    }
    catch (err){
        console.log(err)
    }
})


module.exports = router;
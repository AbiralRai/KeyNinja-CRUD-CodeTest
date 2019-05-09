const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.model');

// Get list of customers from db
router.get('/customers/', (req, res, next) => {

})

// Add a customer to the db
router.post('/customers', (req, res, next) => {

})

//Update a customer from the db
router.put('/customers/:id', (req, res, next) => {

    })
    //Delete a customer from the db
router.delete('/customers/:id', (req, res, next) => {

})

module.exports = router;
const express = require('express');
const apiRouter = express.Router();
const Customer = require('../models/customer.model');

// Get list of customers from db
apiRouter.get('/customers/', (req, res, next) => {
    Customer.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                msg: `Something went wrong. ${err}`
            })
        });
})

// // Add a customer to the db
// apiRouter.post('/customers', (req, res, next) => {

// })

// //Update a customer from the db
// apiRouter.put('/customers/:id', (req, res, next) => {

//     })
//     //Delete a customer from the db
// apiRouter.delete('/customers/:id', (req, res, next) => {

// })

module.exports = apiRouter;
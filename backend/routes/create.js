//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');

//configure routes
router.post('/', (request, response) => {
    const input = request.body;// it contains information that is sent from the browser

    const newDocument = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });// information we want to save inside database

    //saving info inside database
    newDocument.save((err, doc) => {
        if (err) {
            console.log(`Error: ${err}`);
            response.status(500).json({ message: 'Problem when saving the information.' });
        } else {
            console.log('The information was saved.');
            response.status(200).json({ message: 'The invoice was created successfully.' })
        }
    });
});


//export the contents
module.exports = router;
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');
let data = null;

router.get('/all', (request, response) => {
    invoiceModel.find((err, docs) => {
        if (err) {
            console.log(`Error: ${err}`);
            response.status(500).json({ message: 'Problem when reading the information.' })
        } else {
            console.log('All the information was found.');
            response.status(200).json(docs);
        }
    })
});

router.get('/:invoiceId', (request, response) => {
    invoiceModel.findOne({
        _id: request.params.invoiceId
    }, (err, invoice) => {
        if (err) {
            console.log(`Error: ${err}`);
            response.status(500).json({ message: "Problem when reading the invoice" })
        } else {
            console.log("Invoice was found.");
            response.status(200).json(invoice);
        }
    })
})


module.exports = router;
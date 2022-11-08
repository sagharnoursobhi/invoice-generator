const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');

router.put('/:invoiceId', (request, response) => {
    const input = request.body;
    console.log(input);

    invoiceModel.updateOne({
        _id: request.params.invoiceId
    }, {

        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription

    }, (err, result) => {
        if (err) {
            console.log(`Error: ${err}`);
            response.status(500).json({ message: 'Problems when updating the information' });
        } else {
            console.log('The information was updated');
            response.status(200).json({ message: 'The invoice was updated successfully' });
        }
    })
});


module.exports = router;
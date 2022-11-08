const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice');


router.delete('/:invoiceId', (request, response) => {
    invoiceModel.deleteOne({
        _id: request.params.invoiceId
    }, (err) => {
        if (err) {
            console.log(`Error: ${err}`);
            response.status(500).json({ message: 'Problems when removing the invoice' });
        } else {
            console.log('Invoice was removed from MongoDB');
            response.status(200).json({ message: 'invoice was removed successfully.' });
        }
    })
})

module.exports = router;
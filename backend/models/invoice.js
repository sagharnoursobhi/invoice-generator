//description about the data which will be stored to the database in called modelling

const mongoose = require('mongoose');

const customSchema = new mongoose.Schema({
    sellerName : {
        type: String,
        required: true
    },
    sellerAddress : {
        type: String,
        required: true
    },
    customerName : {
        type: String,
        required: true
    },
    customerAddress : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
    items : [
        {
            description : {
                type: String,
                required: true
            },
            price : {
                type: Number,
                required: true
            }
        }
    ],
    finalPrice : {
        type: Number,
        required: true
    },
    terms : {
        type: String,
        required: true
    },
    invoiceDescription : {
        type: String,
        required: true
    }
});

//The first parameter is the name of the collection//singular version
module.exports = mongoose.model('invoice', customSchema);
//dependencies
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create static web server
//first argument specifies the path to directories that contains static files */
//path.join(__dirname, 'dist)__dirname contains the path to the root directory and dist is a directory contains static files
app.use(express.static(path.join(__dirname, 'dist')));


//connection to mongodb
mongoose.connect('mongodb+srv://saghar2330:admin2330@'
+ 'invoicegeneratorapp.gf0bvy0.mongodb.net/invoiceStorage?'
+ 'retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
    console.log(`Error: ${err}`);
})

//if everything is working
mongoose.connection.once('open', () => {
    console.log('The connection to MongoDB Atlas is working')
})


//body-parser configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//create rest api routes
//the second argument is the javascript file that will be run after this route is used.
app.use('/api/createinvoice', require('./routes/create.js'));
app.use('/api/readinvoice', require('./routes/read.js'));
app.use('/api/updateinvoice', require('./routes/update.js'));
app.use('/api/deleteinvoice', require('./routes/delete.js'));

app.get('*', (req, res) => {
    res.send('<h1>ERROR 404: page not found</h1>');
})

//routes//get is a http method used to stablish a connection between web browser and we server
/* app.get('/hello', (request, response) => {
    response.send('<h1>Hello World</h1>')
}) FOR TESTING*/

//port configuration
app.listen('3000', () => {
    console.log('Listening to localhost: 3000')
});

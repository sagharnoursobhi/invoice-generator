//dependencies
const express = require('express');
const router = express.Router();

//configure routes
router.get('/', (request, response) => {
    response.send('<h1>Hello from router create.js</h1>');
});


//export the contents
module.exports = router;
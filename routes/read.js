const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('<h1>Hello from router read.js</h1>')
})

module.exports = router;
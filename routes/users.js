const express = require('express');
const router = express.Router();


//Login page
router.get('/login', (req, res) => {
    res.send('Welcome to the Login page')
})

//Register Page
router.get('/register', (req, res) => {
    res.send('Register here')
})

module.exports = router;
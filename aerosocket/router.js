const express = require('express');

const Welcome = require('./controllers/welcome')


const router = express.Router();

// page bienvenue
router.get('/', Welcome.welcome);


module.exports = router;
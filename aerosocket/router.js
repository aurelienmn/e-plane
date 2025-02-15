const express = require('express');

const Welcome = require('./controllers/welcome')
const adsbController = require('./controllers/adsbController');


const router = express.Router();

// page bienvenue
router.get('/', Welcome.welcome);


// Route pour récupérer les données ADS-B
router.get('/adsb', adsbController.getADSBData);


module.exports = router;
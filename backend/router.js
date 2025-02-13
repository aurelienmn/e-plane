const express = require('express');
const router = express.Router();
const ApiController = require('./controllers/api_external');
const AdsbController = require('./controllers/adsb_controller');
const Selectdata = require('./controllers/selectdata_controller');


// obtenir liste récepteur adsb
router.get('/adsb_list', AdsbController.getAll_adsb);
// obtenir la liste des api
router.get('/external_api', ApiController.getAll_api);

// obtenur liste des vols à mettre à jour
router.get('/flights_at_update', ApiController.getflight_to_update);

// exemle de réponse d'api
router.get('/api_response_exemple', ApiController.response_api);


// exemple flight infos
router.get('/flightsdata', Selectdata.flight_data);

// récipére un vol
router.get('/flightsdata/:flight_number', Selectdata.flight_data);

module.exports = router;
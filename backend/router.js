const express = require('express');
const router = express.Router();
const ApiController = require('./controllers/api_external');


// obtenir la liste des api
router.get('/external_api', ApiController.getAll_api);

// obtenur liste des vols à mettre à jour
router.get('/flights_at_update', ApiController.getflight_to_update);

// exemle de réponse d'api
router.get('/api_response_exemple', ApiController.response_api);

module.exports = router;
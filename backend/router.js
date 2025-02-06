const express = require('express');
const router = express.Router();
const ApiController = require('./controllers/api_external');

router.get('/', ApiController.getAll_api);

module.exports = router;
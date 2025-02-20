const express = require("express");
const Welcome = require("./controllers/welcome");
const adsbController = require("./controllers/adsbController");
const apiKeyController = require("./controllers/apiKeyController");

const router = express.Router();

// Page de bienvenue
router.get("/", Welcome.welcome);

// Route publique pour récupérer les données ADS-B
router.get("/adsb", adsbController.getADSBData);

// Routes API publiques (plus de vérification d'API Key)
router.post("/api/keys", apiKeyController.generateApiKey);
router.get("/api/keys", apiKeyController.listApiKeys);
router.delete("/api/keys/:id", apiKeyController.removeApiKey);

module.exports = router;

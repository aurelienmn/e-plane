const express = require("express");
const router = express.Router();
const ApiController = require("./controllers/api_external");
const AdsbController = require("./controllers/adsb_controller");
const Selectdata = require("./controllers/selectdata_controller");
const Luggage = require("./controllers/luggages_controller");
const authController = require("./controllers/authController");
const apiKeyController = require("./controllers/apiKeyController");
const authMiddleware = require("./middleware/authMiddleware");

// ----------------- GESTION DES DONNÉES DE VOL & API EXTERNES -----------------

// obtenir liste récepteur adsb
router.get("/adsb_list", AdsbController.getAll_adsb);
// obtenir la liste des api
router.get("/external_api", ApiController.getAll_api);

// obtenur liste des vols à mettre à jour
router.get("/flights_at_update", ApiController.getflight_to_update);

// exemle de réponse d'api
router.get("/api_response_exemple", ApiController.response_api);

// recherche par flight number
router.get("/flightsdata/:flight_number", Selectdata.flight_data);

// exemple flight infos
router.get("/flightsdata", Selectdata.flight_data);

// récipére un vol
router.get("/flightone/:flight_number", Selectdata.flight_data_one);

// ----------------- AEROSOCKET -----------------
// Routes API publiques
router.post("/keys", authMiddleware, apiKeyController.generateApiKey);
router.get("/keys", authMiddleware, apiKeyController.listApiKeys);
router.delete("/keys/:id", authMiddleware, apiKeyController.removeApiKey);

// ----------------- BAGGAGE -----------------
// fake data
router.get("/allluggages", authMiddleware, Luggage.luggage);

// ----------------- AUTHENTIFICATION -----------------
// Inscription pour les deux rôles
router.post("/register", authController.register);

// Connexion
router.post("/login", authController.login);

// Déconnexion
router.post("/logout", authMiddleware, authController.logout);

module.exports = router;

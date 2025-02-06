const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db'); // Connexion DB
const router = require('./router');

const app = express();
const port = process.env.PORT || 5252;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fichiers statiques
app.use(express.static('public'));

// Routes
app.use('/', router);

// Middleware 404 pour les routes non trouvées
app.use((req, res, next) => {
    res.status(404).send("Page non trouvée !");
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
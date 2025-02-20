const {
  createApiKey,
  getAllApiKeys,
  deleteApiKey,
} = require("../models/apiKeyModel");
const randomstring = require("randomstring");

// Générer une nouvelle clé API
const generateApiKey = async (req, res) => {
  try {
    const apiKey = randomstring.generate(32);
    await createApiKey(apiKey);
    res.status(201).json({ apiKey });
  } catch (err) {
    console.error("Erreur lors de la création de la clé API :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Récupérer toutes les clés API
const listApiKeys = async (req, res) => {
  try {
    const keys = await getAllApiKeys();
    res.json(keys);
  } catch (err) {
    console.error("Erreur lors de la récupération des clés API :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Supprimer une clé API par ID
const removeApiKey = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteApiKey(id);
    res.json({ message: "Clé API supprimée" });
  } catch (err) {
    console.error("Erreur lors de la suppression de la clé API :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = { generateApiKey, listApiKeys, removeApiKey };

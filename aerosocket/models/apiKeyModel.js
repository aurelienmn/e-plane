const pool = require("../config/db");

// Générer et stocker une nouvelle clé API
const createApiKey = async (apiKey) => {
  await pool.query("INSERT INTO api_keys (api_key) VALUES ($1)", [apiKey]); // Correction ici
};

// Vérifier si une clé API est valide
const verifyApiKey = async (apiKey) => {
  const result = await pool.query("SELECT * FROM api_keys WHERE api_key = $1", [
    apiKey,
  ]); // Correction ici
  return result.rows.length > 0;
};

// Récupérer toutes les clés API
const getAllApiKeys = async () => {
  const result = await pool.query(
    "SELECT id, api_key, created_at FROM api_keys ORDER BY created_at DESC" // Correction ici
  );
  return result.rows;
};

// Supprimer une clé API par ID
const deleteApiKey = async (id) => {
  await pool.query("DELETE FROM api_keys WHERE id = $1", [id]);
};

module.exports = { createApiKey, verifyApiKey, getAllApiKeys, deleteApiKey };

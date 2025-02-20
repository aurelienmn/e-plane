-- Création de la table api_keys
CREATE TABLE IF NOT EXISTS api_keys (
    id SERIAL PRIMARY KEY,
    api_key TEXT UNIQUE NOT NULL, -- Correction ici
    created_at TIMESTAMP DEFAULT NOW()
);

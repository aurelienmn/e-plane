-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS api_mapping;
DROP TABLE IF EXISTS api_info;
DROP TABLE IF EXISTS adsb_info;

-- Création de la table qui stocke les adsb
CREATE TABLE adsb_info (
    id SERIAL PRIMARY KEY,
    base_url VARCHAR(512) NOT NULL
);

-- Création de la table qui stocke les API
CREATE TABLE api_info (
    id SERIAL PRIMARY KEY,
    name_api VARCHAR(255) UNIQUE,
    base_url VARCHAR(512) NOT NULL
);

-- Création de la table qui stocke le mapping des champs
CREATE TABLE api_mapping (
    id SERIAL PRIMARY KEY,
    api_id INT REFERENCES api_info(id) ON DELETE CASCADE,
    db_field VARCHAR(255) NOT NULL,
    api_path VARCHAR(255) NOT NULL
);

-- Création de la table users
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table vols à suivre
CREATE TABLE "tracked_flights" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "users"("id") ON DELETE CASCADE,
    "flight_iata" VARCHAR(10) NOT NULL,
    "flight_icao" VARCHAR(10),
    "departure_iata" VARCHAR(5),
    "arrival_iata" VARCHAR(5),
    "status" VARCHAR(20) DEFAULT 'scheduled',
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la fonction de mise à jour du champ 'updated_at'
CREATE OR REPLACE FUNCTION update_flight_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Création du trigger pour mettre à jour 'updated_at' à chaque mise à jour d'une ligne
CREATE TRIGGER update_flight_timestamp_trigger
BEFORE UPDATE ON tracked_flights
FOR EACH ROW
EXECUTE FUNCTION update_flight_timestamp();

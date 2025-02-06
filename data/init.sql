-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS api_mapping;
DROP TABLE IF EXISTS api_info;

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

-- Insertion des informations de l'API "airlabs"
INSERT INTO api_info (name_api, base_url) VALUES ('airlabs', 'https://airlabs.example.com') RETURNING id;

-- Récupération de l'ID de l'API "airlabs"
WITH airlabs_id AS (
    SELECT id FROM api_info WHERE name_api = 'airlabs'
)
-- Insertion du mapping pour l'API "airlabs"
INSERT INTO api_mapping (api_id, db_field, api_path)
SELECT id, 'flight_number', 'flight.number' FROM airlabs_id UNION ALL
SELECT id, 'airline_iata', 'airline.iata' FROM airlabs_id UNION ALL
SELECT id, 'status', 'flight_status' FROM airlabs_id UNION ALL
SELECT id, 'dep_iata', 'departure.iata' FROM airlabs_id UNION ALL
SELECT id, 'dep_terminal', 'departure.terminal' FROM airlabs_id UNION ALL
SELECT id, 'dep_gate', 'departure.gate' FROM airlabs_id UNION ALL
SELECT id, 'dep_delayed', 'departure.delay' FROM airlabs_id UNION ALL
SELECT id, 'dep_time', 'departure.scheduled' FROM airlabs_id UNION ALL
SELECT id, 'dep_estimated', 'departure.estimated' FROM airlabs_id UNION ALL
SELECT id, 'dep_actual', 'departure.actual' FROM airlabs_id UNION ALL
SELECT id, 'arr_iata', 'arrival.iata' FROM airlabs_id UNION ALL
SELECT id, 'arr_icao', 'arrival.icao' FROM airlabs_id UNION ALL
SELECT id, 'arr_terminal', 'arrival.terminal' FROM airlabs_id UNION ALL
SELECT id, 'arr_gate', 'arrival.gate' FROM airlabs_id UNION ALL
SELECT id, 'arr_baggage', 'arrival.baggage' FROM airlabs_id UNION ALL
SELECT id, 'arr_time', 'arrival.scheduled' FROM airlabs_id UNION ALL
SELECT id, 'arr_estimated', 'arrival.estimated' FROM airlabs_id UNION ALL
SELECT id, 'arr_actual', 'arrival.actual' FROM airlabs_id UNION ALL
SELECT id, 'lat', 'live.latitude' FROM airlabs_id UNION ALL
SELECT id, 'lng', 'live.longitude' FROM airlabs_id;

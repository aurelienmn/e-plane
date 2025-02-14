-- Insérer l'API AviationStack
INSERT INTO api_info (name_api, base_url) 
VALUES ('aviationstack', 'https://api.aviationstack.com/v1/flights') RETURNING id;

-- Ajouter les mappings pour AviationStack
WITH aviationstack_id AS (
    SELECT id FROM api_info WHERE name_api = 'aviationstack'
)
INSERT INTO api_mapping (api_id, db_field, api_path)
SELECT id, 'flight_number', 'flight.number' FROM aviationstack_id UNION ALL
SELECT id, 'airline_iata', 'airline.iata' FROM aviationstack_id UNION ALL
SELECT id, 'status', 'flight_status' FROM aviationstack_id UNION ALL
SELECT id, 'dep_iata', 'departure.iata' FROM aviationstack_id UNION ALL
SELECT id, 'dep_terminal', 'departure.terminal' FROM aviationstack_id UNION ALL
SELECT id, 'dep_gate', 'departure.gate' FROM aviationstack_id UNION ALL
SELECT id, 'dep_delayed', 'departure.delay' FROM aviationstack_id UNION ALL
SELECT id, 'dep_time', 'departure.scheduled' FROM aviationstack_id UNION ALL
SELECT id, 'dep_estimated', 'departure.estimated' FROM aviationstack_id UNION ALL
SELECT id, 'dep_actual', 'departure.actual' FROM aviationstack_id UNION ALL
SELECT id, 'arr_iata', 'arrival.iata' FROM aviationstack_id UNION ALL
SELECT id, 'arr_icao', 'arrival.icao' FROM aviationstack_id UNION ALL
SELECT id, 'arr_terminal', 'arrival.terminal' FROM aviationstack_id UNION ALL
SELECT id, 'arr_gate', 'arrival.gate' FROM aviationstack_id UNION ALL
SELECT id, 'arr_baggage', 'arrival.baggage' FROM aviationstack_id UNION ALL
SELECT id, 'arr_time', 'arrival.scheduled' FROM aviationstack_id UNION ALL
SELECT id, 'arr_estimated', 'arrival.estimated' FROM aviationstack_id UNION ALL
SELECT id, 'arr_actual', 'arrival.actual' FROM aviationstack_id UNION ALL
SELECT id, 'lat', 'live.latitude' FROM aviationstack_id UNION ALL
SELECT id, 'lng', 'live.longitude' FROM aviationstack_id;


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

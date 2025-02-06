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

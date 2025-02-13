

const flight_data = async (req, res) => {
    try {
        const flightsdata = [
            {
                "flight_number": "AF123",
                "dep_iata": "CDG",
                "arr_iata": "JFK",
                "dep_delayed": true,
                "airline_iata": "AF",
                "dep_terminal": "2E",
                "arr_icao": "KJFK",
                "lat": 40.6413,
                "lng": -73.7781,
                "status": "en vol",
                "dep_gate": "A34",
                "arr_terminal": "4",
                "duration": "07:30",
                "dep_time": "2024-08-15T14:00:00Z",
                "arr_gate": "B22",
                "dep_estimated": "2024-08-15T14:15:00Z",
                "arr_baggage": "Carrousel 5",
                "dep_actual": "2024-08-15T14:10:00Z",
                "arr_time": "2024-08-15T21:30:00Z",
                "dep_estimated_utc": "2024-08-15T12:15:00Z",
                "arr_estimated": "2024-08-15T21:45:00Z",
                "dep_time_utc": "2024-08-15T12:00:00Z",
                "arr_actual": "2024-08-15T21:35:00Z",
                "arr_time_utc": "2024-08-15T19:30:00Z",
                "arr_estimated_utc": "2024-08-15T19:45:00Z",
                "arr_actual_utc": "2024-08-15T19:35:00Z",
                "arr_delayed": false
            },
            {
                "flight_number": "LH456",
                "dep_iata": "FRA",
                "arr_iata": "LHR",
                "dep_delayed": false,
                "airline_iata": "LH",
                "dep_terminal": "1",
                "arr_icao": "EGLL",
                "lat": 51.4706,
                "lng": -0.4619,
                "status": "atterri",
                "dep_gate": "B12",
                "arr_terminal": "5",
                "duration": "01:45",
                "dep_time": "2024-08-15T09:00:00Z",
                "arr_gate": "C56",
                "dep_estimated": "2024-08-15T09:00:00Z",
                "arr_baggage": "Carrousel 3",
                "dep_actual": "2024-08-15T09:00:00Z",
                "arr_time": "2024-08-15T10:45:00Z",
                "dep_estimated_utc": "2024-08-15T07:00:00Z",
                "arr_estimated": "2024-08-15T10:45:00Z",
                "dep_time_utc": "2024-08-15T07:00:00Z",
                "arr_actual": "2024-08-15T10:45:00Z",
                "arr_time_utc": "2024-08-15T09:45:00Z",
                "arr_estimated_utc": "2024-08-15T09:45:00Z",
                "arr_actual_utc": "2024-08-15T09:45:00Z",
                "arr_delayed": false
            },
            {
                "flight_number": "BA789",
                "dep_iata": "LHR",
                "arr_iata": "DXB",
                "dep_delayed": true,
                "airline_iata": "BA",
                "dep_terminal": "5",
                "arr_icao": "OMDB",
                "lat": 25.2528,
                "lng": 55.3644,
                "status": "en vol",
                "dep_gate": "C56",
                "arr_terminal": "3",
                "duration": "07:15",
                "dep_time": "2024-08-15T12:00:00Z",
                "arr_gate": "A10",
                "dep_estimated": "2024-08-15T12:20:00Z",
                "arr_baggage": "Carrousel 7",
                "dep_actual": "2024-08-15T12:15:00Z",
                "arr_time": "2024-08-15T19:15:00Z",
                "dep_estimated_utc": "2024-08-15T10:20:00Z",
                "arr_estimated": "2024-08-15T19:30:00Z",
                "dep_time_utc": "2024-08-15T10:00:00Z",
                "arr_actual": "2024-08-15T19:20:00Z",
                "arr_time_utc": "2024-08-15T15:15:00Z",
                "arr_estimated_utc": "2024-08-15T15:30:00Z",
                "arr_actual_utc": "2024-08-15T15:20:00Z",
                "arr_delayed": true
            }
        ];

        res.json(flightsdata);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des récepteur adsb.' });
    }

};

module.exports = { flight_data }
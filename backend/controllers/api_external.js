const Api_external = require('../models/api_extenalModels');

const getAll_api = async (req, res) => {
    try {
        const api_externe = await Api_external.getAll();
        res.json(api_externe);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des API' });
    }
};

const getflight_to_update = async (req, res) => {
    try {
        const exemple_flight_at_update = [
            {
                "id": 1,
                "iata": "AF123",
                "departure_airport": "CDG",
                "arrival_airport": "JFK",
                "scheduled_departure": "2025-02-07T14:30:00Z",
                "scheduled_arrival": "2025-02-07T18:00:00Z",
                "status": "scheduled"
            },
            {
                "id": 2,
                "iata": "BA456",
                "departure_airport": "LHR",
                "arrival_airport": "LAX",
                "scheduled_departure": "2025-02-07T16:45:00Z",
                "scheduled_arrival": "2025-02-07T23:10:00Z",
                "status": "delayed"
            },
            {
                "id": 3,
                "iata": "DL789",
                "departure_airport": "ATL",
                "arrival_airport": "ORD",
                "scheduled_departure": "2025-02-07T12:15:00Z",
                "scheduled_arrival": "2025-02-07T14:30:00Z",
                "status": "on-time"
            },
            {
                "id": 4,
                "iata": "LH321",
                "departure_airport": "FRA",
                "arrival_airport": "DXB",
                "scheduled_departure": "2025-02-07T20:00:00Z",
                "scheduled_arrival": "2025-02-08T05:30:00Z",
                "status": "cancelled"
            }
        ];

        res.json(exemple_flight_at_update);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des vols' });
    }
};


const response_api = async (req, res) => {
    try {
        const exemple_flight_response_api = [{
            "pagination": {
                "limit": 100,
                "offset": 0,
                "count": 100,
                "total": 4736
            },
            "data": [
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A22",
                        "delay": 20,
                        "scheduled": "2024-03-18T14:15:00+00:00",
                        "estimated": "2024-03-18T14:15:00+00:00",
                        "actual": "2024-03-18T14:34:00+00:00",
                        "estimated_runway": "2024-03-18T14:34:00+00:00",
                        "actual_runway": "2024-03-18T14:34:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dublin International",
                        "timezone": "Europe/Dublin",
                        "iata": "DUB",
                        "icao": "EIDW",
                        "terminal": "2",
                        "gate": "409",
                        "baggage": "1",
                        "delay": null,
                        "scheduled": "2024-03-18T15:40:00+00:00",
                        "estimated": "2024-03-18T15:40:00+00:00",
                        "actual": "2024-03-18T15:22:00+00:00",
                        "estimated_runway": "2024-03-18T15:22:00+00:00",
                        "actual_runway": "2024-03-18T15:22:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "5965",
                        "iata": "BA5965",
                        "icao": "BAW5965",
                        "codeshared": {
                            "airline_name": "aer lingus",
                            "airline_iata": "ei",
                            "airline_icao": "ein",
                            "flight_number": "165",
                            "flight_iata": "ei165",
                            "flight_icao": "ein165"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A4",
                        "delay": 35,
                        "scheduled": "2024-03-18T07:55:00+00:00",
                        "estimated": "2024-03-18T07:55:00+00:00",
                        "actual": "2024-03-18T08:29:00+00:00",
                        "estimated_runway": "2024-03-18T08:29:00+00:00",
                        "actual_runway": "2024-03-18T08:29:00+00:00"
                    },
                    "arrival": {
                        "airport": "Manchester Airport",
                        "timezone": "Europe/London",
                        "iata": "MAN",
                        "icao": "EGCC",
                        "terminal": "3",
                        "gate": "142",
                        "baggage": "13",
                        "delay": 6,
                        "scheduled": "2024-03-18T08:55:00+00:00",
                        "estimated": "2024-03-18T08:55:00+00:00",
                        "actual": "2024-03-18T09:01:00+00:00",
                        "estimated_runway": "2024-03-18T09:01:00+00:00",
                        "actual_runway": "2024-03-18T09:01:00+00:00"
                    },
                    "airline": {
                        "name": "Jet Linx Aviation",
                        "iata": "JL",
                        "icao": "JTL"
                    },
                    "flight": {
                        "number": "6509",
                        "iata": "JL6509",
                        "icao": "JTL6509",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "1386",
                            "flight_iata": "ba1386",
                            "flight_icao": "baw1386"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C56",
                        "delay": 40,
                        "scheduled": "2024-03-18T12:45:00+00:00",
                        "estimated": "2024-03-18T12:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Dubai",
                        "timezone": "Asia/Dubai",
                        "iata": "DXB",
                        "icao": "OMDB",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "01",
                        "delay": null,
                        "scheduled": "2024-03-18T23:45:00+00:00",
                        "estimated": "2024-03-18T23:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "107",
                        "iata": "BA107",
                        "icao": "BAW107",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-XLEC",
                        "iata": "A388",
                        "icao": "A388",
                        "icao24": "40688D"
                    },
                    "live": {
                        "updated": "2024-03-18T15:37:30+00:00",
                        "latitude": 48.2372,
                        "longitude": 18.7524,
                        "altitude": 11277.6,
                        "direction": 116,
                        "speed_horizontal": 948.224,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "35",
                        "delay": 28,
                        "scheduled": "2024-03-18T10:05:00+00:00",
                        "estimated": "2024-03-18T10:05:00+00:00",
                        "actual": "2024-03-18T10:32:00+00:00",
                        "estimated_runway": "2024-03-18T10:32:00+00:00",
                        "actual_runway": "2024-03-18T10:32:00+00:00"
                    },
                    "arrival": {
                        "airport": "Logan International",
                        "timezone": "America/New_York",
                        "iata": "BOS",
                        "icao": "KBOS",
                        "terminal": "E",
                        "gate": "E5",
                        "baggage": "CUS",
                        "delay": null,
                        "scheduled": "2024-03-18T13:35:00+00:00",
                        "estimated": "2024-03-18T13:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Iberia",
                        "iata": "IB",
                        "icao": "IBE"
                    },
                    "flight": {
                        "number": "4261",
                        "iata": "IB4261",
                        "icao": "IBE4261",
                        "codeshared": {
                            "airline_name": "american airlines",
                            "airline_iata": "aa",
                            "airline_icao": "aal",
                            "flight_number": "109",
                            "flight_iata": "aa109",
                            "flight_icao": "aal109"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "F",
                        "delay": null,
                        "scheduled": "2024-03-18T22:00:00+00:00",
                        "estimated": "2024-03-18T22:00:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Dubai",
                        "timezone": "Asia/Dubai",
                        "iata": "DXB",
                        "icao": "OMDB",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T08:45:00+00:00",
                        "estimated": "2024-03-19T08:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Emirates",
                        "iata": "EK",
                        "icao": "UAE"
                    },
                    "flight": {
                        "number": "6",
                        "iata": "EK6",
                        "icao": "UAE6",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "17",
                        "delay": 15,
                        "scheduled": "2024-03-18T14:35:00+00:00",
                        "estimated": "2024-03-18T14:35:00+00:00",
                        "actual": "2024-03-18T14:50:00+00:00",
                        "estimated_runway": "2024-03-18T14:50:00+00:00",
                        "actual_runway": "2024-03-18T14:50:00+00:00"
                    },
                    "arrival": {
                        "airport": "Orlando International",
                        "timezone": "America/New_York",
                        "iata": "MCO",
                        "icao": "KMCO",
                        "terminal": "A",
                        "gate": "94",
                        "baggage": "8A",
                        "delay": null,
                        "scheduled": "2024-03-18T20:45:00+00:00",
                        "estimated": "2024-03-18T20:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Virgin Atlantic",
                        "iata": "VS",
                        "icao": "VIR"
                    },
                    "flight": {
                        "number": "91",
                        "iata": "VS91",
                        "icao": "VIR91",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "B33",
                        "delay": null,
                        "scheduled": "2024-03-18T16:30:00+00:00",
                        "estimated": "2024-03-18T16:30:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Pierre Elliott Trudeau International",
                        "timezone": "America/Montreal",
                        "iata": "YUL",
                        "icao": "CYUL",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T19:55:00+00:00",
                        "estimated": "2024-03-18T19:55:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Qatar Airways",
                        "iata": "QR",
                        "icao": "QTR"
                    },
                    "flight": {
                        "number": "5991",
                        "iata": "QR5991",
                        "icao": "QTR5991",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "95",
                            "flight_iata": "ba95",
                            "flight_icao": "baw95"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "B33",
                        "delay": null,
                        "scheduled": "2024-03-18T16:30:00+00:00",
                        "estimated": "2024-03-18T16:30:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Pierre Elliott Trudeau International",
                        "timezone": "America/Montreal",
                        "iata": "YUL",
                        "icao": "CYUL",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T19:55:00+00:00",
                        "estimated": "2024-03-18T19:55:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "6920",
                        "iata": "AA6920",
                        "icao": "AAL6920",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "95",
                            "flight_iata": "ba95",
                            "flight_icao": "baw95"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "21",
                        "delay": 53,
                        "scheduled": "2024-03-18T15:50:00+00:00",
                        "estimated": "2024-03-18T15:50:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Miami International Airport",
                        "timezone": "America/New_York",
                        "iata": "MIA",
                        "icao": "KMIA",
                        "terminal": "S",
                        "gate": "J18",
                        "baggage": "J IN",
                        "delay": null,
                        "scheduled": "2024-03-18T21:45:00+00:00",
                        "estimated": "2024-03-18T21:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Singapore Airlines",
                        "iata": "SQ",
                        "icao": "SIA"
                    },
                    "flight": {
                        "number": "2505",
                        "iata": "SQ2505",
                        "icao": "SIA2505",
                        "codeshared": {
                            "airline_name": "virgin atlantic",
                            "airline_iata": "vs",
                            "airline_icao": "vir",
                            "flight_number": "5",
                            "flight_iata": "vs5",
                            "flight_icao": "vir5"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "13",
                        "delay": 40,
                        "scheduled": "2024-03-18T12:20:00+00:00",
                        "estimated": "2024-03-18T12:20:00+00:00",
                        "actual": "2024-03-18T13:00:00+00:00",
                        "estimated_runway": "2024-03-18T13:00:00+00:00",
                        "actual_runway": "2024-03-18T13:00:00+00:00"
                    },
                    "arrival": {
                        "airport": "Salt Lake City International",
                        "timezone": "America/Denver",
                        "iata": "SLC",
                        "icao": "KSLC",
                        "terminal": null,
                        "gate": "A19",
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T16:45:00+00:00",
                        "estimated": "2024-03-18T16:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Delta Air Lines",
                        "iata": "DL",
                        "icao": "DAL"
                    },
                    "flight": {
                        "number": "51",
                        "iata": "DL51",
                        "icao": "DAL51",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "N859NW",
                        "iata": "A332",
                        "icao": "A332",
                        "icao24": "ABCA08"
                    },
                    "live": {
                        "updated": "2024-03-18T15:39:03+00:00",
                        "latitude": 64.4527,
                        "longitude": -27.8104,
                        "altitude": 11277.6,
                        "direction": 301,
                        "speed_horizontal": 890.812,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A16",
                        "delay": 37,
                        "scheduled": "2024-03-18T12:20:00+00:00",
                        "estimated": "2024-03-18T12:20:00+00:00",
                        "actual": "2024-03-18T12:57:00+00:00",
                        "estimated_runway": "2024-03-18T12:57:00+00:00",
                        "actual_runway": "2024-03-18T12:57:00+00:00"
                    },
                    "arrival": {
                        "airport": "John F Kennedy International",
                        "timezone": "America/New_York",
                        "iata": "JFK",
                        "icao": "KJFK",
                        "terminal": "5",
                        "gate": "25",
                        "baggage": "7",
                        "delay": 10,
                        "scheduled": "2024-03-18T16:29:00+00:00",
                        "estimated": "2024-03-18T16:29:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "JetBlue Airways",
                        "iata": "B6",
                        "icao": "JBU"
                    },
                    "flight": {
                        "number": "20",
                        "iata": "B620",
                        "icao": "JBU20",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "N4058J",
                        "iata": "A21N",
                        "icao": "A21N",
                        "icao24": "A4C2AD"
                    },
                    "live": {
                        "updated": "2024-03-18T14:27:09+00:00",
                        "latitude": 55.0994,
                        "longitude": -15.9579,
                        "altitude": 9761.22,
                        "direction": 294,
                        "speed_horizontal": 809.324,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "B",
                        "delay": null,
                        "scheduled": "2024-03-18T21:15:00+00:00",
                        "estimated": "2024-03-18T21:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Taiwan Taoyuan International (Chiang Kai Shek International)",
                        "timezone": "Asia/Taipei",
                        "iata": "TPE",
                        "icao": "RCTP",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "4B",
                        "delay": null,
                        "scheduled": "2024-03-19T18:15:00+00:00",
                        "estimated": "2024-03-19T18:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "China Airlines",
                        "iata": "CI",
                        "icao": "CAL"
                    },
                    "flight": {
                        "number": "82",
                        "iata": "CI82",
                        "icao": "CAL82",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A7",
                        "delay": 12,
                        "scheduled": "2024-03-18T10:55:00+00:00",
                        "estimated": "2024-03-18T10:55:00+00:00",
                        "actual": "2024-03-18T11:06:00+00:00",
                        "estimated_runway": "2024-03-18T11:06:00+00:00",
                        "actual_runway": "2024-03-18T11:06:00+00:00"
                    },
                    "arrival": {
                        "airport": "Arlanda",
                        "timezone": "Europe/Stockholm",
                        "iata": "ARN",
                        "icao": "ESSA",
                        "terminal": "2",
                        "gate": "86",
                        "baggage": "2",
                        "delay": null,
                        "scheduled": "2024-03-18T14:30:00+00:00",
                        "estimated": "2024-03-18T14:30:00+00:00",
                        "actual": "2024-03-18T14:07:00+00:00",
                        "estimated_runway": "2024-03-18T14:07:00+00:00",
                        "actual_runway": "2024-03-18T14:07:00+00:00"
                    },
                    "airline": {
                        "name": "Finnair",
                        "iata": "AY",
                        "icao": "FIN"
                    },
                    "flight": {
                        "number": "5928",
                        "iata": "AY5928",
                        "icao": "FIN5928",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "778",
                            "flight_iata": "ba778",
                            "flight_icao": "baw778"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A25",
                        "delay": 27,
                        "scheduled": "2024-03-18T10:00:00+00:00",
                        "estimated": "2024-03-18T10:00:00+00:00",
                        "actual": "2024-03-18T10:27:00+00:00",
                        "estimated_runway": "2024-03-18T10:27:00+00:00",
                        "actual_runway": "2024-03-18T10:27:00+00:00"
                    },
                    "arrival": {
                        "airport": "Shannon",
                        "timezone": "Europe/Dublin",
                        "iata": "SNN",
                        "icao": "EINN",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T11:30:00+00:00",
                        "estimated": "2024-03-18T11:30:00+00:00",
                        "actual": "2024-03-18T11:27:00+00:00",
                        "estimated_runway": "2024-03-18T11:27:00+00:00",
                        "actual_runway": "2024-03-18T11:27:00+00:00"
                    },
                    "airline": {
                        "name": "Qatar Airways",
                        "iata": "QR",
                        "icao": "QTR"
                    },
                    "flight": {
                        "number": "9675",
                        "iata": "QR9675",
                        "icao": "QTR9675",
                        "codeshared": {
                            "airline_name": "aer lingus",
                            "airline_iata": "ei",
                            "airline_icao": "ein",
                            "flight_number": "381",
                            "flight_iata": "ei381",
                            "flight_icao": "ein381"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A25",
                        "delay": 27,
                        "scheduled": "2024-03-18T10:00:00+00:00",
                        "estimated": "2024-03-18T10:00:00+00:00",
                        "actual": "2024-03-18T10:27:00+00:00",
                        "estimated_runway": "2024-03-18T10:27:00+00:00",
                        "actual_runway": "2024-03-18T10:27:00+00:00"
                    },
                    "arrival": {
                        "airport": "Shannon",
                        "timezone": "Europe/Dublin",
                        "iata": "SNN",
                        "icao": "EINN",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T11:30:00+00:00",
                        "estimated": "2024-03-18T11:30:00+00:00",
                        "actual": "2024-03-18T11:27:00+00:00",
                        "estimated_runway": "2024-03-18T11:27:00+00:00",
                        "actual_runway": "2024-03-18T11:27:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "5941",
                        "iata": "BA5941",
                        "icao": "BAW5941",
                        "codeshared": {
                            "airline_name": "aer lingus",
                            "airline_iata": "ei",
                            "airline_icao": "ein",
                            "flight_number": "381",
                            "flight_iata": "ei381",
                            "flight_icao": "ein381"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": null,
                        "delay": 20,
                        "scheduled": "2024-03-18T18:05:00+00:00",
                        "estimated": "2024-03-18T18:05:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Geneve-cointrin",
                        "timezone": "Europe/Zurich",
                        "iata": "GVA",
                        "icao": "LSGG",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "7",
                        "delay": null,
                        "scheduled": "2024-03-18T20:50:00+00:00",
                        "estimated": "2024-03-18T20:50:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "LATAM Airlines",
                        "iata": "LA",
                        "icao": "LAN"
                    },
                    "flight": {
                        "number": "5573",
                        "iata": "LA5573",
                        "icao": "LAN5573",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "742",
                            "flight_iata": "ba742",
                            "flight_icao": "baw742"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A20",
                        "delay": 26,
                        "scheduled": "2024-03-18T14:35:00+00:00",
                        "estimated": "2024-03-18T14:35:00+00:00",
                        "actual": "2024-03-18T15:00:00+00:00",
                        "estimated_runway": "2024-03-18T15:00:00+00:00",
                        "actual_runway": "2024-03-18T15:00:00+00:00"
                    },
                    "arrival": {
                        "airport": "Stuttgart Echterdingen",
                        "timezone": "Europe/Berlin",
                        "iata": "STR",
                        "icao": "EDDS",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": 1,
                        "scheduled": "2024-03-18T17:10:00+00:00",
                        "estimated": "2024-03-18T17:10:00+00:00",
                        "actual": "2024-03-18T17:07:00+00:00",
                        "estimated_runway": "2024-03-18T17:07:00+00:00",
                        "actual_runway": "2024-03-18T17:07:00+00:00"
                    },
                    "airline": {
                        "name": "Eurowings",
                        "iata": "EW",
                        "icao": "EWG"
                    },
                    "flight": {
                        "number": "2461",
                        "iata": "EW2461",
                        "icao": "EWG2461",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "D-AGWD",
                        "iata": "A319",
                        "icao": "A319",
                        "icao24": "3C5EE4"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "1",
                        "delay": 22,
                        "scheduled": "2024-03-18T14:25:00+00:00",
                        "estimated": "2024-03-18T14:25:00+00:00",
                        "actual": "2024-03-18T14:46:00+00:00",
                        "estimated_runway": "2024-03-18T14:46:00+00:00",
                        "actual_runway": "2024-03-18T14:46:00+00:00"
                    },
                    "arrival": {
                        "airport": "Sky Harbor International",
                        "timezone": "America/Phoenix",
                        "iata": "PHX",
                        "icao": "KPHX",
                        "terminal": "4",
                        "gate": "B25",
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T18:30:00+00:00",
                        "estimated": "2024-03-18T18:30:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "7000",
                        "iata": "AA7000",
                        "icao": "AAL7000",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "289",
                            "flight_iata": "ba289",
                            "flight_icao": "baw289"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "B44",
                        "delay": null,
                        "scheduled": "2024-03-18T19:10:00+00:00",
                        "estimated": "2024-03-18T19:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "George Best Belfast City",
                        "timezone": "Europe/London",
                        "iata": "BHD",
                        "icao": "EGAC",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T20:35:00+00:00",
                        "estimated": "2024-03-18T20:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "6705",
                        "iata": "AA6705",
                        "icao": "AAL6705",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "1422",
                            "flight_iata": "ba1422",
                            "flight_icao": "baw1422"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A26",
                        "delay": 15,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:14:00+00:00",
                        "estimated_runway": "2024-03-18T09:14:00+00:00",
                        "actual_runway": "2024-03-18T09:14:00+00:00"
                    },
                    "arrival": {
                        "airport": "Halifax International",
                        "timezone": "America/Halifax",
                        "iata": "YHZ",
                        "icao": "CYHZ",
                        "terminal": "4",
                        "gate": "52",
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T13:00:00+00:00",
                        "estimated": "2024-03-18T13:00:00+00:00",
                        "actual": "2024-03-18T12:38:00+00:00",
                        "estimated_runway": "2024-03-18T12:38:00+00:00",
                        "actual_runway": "2024-03-18T12:38:00+00:00"
                    },
                    "airline": {
                        "name": "Air Canada",
                        "iata": "AC",
                        "icao": "ACA"
                    },
                    "flight": {
                        "number": "869",
                        "iata": "AC869",
                        "icao": "ACA869",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A18",
                        "delay": 46,
                        "scheduled": "2024-03-18T14:10:00+00:00",
                        "estimated": "2024-03-18T14:10:00+00:00",
                        "actual": "2024-03-18T14:55:00+00:00",
                        "estimated_runway": "2024-03-18T14:55:00+00:00",
                        "actual_runway": "2024-03-18T14:55:00+00:00"
                    },
                    "arrival": {
                        "airport": "Frankfurt International Airport",
                        "timezone": "Europe/Berlin",
                        "iata": "FRA",
                        "icao": "EDDF",
                        "terminal": "2",
                        "gate": null,
                        "baggage": "46",
                        "delay": 9,
                        "scheduled": "2024-03-18T16:55:00+00:00",
                        "estimated": "2024-03-18T16:55:00+00:00",
                        "actual": "2024-03-18T17:00:00+00:00",
                        "estimated_runway": "2024-03-18T17:00:00+00:00",
                        "actual_runway": "2024-03-18T17:00:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "7123",
                        "iata": "AA7123",
                        "icao": "AAL7123",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "908",
                            "flight_iata": "ba908",
                            "flight_icao": "baw908"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "1",
                        "delay": 32,
                        "scheduled": "2024-03-18T08:55:00+00:00",
                        "estimated": "2024-03-18T08:55:00+00:00",
                        "actual": "2024-03-18T09:26:00+00:00",
                        "estimated_runway": "2024-03-18T09:26:00+00:00",
                        "actual_runway": "2024-03-18T09:26:00+00:00"
                    },
                    "arrival": {
                        "airport": "John F Kennedy International",
                        "timezone": "America/New_York",
                        "iata": "JFK",
                        "icao": "KJFK",
                        "terminal": "4",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T13:15:00+00:00",
                        "estimated": "2024-03-18T13:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Air France",
                        "iata": "AF",
                        "icao": "AFR"
                    },
                    "flight": {
                        "number": "6752",
                        "iata": "AF6752",
                        "icao": "AFR6752",
                        "codeshared": {
                            "airline_name": "virgin atlantic",
                            "airline_iata": "vs",
                            "airline_icao": "vir",
                            "flight_number": "3",
                            "flight_iata": "vs3",
                            "flight_icao": "vir3"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "1",
                        "delay": 32,
                        "scheduled": "2024-03-18T08:55:00+00:00",
                        "estimated": "2024-03-18T08:55:00+00:00",
                        "actual": "2024-03-18T09:26:00+00:00",
                        "estimated_runway": "2024-03-18T09:26:00+00:00",
                        "actual_runway": "2024-03-18T09:26:00+00:00"
                    },
                    "arrival": {
                        "airport": "John F Kennedy International",
                        "timezone": "America/New_York",
                        "iata": "JFK",
                        "icao": "KJFK",
                        "terminal": "4",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T13:15:00+00:00",
                        "estimated": "2024-03-18T13:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Aeromexico",
                        "iata": "AM",
                        "icao": "AMX"
                    },
                    "flight": {
                        "number": "7662",
                        "iata": "AM7662",
                        "icao": "AMX7662",
                        "codeshared": {
                            "airline_name": "virgin atlantic",
                            "airline_iata": "vs",
                            "airline_icao": "vir",
                            "flight_number": "3",
                            "flight_iata": "vs3",
                            "flight_icao": "vir3"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "1C",
                        "delay": 25,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:25:00+00:00",
                        "estimated_runway": "2024-03-18T09:25:00+00:00",
                        "actual_runway": "2024-03-18T09:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charles De Gaulle",
                        "timezone": "Europe/Paris",
                        "iata": "CDG",
                        "icao": "LFPG",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": "31",
                        "delay": null,
                        "scheduled": "2024-03-18T11:25:00+00:00",
                        "estimated": "2024-03-18T11:25:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "airline": {
                        "name": "Gol",
                        "iata": "G3",
                        "icao": "GLO"
                    },
                    "flight": {
                        "number": "5282",
                        "iata": "G35282",
                        "icao": "GLO5282",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "1681",
                            "flight_iata": "af1681",
                            "flight_icao": "afr1681"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "1C",
                        "delay": 25,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:25:00+00:00",
                        "estimated_runway": "2024-03-18T09:25:00+00:00",
                        "actual_runway": "2024-03-18T09:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charles De Gaulle",
                        "timezone": "Europe/Paris",
                        "iata": "CDG",
                        "icao": "LFPG",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": "31",
                        "delay": null,
                        "scheduled": "2024-03-18T11:25:00+00:00",
                        "estimated": "2024-03-18T11:25:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "airline": {
                        "name": "Air Mauritius",
                        "iata": "MK",
                        "icao": "MAU"
                    },
                    "flight": {
                        "number": "9411",
                        "iata": "MK9411",
                        "icao": "MAU9411",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "1681",
                            "flight_iata": "af1681",
                            "flight_icao": "afr1681"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "1C",
                        "delay": 25,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:25:00+00:00",
                        "estimated_runway": "2024-03-18T09:25:00+00:00",
                        "actual_runway": "2024-03-18T09:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charles De Gaulle",
                        "timezone": "Europe/Paris",
                        "iata": "CDG",
                        "icao": "LFPG",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": "31",
                        "delay": null,
                        "scheduled": "2024-03-18T11:25:00+00:00",
                        "estimated": "2024-03-18T11:25:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "airline": {
                        "name": "Vietnam Airlines",
                        "iata": "VN",
                        "icao": "HVN"
                    },
                    "flight": {
                        "number": "3105",
                        "iata": "VN3105",
                        "icao": "HVN3105",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "1681",
                            "flight_iata": "af1681",
                            "flight_icao": "afr1681"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "1C",
                        "delay": 25,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:25:00+00:00",
                        "estimated_runway": "2024-03-18T09:25:00+00:00",
                        "actual_runway": "2024-03-18T09:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charles De Gaulle",
                        "timezone": "Europe/Paris",
                        "iata": "CDG",
                        "icao": "LFPG",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": "31",
                        "delay": null,
                        "scheduled": "2024-03-18T11:25:00+00:00",
                        "estimated": "2024-03-18T11:25:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "airline": {
                        "name": "Virgin Atlantic",
                        "iata": "VS",
                        "icao": "VIR"
                    },
                    "flight": {
                        "number": "6716",
                        "iata": "VS6716",
                        "icao": "VIR6716",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "1681",
                            "flight_iata": "af1681",
                            "flight_icao": "afr1681"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "1C",
                        "delay": 25,
                        "scheduled": "2024-03-18T09:00:00+00:00",
                        "estimated": "2024-03-18T09:00:00+00:00",
                        "actual": "2024-03-18T09:25:00+00:00",
                        "estimated_runway": "2024-03-18T09:25:00+00:00",
                        "actual_runway": "2024-03-18T09:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charles De Gaulle",
                        "timezone": "Europe/Paris",
                        "iata": "CDG",
                        "icao": "LFPG",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": "31",
                        "delay": null,
                        "scheduled": "2024-03-18T11:25:00+00:00",
                        "estimated": "2024-03-18T11:25:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "airline": {
                        "name": "WestJet",
                        "iata": "WS",
                        "icao": "WJA"
                    },
                    "flight": {
                        "number": "5022",
                        "iata": "WS5022",
                        "icao": "WJA5022",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "1681",
                            "flight_iata": "af1681",
                            "flight_icao": "afr1681"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "5",
                        "delay": 12,
                        "scheduled": "2024-03-18T07:35:00+00:00",
                        "estimated": "2024-03-18T07:35:00+00:00",
                        "actual": "2024-03-18T07:46:00+00:00",
                        "estimated_runway": "2024-03-18T07:46:00+00:00",
                        "actual_runway": "2024-03-18T07:46:00+00:00"
                    },
                    "arrival": {
                        "airport": "Gardermoen",
                        "timezone": "Europe/Oslo",
                        "iata": "OSL",
                        "icao": "ENGM",
                        "terminal": "3",
                        "gate": null,
                        "baggage": "9",
                        "delay": null,
                        "scheduled": "2024-03-18T10:45:00+00:00",
                        "estimated": "2024-03-18T10:45:00+00:00",
                        "actual": "2024-03-18T10:30:00+00:00",
                        "estimated_runway": "2024-03-18T10:30:00+00:00",
                        "actual_runway": "2024-03-18T10:30:00+00:00"
                    },
                    "airline": {
                        "name": "Finnair",
                        "iata": "AY",
                        "icao": "FIN"
                    },
                    "flight": {
                        "number": "5902",
                        "iata": "AY5902",
                        "icao": "FIN5902",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "762",
                            "flight_iata": "ba762",
                            "flight_icao": "baw762"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "D",
                        "delay": null,
                        "scheduled": "2024-03-18T07:35:00+00:00",
                        "estimated": "2024-03-18T07:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Barajas",
                        "timezone": "Europe/Madrid",
                        "iata": "MAD",
                        "icao": "LEMD",
                        "terminal": "4S",
                        "gate": null,
                        "baggage": "04",
                        "delay": null,
                        "scheduled": "2024-03-18T11:10:00+00:00",
                        "estimated": "2024-03-18T11:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "458",
                        "iata": "BA458",
                        "icao": "BAW458",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A17",
                        "delay": 26,
                        "scheduled": "2024-03-18T09:45:00+00:00",
                        "estimated": "2024-03-18T09:45:00+00:00",
                        "actual": "2024-03-18T10:10:00+00:00",
                        "estimated_runway": "2024-03-18T10:10:00+00:00",
                        "actual_runway": "2024-03-18T10:10:00+00:00"
                    },
                    "arrival": {
                        "airport": "Cologne/bonn",
                        "timezone": "Europe/Berlin",
                        "iata": "CGN",
                        "icao": "EDDK",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": 1,
                        "scheduled": "2024-03-18T12:05:00+00:00",
                        "estimated": "2024-03-18T12:05:00+00:00",
                        "actual": "2024-03-18T12:06:00+00:00",
                        "estimated_runway": "2024-03-18T12:06:00+00:00",
                        "actual_runway": "2024-03-18T12:06:00+00:00"
                    },
                    "airline": {
                        "name": "Air Canada",
                        "iata": "AC",
                        "icao": "ACA"
                    },
                    "flight": {
                        "number": "6948",
                        "iata": "AC6948",
                        "icao": "ACA6948",
                        "codeshared": {
                            "airline_name": "eurowings",
                            "airline_iata": "ew",
                            "airline_icao": "ewg",
                            "flight_number": "461",
                            "flight_iata": "ew461",
                            "flight_icao": "ewg461"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A17",
                        "delay": 26,
                        "scheduled": "2024-03-18T09:45:00+00:00",
                        "estimated": "2024-03-18T09:45:00+00:00",
                        "actual": "2024-03-18T10:10:00+00:00",
                        "estimated_runway": "2024-03-18T10:10:00+00:00",
                        "actual_runway": "2024-03-18T10:10:00+00:00"
                    },
                    "arrival": {
                        "airport": "Cologne/bonn",
                        "timezone": "Europe/Berlin",
                        "iata": "CGN",
                        "icao": "EDDK",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": 1,
                        "scheduled": "2024-03-18T12:05:00+00:00",
                        "estimated": "2024-03-18T12:05:00+00:00",
                        "actual": "2024-03-18T12:06:00+00:00",
                        "estimated_runway": "2024-03-18T12:06:00+00:00",
                        "actual_runway": "2024-03-18T12:06:00+00:00"
                    },
                    "airline": {
                        "name": "United Airlines",
                        "iata": "UA",
                        "icao": "UAL"
                    },
                    "flight": {
                        "number": "9646",
                        "iata": "UA9646",
                        "icao": "UAL9646",
                        "codeshared": {
                            "airline_name": "eurowings",
                            "airline_iata": "ew",
                            "airline_icao": "ewg",
                            "flight_number": "461",
                            "flight_iata": "ew461",
                            "flight_icao": "ewg461"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A22",
                        "delay": 41,
                        "scheduled": "2024-03-18T08:50:00+00:00",
                        "estimated": "2024-03-18T08:50:00+00:00",
                        "actual": "2024-03-18T09:31:00+00:00",
                        "estimated_runway": "2024-03-18T09:31:00+00:00",
                        "actual_runway": "2024-03-18T09:31:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dublin International",
                        "timezone": "Europe/Dublin",
                        "iata": "DUB",
                        "icao": "EIDW",
                        "terminal": "2",
                        "gate": "BUS",
                        "baggage": "1",
                        "delay": 5,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:19:00+00:00",
                        "estimated_runway": "2024-03-18T10:19:00+00:00",
                        "actual_runway": "2024-03-18T10:19:00+00:00"
                    },
                    "airline": {
                        "name": "Aer Lingus",
                        "iata": "EI",
                        "icao": "EIN"
                    },
                    "flight": {
                        "number": "153",
                        "iata": "EI153",
                        "icao": "EIN153",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "34",
                        "delay": 28,
                        "scheduled": "2024-03-18T08:50:00+00:00",
                        "estimated": "2024-03-18T08:50:00+00:00",
                        "actual": "2024-03-18T09:17:00+00:00",
                        "estimated_runway": "2024-03-18T09:17:00+00:00",
                        "actual_runway": "2024-03-18T09:17:00+00:00"
                    },
                    "arrival": {
                        "airport": "Minneapolis - St. Paul International",
                        "timezone": "America/Chicago",
                        "iata": "MSP",
                        "icao": "KMSP",
                        "terminal": "1",
                        "gate": "G6",
                        "baggage": "IN2",
                        "delay": null,
                        "scheduled": "2024-03-18T13:00:00+00:00",
                        "estimated": "2024-03-18T13:00:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Delta Air Lines",
                        "iata": "DL",
                        "icao": "DAL"
                    },
                    "flight": {
                        "number": "11",
                        "iata": "DL11",
                        "icao": "DAL11",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "N852NW",
                        "iata": "A332",
                        "icao": "A332",
                        "icao24": "ABB007"
                    },
                    "live": {
                        "updated": "2024-03-18T14:46:43+00:00",
                        "latitude": 58.7573,
                        "longitude": -73.6704,
                        "altitude": 11582.4,
                        "direction": 230,
                        "speed_horizontal": 901.924,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A5",
                        "delay": 40,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:24:00+00:00",
                        "estimated_runway": "2024-03-18T09:24:00+00:00",
                        "actual_runway": "2024-03-18T09:24:00+00:00"
                    },
                    "arrival": {
                        "airport": "Eglinton (City of Derry)",
                        "timezone": "Europe/London",
                        "iata": "LDY",
                        "icao": "EGAE",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": 22,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Loganair",
                        "iata": "LM",
                        "icao": "LOG"
                    },
                    "flight": {
                        "number": "652",
                        "iata": "LM652",
                        "icao": "LOG652",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A18",
                        "delay": 19,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:03:00+00:00",
                        "estimated_runway": "2024-03-18T09:03:00+00:00",
                        "actual_runway": "2024-03-18T09:03:00+00:00"
                    },
                    "arrival": {
                        "airport": "Franz Josef Strauss",
                        "timezone": "Europe/Berlin",
                        "iata": "MUC",
                        "icao": "EDDM",
                        "terminal": "2",
                        "gate": "L4",
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T11:35:00+00:00",
                        "estimated": "2024-03-18T11:35:00+00:00",
                        "actual": "2024-03-18T11:22:00+00:00",
                        "estimated_runway": "2024-03-18T11:22:00+00:00",
                        "actual_runway": "2024-03-18T11:22:00+00:00"
                    },
                    "airline": {
                        "name": "Lufthansa",
                        "iata": "LH",
                        "icao": "DLH"
                    },
                    "flight": {
                        "number": "2471",
                        "iata": "LH2471",
                        "icao": "DLH2471",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A20",
                        "delay": 65,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:49:00+00:00",
                        "estimated_runway": "2024-03-18T09:49:00+00:00",
                        "actual_runway": "2024-03-18T09:49:00+00:00"
                    },
                    "arrival": {
                        "airport": "Stuttgart Echterdingen",
                        "timezone": "Europe/Berlin",
                        "iata": "STR",
                        "icao": "EDDS",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": 37,
                        "scheduled": "2024-03-18T11:20:00+00:00",
                        "estimated": "2024-03-18T11:20:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Eurowings",
                        "iata": "EW",
                        "icao": "EWG"
                    },
                    "flight": {
                        "number": "2463",
                        "iata": "EW2463",
                        "icao": "EWG2463",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "D",
                        "delay": null,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Leonardo Da Vinci (Fiumicino)",
                        "timezone": "Europe/Rome",
                        "iata": "FCO",
                        "icao": "LIRF",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T12:25:00+00:00",
                        "estimated": "2024-03-18T12:25:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "554",
                        "iata": "BA554",
                        "icao": "BAW554",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B36",
                        "delay": 11,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T08:56:00+00:00",
                        "estimated_runway": "2024-03-18T08:56:00+00:00",
                        "actual_runway": "2024-03-18T08:56:00+00:00"
                    },
                    "arrival": {
                        "airport": "Indira Gandhi International",
                        "timezone": "Asia/Kolkata",
                        "iata": "DEL",
                        "icao": "VIDP",
                        "terminal": "3",
                        "gate": null,
                        "baggage": "13",
                        "delay": null,
                        "scheduled": "2024-03-18T22:30:00+00:00",
                        "estimated": "2024-03-18T22:30:00+00:00",
                        "actual": "2024-03-18T22:05:00+00:00",
                        "estimated_runway": "2024-03-18T22:05:00+00:00",
                        "actual_runway": "2024-03-18T22:05:00+00:00"
                    },
                    "airline": {
                        "name": "Air India",
                        "iata": "AI",
                        "icao": "AIC"
                    },
                    "flight": {
                        "number": "162",
                        "iata": "AI162",
                        "icao": "AIC162",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "VT-AND",
                        "iata": "B788",
                        "icao": "B788",
                        "icao24": "8005EE"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "10",
                        "delay": 46,
                        "scheduled": "2024-03-18T08:40:00+00:00",
                        "estimated": "2024-03-18T08:40:00+00:00",
                        "actual": "2024-03-18T09:26:00+00:00",
                        "estimated_runway": "2024-03-18T09:26:00+00:00",
                        "actual_runway": "2024-03-18T09:26:00+00:00"
                    },
                    "arrival": {
                        "airport": "Schiphol",
                        "timezone": "Europe/Amsterdam",
                        "iata": "AMS",
                        "icao": "EHAM",
                        "terminal": "2",
                        "gate": "D24",
                        "baggage": "012",
                        "delay": 6,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:11:00+00:00",
                        "estimated_runway": "2024-03-18T11:11:00+00:00",
                        "actual_runway": "2024-03-18T11:11:00+00:00"
                    },
                    "airline": {
                        "name": "KLM",
                        "iata": "KL",
                        "icao": "KLM"
                    },
                    "flight": {
                        "number": "1002",
                        "iata": "KL1002",
                        "icao": "KLM1002",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "B34",
                        "delay": 38,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": "2024-03-18T10:47:00+00:00",
                        "estimated_runway": "2024-03-18T10:47:00+00:00",
                        "actual_runway": "2024-03-18T10:47:00+00:00"
                    },
                    "arrival": {
                        "airport": "Murtala Muhammed",
                        "timezone": "Africa/Lagos",
                        "iata": "LOS",
                        "icao": "DNMM",
                        "terminal": "I",
                        "gate": null,
                        "baggage": null,
                        "delay": 7,
                        "scheduled": "2024-03-18T17:45:00+00:00",
                        "estimated": "2024-03-18T17:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "75",
                        "iata": "BA75",
                        "icao": "BAW75",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A10",
                        "delay": 52,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": "2024-03-18T11:01:00+00:00",
                        "estimated_runway": "2024-03-18T11:01:00+00:00",
                        "actual_runway": "2024-03-18T11:01:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "TBIT",
                        "gate": null,
                        "baggage": null,
                        "delay": 12,
                        "scheduled": "2024-03-18T14:25:00+00:00",
                        "estimated": "2024-03-18T14:25:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "283",
                        "iata": "BA283",
                        "icao": "BAW283",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-STBM",
                        "iata": "B77W",
                        "icao": "B77W",
                        "icao24": "407992"
                    },
                    "live": {
                        "updated": "2024-03-18T14:35:02+00:00",
                        "latitude": 61.0905,
                        "longitude": -45.7751,
                        "altitude": 9753.6,
                        "direction": 269,
                        "speed_horizontal": 835.252,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "3A",
                        "delay": 21,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": "2024-03-18T10:31:00+00:00",
                        "estimated_runway": "2024-03-18T10:31:00+00:00",
                        "actual_runway": "2024-03-18T10:31:00+00:00"
                    },
                    "arrival": {
                        "airport": "St-Exupéry",
                        "timezone": "Europe/Paris",
                        "iata": "LYS",
                        "icao": "LFLL",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T12:55:00+00:00",
                        "estimated": "2024-03-18T12:55:00+00:00",
                        "actual": "2024-03-18T12:41:00+00:00",
                        "estimated_runway": "2024-03-18T12:41:00+00:00",
                        "actual_runway": "2024-03-18T12:41:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "358",
                        "iata": "BA358",
                        "icao": "BAW358",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "9",
                        "delay": 16,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": "2024-03-18T10:26:00+00:00",
                        "estimated_runway": "2024-03-18T10:26:00+00:00",
                        "actual_runway": "2024-03-18T10:26:00+00:00"
                    },
                    "arrival": {
                        "airport": "Vienna International",
                        "timezone": "Europe/Vienna",
                        "iata": "VIE",
                        "icao": "LOWW",
                        "terminal": "3",
                        "gate": "D24",
                        "baggage": "07",
                        "delay": null,
                        "scheduled": "2024-03-18T13:25:00+00:00",
                        "estimated": "2024-03-18T13:25:00+00:00",
                        "actual": "2024-03-18T13:14:00+00:00",
                        "estimated_runway": "2024-03-18T13:14:00+00:00",
                        "actual_runway": "2024-03-18T13:14:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "700",
                        "iata": "BA700",
                        "icao": "BAW700",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-EUPW",
                        "iata": "A319",
                        "icao": "A319",
                        "icao24": "4008F1"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "23",
                        "delay": 28,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": "2024-03-18T10:38:00+00:00",
                        "estimated_runway": "2024-03-18T10:38:00+00:00",
                        "actual_runway": "2024-03-18T10:38:00+00:00"
                    },
                    "arrival": {
                        "airport": "John F Kennedy International",
                        "timezone": "America/New_York",
                        "iata": "JFK",
                        "icao": "KJFK",
                        "terminal": "4",
                        "gate": "B33",
                        "baggage": "T4",
                        "delay": null,
                        "scheduled": "2024-03-18T14:35:00+00:00",
                        "estimated": "2024-03-18T14:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Delta Air Lines",
                        "iata": "DL",
                        "icao": "DAL"
                    },
                    "flight": {
                        "number": "2",
                        "iata": "DL2",
                        "icao": "DAL2",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "N834MH",
                        "iata": "B764",
                        "icao": "B764",
                        "icao24": "AB6851"
                    },
                    "live": {
                        "updated": "2024-03-18T16:35:31+00:00",
                        "latitude": 47.2455,
                        "longitude": -67.8914,
                        "altitude": 9753.6,
                        "direction": 196,
                        "speed_horizontal": 831.548,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "28",
                        "delay": 26,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:40:00+00:00",
                        "estimated_runway": "2024-03-18T10:40:00+00:00",
                        "actual_runway": "2024-03-18T10:40:00+00:00"
                    },
                    "arrival": {
                        "airport": "Philadelphia International",
                        "timezone": "America/New_York",
                        "iata": "PHL",
                        "icao": "KPHL",
                        "terminal": "A",
                        "gate": "19",
                        "baggage": "CUST",
                        "delay": null,
                        "scheduled": "2024-03-18T14:05:00+00:00",
                        "estimated": "2024-03-18T14:05:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "729",
                        "iata": "AA729",
                        "icao": "AAL729",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "N827AN",
                        "iata": "B789",
                        "icao": "B789",
                        "icao24": "AB4AE9"
                    },
                    "live": {
                        "updated": "2024-03-18T14:00:34+00:00",
                        "latitude": 57.7605,
                        "longitude": -43.3303,
                        "altitude": 10660.4,
                        "direction": 260,
                        "speed_horizontal": 879.7,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A1",
                        "delay": 29,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:43:00+00:00",
                        "estimated_runway": "2024-03-18T10:43:00+00:00",
                        "actual_runway": "2024-03-18T10:43:00+00:00"
                    },
                    "arrival": {
                        "airport": "Cote D'azur International Airport",
                        "timezone": "Europe/Paris",
                        "iata": "NCE",
                        "icao": "LFMN",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "5",
                        "delay": null,
                        "scheduled": "2024-03-18T13:20:00+00:00",
                        "estimated": "2024-03-18T13:20:00+00:00",
                        "actual": "2024-03-18T13:16:00+00:00",
                        "estimated_runway": "2024-03-18T13:16:00+00:00",
                        "actual_runway": "2024-03-18T13:16:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "346",
                        "iata": "BA346",
                        "icao": "BAW346",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A10",
                        "delay": 39,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:53:00+00:00",
                        "estimated_runway": "2024-03-18T10:53:00+00:00",
                        "actual_runway": "2024-03-18T10:53:00+00:00"
                    },
                    "arrival": {
                        "airport": "Linate",
                        "timezone": "Europe/Rome",
                        "iata": "LIN",
                        "icao": "LIML",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "03",
                        "delay": 5,
                        "scheduled": "2024-03-18T13:20:00+00:00",
                        "estimated": "2024-03-18T13:20:00+00:00",
                        "actual": "2024-03-18T13:25:00+00:00",
                        "estimated_runway": "2024-03-18T13:25:00+00:00",
                        "actual_runway": "2024-03-18T13:25:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "588",
                        "iata": "BA588",
                        "icao": "BAW588",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-EUYL",
                        "iata": "A320",
                        "icao": "A320",
                        "icao24": "406531"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A8",
                        "delay": 30,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:44:00+00:00",
                        "estimated_runway": "2024-03-18T10:44:00+00:00",
                        "actual_runway": "2024-03-18T10:44:00+00:00"
                    },
                    "arrival": {
                        "airport": "Newcastle Airport",
                        "timezone": "Europe/London",
                        "iata": "NCL",
                        "icao": "EGNT",
                        "terminal": "2E",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T11:40:00+00:00",
                        "estimated": "2024-03-18T11:40:00+00:00",
                        "actual": "2024-03-18T11:35:00+00:00",
                        "estimated_runway": "2024-03-18T11:35:00+00:00",
                        "actual_runway": "2024-03-18T11:35:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "1326",
                        "iata": "BA1326",
                        "icao": "BAW1326",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": null,
                        "delay": null,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Linate",
                        "timezone": "Europe/Rome",
                        "iata": "LIN",
                        "icao": "LIML",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T13:20:00+00:00",
                        "estimated": "2024-03-18T13:20:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Air Baltic",
                        "iata": "BT",
                        "icao": "BTI"
                    },
                    "flight": {
                        "number": "5629",
                        "iata": "BT5629",
                        "icao": "BTI5629",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A18",
                        "delay": 23,
                        "scheduled": "2024-03-18T10:20:00+00:00",
                        "estimated": "2024-03-18T10:20:00+00:00",
                        "actual": "2024-03-18T10:42:00+00:00",
                        "estimated_runway": "2024-03-18T10:42:00+00:00",
                        "actual_runway": "2024-03-18T10:42:00+00:00"
                    },
                    "arrival": {
                        "airport": "Arlanda",
                        "timezone": "Europe/Stockholm",
                        "iata": "ARN",
                        "icao": "ESSA",
                        "terminal": "5",
                        "gate": "14C",
                        "baggage": "3",
                        "delay": null,
                        "scheduled": "2024-03-18T13:55:00+00:00",
                        "estimated": "2024-03-18T13:55:00+00:00",
                        "actual": "2024-03-18T13:49:00+00:00",
                        "estimated_runway": "2024-03-18T13:49:00+00:00",
                        "actual_runway": "2024-03-18T13:49:00+00:00"
                    },
                    "airline": {
                        "name": "SAS",
                        "iata": "SK",
                        "icao": "SAS"
                    },
                    "flight": {
                        "number": "526",
                        "iata": "SK526",
                        "icao": "SAS526",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "EI-SIO",
                        "iata": "A20N",
                        "icao": "A20N",
                        "icao24": "4CAD42"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "11",
                        "delay": 23,
                        "scheduled": "2024-03-18T10:35:00+00:00",
                        "estimated": "2024-03-18T10:35:00+00:00",
                        "actual": "2024-03-18T10:57:00+00:00",
                        "estimated_runway": "2024-03-18T10:57:00+00:00",
                        "actual_runway": "2024-03-18T10:57:00+00:00"
                    },
                    "arrival": {
                        "airport": "Prague Vaclav Havel Airport",
                        "timezone": "Europe/Prague",
                        "iata": "PRG",
                        "icao": "LKPR",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "11",
                        "delay": null,
                        "scheduled": "2024-03-18T13:35:00+00:00",
                        "estimated": "2024-03-18T13:35:00+00:00",
                        "actual": "2024-03-18T13:22:00+00:00",
                        "estimated_runway": "2024-03-18T13:22:00+00:00",
                        "actual_runway": "2024-03-18T13:22:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "852",
                        "iata": "BA852",
                        "icao": "BAW852",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A17",
                        "delay": 42,
                        "scheduled": "2024-03-18T10:35:00+00:00",
                        "estimated": "2024-03-18T10:35:00+00:00",
                        "actual": "2024-03-18T11:34:00+00:00",
                        "estimated_runway": "2024-03-18T11:34:00+00:00",
                        "actual_runway": "2024-03-18T11:34:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dublin International",
                        "timezone": "Europe/Dublin",
                        "iata": "DUB",
                        "icao": "EIDW",
                        "terminal": "1",
                        "gate": "VCC4",
                        "baggage": "5",
                        "delay": 27,
                        "scheduled": "2024-03-18T12:05:00+00:00",
                        "estimated": "2024-03-18T12:05:00+00:00",
                        "actual": "2024-03-18T12:31:00+00:00",
                        "estimated_runway": "2024-03-18T12:31:00+00:00",
                        "actual_runway": "2024-03-18T12:31:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "834",
                        "iata": "BA834",
                        "icao": "BAW834",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-EUPG",
                        "iata": "A319",
                        "icao": "A319",
                        "icao24": "400877"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A10",
                        "delay": 31,
                        "scheduled": "2024-03-18T10:45:00+00:00",
                        "estimated": "2024-03-18T10:45:00+00:00",
                        "actual": "2024-03-18T11:15:00+00:00",
                        "estimated_runway": "2024-03-18T11:15:00+00:00",
                        "actual_runway": "2024-03-18T11:15:00+00:00"
                    },
                    "arrival": {
                        "airport": "Newark Liberty International",
                        "timezone": "America/New_York",
                        "iata": "EWR",
                        "icao": "KEWR",
                        "terminal": "B",
                        "gate": "54",
                        "baggage": "3",
                        "delay": null,
                        "scheduled": "2024-03-18T15:00:00+00:00",
                        "estimated": "2024-03-18T15:00:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "185",
                        "iata": "BA185",
                        "icao": "BAW185",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C61",
                        "delay": 23,
                        "scheduled": "2024-03-18T10:45:00+00:00",
                        "estimated": "2024-03-18T10:45:00+00:00",
                        "actual": "2024-03-18T11:08:00+00:00",
                        "estimated_runway": "2024-03-18T11:08:00+00:00",
                        "actual_runway": "2024-03-18T11:08:00+00:00"
                    },
                    "arrival": {
                        "airport": "Barajas",
                        "timezone": "Europe/Madrid",
                        "iata": "MAD",
                        "icao": "LEMD",
                        "terminal": "4S",
                        "gate": null,
                        "baggage": "05",
                        "delay": null,
                        "scheduled": "2024-03-18T14:10:00+00:00",
                        "estimated": "2024-03-18T14:10:00+00:00",
                        "actual": "2024-03-18T14:00:00+00:00",
                        "estimated_runway": "2024-03-18T14:00:00+00:00",
                        "actual_runway": "2024-03-18T14:00:00+00:00"
                    },
                    "airline": {
                        "name": "Iberia",
                        "iata": "IB",
                        "icao": "IBE"
                    },
                    "flight": {
                        "number": "3175",
                        "iata": "IB3175",
                        "icao": "IBE3175",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "3",
                        "delay": 35,
                        "scheduled": "2024-03-18T10:55:00+00:00",
                        "estimated": "2024-03-18T10:55:00+00:00",
                        "actual": "2024-03-18T11:30:00+00:00",
                        "estimated_runway": "2024-03-18T11:30:00+00:00",
                        "actual_runway": "2024-03-18T11:30:00+00:00"
                    },
                    "arrival": {
                        "airport": "Gardermoen",
                        "timezone": "Europe/Oslo",
                        "iata": "OSL",
                        "icao": "ENGM",
                        "terminal": "3",
                        "gate": null,
                        "baggage": "6",
                        "delay": 4,
                        "scheduled": "2024-03-18T14:10:00+00:00",
                        "estimated": "2024-03-18T14:10:00+00:00",
                        "actual": "2024-03-18T14:13:00+00:00",
                        "estimated_runway": "2024-03-18T14:13:00+00:00",
                        "actual_runway": "2024-03-18T14:13:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "766",
                        "iata": "BA766",
                        "icao": "BAW766",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "16",
                        "delay": 29,
                        "scheduled": "2024-03-18T10:50:00+00:00",
                        "estimated": "2024-03-18T10:50:00+00:00",
                        "actual": "2024-03-18T11:19:00+00:00",
                        "estimated_runway": "2024-03-18T11:19:00+00:00",
                        "actual_runway": "2024-03-18T11:19:00+00:00"
                    },
                    "arrival": {
                        "airport": "Hartsfield-jackson Atlanta International",
                        "timezone": "America/New_York",
                        "iata": "ATL",
                        "icao": "KATL",
                        "terminal": "I",
                        "gate": "F2",
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T16:40:00+00:00",
                        "estimated": "2024-03-18T16:40:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Virgin Atlantic",
                        "iata": "VS",
                        "icao": "VIR"
                    },
                    "flight": {
                        "number": "103",
                        "iata": "VS103",
                        "icao": "VIR103",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-VJAM",
                        "iata": "A35K",
                        "icao": "A35K",
                        "icao24": "407698"
                    },
                    "live": {
                        "updated": "2024-03-18T11:22:31+00:00",
                        "latitude": 51.4539,
                        "longitude": -0.7572,
                        "altitude": 1927.86,
                        "direction": 271,
                        "speed_horizontal": 470.408,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A7",
                        "delay": 12,
                        "scheduled": "2024-03-18T10:55:00+00:00",
                        "estimated": "2024-03-18T10:55:00+00:00",
                        "actual": "2024-03-18T11:06:00+00:00",
                        "estimated_runway": "2024-03-18T11:06:00+00:00",
                        "actual_runway": "2024-03-18T11:06:00+00:00"
                    },
                    "arrival": {
                        "airport": "Arlanda",
                        "timezone": "Europe/Stockholm",
                        "iata": "ARN",
                        "icao": "ESSA",
                        "terminal": "2",
                        "gate": "86",
                        "baggage": "2",
                        "delay": null,
                        "scheduled": "2024-03-18T14:30:00+00:00",
                        "estimated": "2024-03-18T14:30:00+00:00",
                        "actual": "2024-03-18T14:07:00+00:00",
                        "estimated_runway": "2024-03-18T14:07:00+00:00",
                        "actual_runway": "2024-03-18T14:07:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "778",
                        "iata": "BA778",
                        "icao": "BAW778",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A3",
                        "delay": 18,
                        "scheduled": "2024-03-18T10:55:00+00:00",
                        "estimated": "2024-03-18T10:55:00+00:00",
                        "actual": "2024-03-18T11:13:00+00:00",
                        "estimated_runway": "2024-03-18T11:13:00+00:00",
                        "actual_runway": "2024-03-18T11:13:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dyce",
                        "timezone": "Europe/London",
                        "iata": "ABZ",
                        "icao": "EGPD",
                        "terminal": "5",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T12:35:00+00:00",
                        "estimated": "2024-03-18T12:35:00+00:00",
                        "actual": "2024-03-18T12:21:00+00:00",
                        "estimated_runway": "2024-03-18T12:21:00+00:00",
                        "actual_runway": "2024-03-18T12:21:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "1310",
                        "iata": "BA1310",
                        "icao": "BAW1310",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B42",
                        "delay": 22,
                        "scheduled": "2024-03-18T10:55:00+00:00",
                        "estimated": "2024-03-18T10:55:00+00:00",
                        "actual": "2024-03-18T11:17:00+00:00",
                        "estimated_runway": "2024-03-18T11:17:00+00:00",
                        "actual_runway": "2024-03-18T11:17:00+00:00"
                    },
                    "arrival": {
                        "airport": "Singapore Changi",
                        "timezone": "Asia/Singapore",
                        "iata": "SIN",
                        "icao": "WSSS",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T07:50:00+00:00",
                        "estimated": "2024-03-19T07:50:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Singapore Airlines",
                        "iata": "SQ",
                        "icao": "SIA"
                    },
                    "flight": {
                        "number": "317",
                        "iata": "SQ317",
                        "icao": "SIA317",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "9V-SKW",
                        "iata": "A388",
                        "icao": "A388",
                        "icao24": "76CD77"
                    },
                    "live": {
                        "updated": "2024-03-18T16:58:05+00:00",
                        "latitude": 30.432,
                        "longitude": 59.742,
                        "altitude": 11887.2,
                        "direction": 135,
                        "speed_horizontal": 1105.64,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C52",
                        "delay": 22,
                        "scheduled": "2024-03-18T11:00:00+00:00",
                        "estimated": "2024-03-18T11:00:00+00:00",
                        "actual": "2024-03-18T11:22:00+00:00",
                        "estimated_runway": "2024-03-18T11:22:00+00:00",
                        "actual_runway": "2024-03-18T11:22:00+00:00"
                    },
                    "arrival": {
                        "airport": "Chicago O'hare International",
                        "timezone": "America/Chicago",
                        "iata": "ORD",
                        "icao": "KORD",
                        "terminal": "5",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T14:55:00+00:00",
                        "estimated": "2024-03-18T14:55:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "295",
                        "iata": "BA295",
                        "icao": "BAW295",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A10",
                        "delay": 28,
                        "scheduled": "2024-03-18T11:00:00+00:00",
                        "estimated": "2024-03-18T11:00:00+00:00",
                        "actual": "2024-03-18T11:27:00+00:00",
                        "estimated_runway": "2024-03-18T11:27:00+00:00",
                        "actual_runway": "2024-03-18T11:27:00+00:00"
                    },
                    "arrival": {
                        "airport": "Schiphol",
                        "timezone": "Europe/Amsterdam",
                        "iata": "AMS",
                        "icao": "EHAM",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T13:25:00+00:00",
                        "estimated": "2024-03-18T13:25:00+00:00",
                        "actual": "2024-03-18T13:08:00+00:00",
                        "estimated_runway": "2024-03-18T13:08:00+00:00",
                        "actual_runway": "2024-03-18T13:08:00+00:00"
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "434",
                        "iata": "BA434",
                        "icao": "BAW434",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "7",
                        "delay": 9,
                        "scheduled": "2024-03-18T11:00:00+00:00",
                        "estimated": "2024-03-18T11:00:00+00:00",
                        "actual": "2024-03-18T11:09:00+00:00",
                        "estimated_runway": "2024-03-18T11:09:00+00:00",
                        "actual_runway": "2024-03-18T11:09:00+00:00"
                    },
                    "arrival": {
                        "airport": "Hong Kong International",
                        "timezone": "Asia/Hong_Kong",
                        "iata": "HKG",
                        "icao": "VHHH",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T07:40:00+00:00",
                        "estimated": "2024-03-19T07:40:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Cathay Pacific",
                        "iata": "CX",
                        "icao": "CPA"
                    },
                    "flight": {
                        "number": "252",
                        "iata": "CX252",
                        "icao": "CPA252",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "B-KQH",
                        "iata": "B77W",
                        "icao": "B77W",
                        "icao24": "780A3A"
                    },
                    "live": {
                        "updated": "2024-03-18T16:33:30+00:00",
                        "latitude": 41.3375,
                        "longitude": 61.2287,
                        "altitude": 10668,
                        "direction": 89,
                        "speed_horizontal": 1092.68,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A22",
                        "delay": 26,
                        "scheduled": "2024-03-18T11:00:00+00:00",
                        "estimated": "2024-03-18T11:00:00+00:00",
                        "actual": "2024-03-18T11:25:00+00:00",
                        "estimated_runway": "2024-03-18T11:25:00+00:00",
                        "actual_runway": "2024-03-18T11:25:00+00:00"
                    },
                    "arrival": {
                        "airport": "Ireland West Airport Knock",
                        "timezone": "Europe/Dublin",
                        "iata": "NOC",
                        "icao": "EIKN",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": 3,
                        "scheduled": "2024-03-18T12:30:00+00:00",
                        "estimated": "2024-03-18T12:30:00+00:00",
                        "actual": "2024-03-18T12:34:00+00:00",
                        "estimated_runway": "2024-03-18T12:34:00+00:00",
                        "actual_runway": "2024-03-18T12:34:00+00:00"
                    },
                    "airline": {
                        "name": "Aer Lingus",
                        "iata": "EI",
                        "icao": "EIN"
                    },
                    "flight": {
                        "number": "915",
                        "iata": "EI915",
                        "icao": "EIN915",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "3",
                        "delay": 23,
                        "scheduled": "2024-03-18T11:00:00+00:00",
                        "estimated": "2024-03-18T11:00:00+00:00",
                        "actual": "2024-03-18T11:23:00+00:00",
                        "estimated_runway": "2024-03-18T11:23:00+00:00",
                        "actual_runway": "2024-03-18T11:23:00+00:00"
                    },
                    "arrival": {
                        "airport": "Tan Son Nhat International",
                        "timezone": "Asia/Ho_Chi_Minh",
                        "iata": "SGN",
                        "icao": "VVTS",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T06:20:00+00:00",
                        "estimated": "2024-03-19T06:20:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Vietnam Airlines",
                        "iata": "VN",
                        "icao": "HVN"
                    },
                    "flight": {
                        "number": "50",
                        "iata": "VN50",
                        "icao": "HVN50",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C64",
                        "delay": 60,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T13:09:00+00:00",
                        "estimated_runway": "2024-03-18T13:09:00+00:00",
                        "actual_runway": "2024-03-18T13:09:00+00:00"
                    },
                    "arrival": {
                        "airport": "San Francisco International",
                        "timezone": "America/Los_Angeles",
                        "iata": "SFO",
                        "icao": "KSFO",
                        "terminal": "I",
                        "gate": null,
                        "baggage": "CL9",
                        "delay": 62,
                        "scheduled": "2024-03-18T15:15:00+00:00",
                        "estimated": "2024-03-18T15:15:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "285",
                        "iata": "BA285",
                        "icao": "BAW285",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-XLEH",
                        "iata": "A388",
                        "icao": "A388",
                        "icao24": "406B21"
                    },
                    "live": {
                        "updated": "2024-03-18T15:28:01+00:00",
                        "latitude": 62.0237,
                        "longitude": -24.5027,
                        "altitude": 10972.8,
                        "direction": 293,
                        "speed_horizontal": 914.888,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "21",
                        "delay": 21,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:26:00+00:00",
                        "estimated_runway": "2024-03-18T11:26:00+00:00",
                        "actual_runway": "2024-03-18T11:26:00+00:00"
                    },
                    "arrival": {
                        "airport": "Sofia",
                        "timezone": "Europe/Sofia",
                        "iata": "SOF",
                        "icao": "LBSF",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T16:10:00+00:00",
                        "estimated": "2024-03-18T16:10:00+00:00",
                        "actual": "2024-03-18T16:00:00+00:00",
                        "estimated_runway": "2024-03-18T16:00:00+00:00",
                        "actual_runway": "2024-03-18T16:00:00+00:00"
                    },
                    "airline": {
                        "name": "Bulgaria Air",
                        "iata": "FB",
                        "icao": "LZB"
                    },
                    "flight": {
                        "number": "852",
                        "iata": "FB852",
                        "icao": "LZB852",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "LZ-LON",
                        "iata": "BCS3",
                        "icao": "BCS3",
                        "icao24": "452122"
                    },
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A20",
                        "delay": 26,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:31:00+00:00",
                        "estimated_runway": "2024-03-18T11:31:00+00:00",
                        "actual_runway": "2024-03-18T11:31:00+00:00"
                    },
                    "arrival": {
                        "airport": "Brussels Airport",
                        "timezone": "Europe/Brussels",
                        "iata": "BRU",
                        "icao": "EBBR",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": 4,
                        "scheduled": "2024-03-18T13:10:00+00:00",
                        "estimated": "2024-03-18T13:10:00+00:00",
                        "actual": "2024-03-18T13:09:00+00:00",
                        "estimated_runway": "2024-03-18T13:09:00+00:00",
                        "actual_runway": "2024-03-18T13:09:00+00:00"
                    },
                    "airline": {
                        "name": "Brussels Airlines",
                        "iata": "SN",
                        "icao": "BEL"
                    },
                    "flight": {
                        "number": "2094",
                        "iata": "SN2094",
                        "icao": "BEL2094",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "22",
                        "delay": 30,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:35:00+00:00",
                        "estimated_runway": "2024-03-18T11:35:00+00:00",
                        "actual_runway": "2024-03-18T11:35:00+00:00"
                    },
                    "arrival": {
                        "airport": "Tampa International",
                        "timezone": "America/New_York",
                        "iata": "TPA",
                        "icao": "KTPA",
                        "terminal": "3",
                        "gate": "F88",
                        "baggage": "1",
                        "delay": null,
                        "scheduled": "2024-03-18T17:10:00+00:00",
                        "estimated": "2024-03-18T17:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Virgin Atlantic",
                        "iata": "VS",
                        "icao": "VIR"
                    },
                    "flight": {
                        "number": "129",
                        "iata": "VS129",
                        "icao": "VIR129",
                        "codeshared": null
                    },
                    "aircraft": {
                        "registration": "G-VJAZ",
                        "iata": "A339",
                        "icao": "A339",
                        "icao24": "407DA5"
                    },
                    "live": {
                        "updated": "2024-03-18T15:17:57+00:00",
                        "latitude": 56.6015,
                        "longitude": -45.2189,
                        "altitude": 11277.6,
                        "direction": 259,
                        "speed_horizontal": 837.104,
                        "speed_vertical": 0,
                        "is_ground": false
                    }
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "32",
                        "delay": 31,
                        "scheduled": "2024-03-18T14:10:00+00:00",
                        "estimated": "2024-03-18T14:10:00+00:00",
                        "actual": "2024-03-18T14:41:00+00:00",
                        "estimated_runway": "2024-03-18T14:41:00+00:00",
                        "actual_runway": "2024-03-18T14:41:00+00:00"
                    },
                    "arrival": {
                        "airport": "Charlotte Douglas",
                        "timezone": "America/New_York",
                        "iata": "CLT",
                        "icao": "KCLT",
                        "terminal": null,
                        "gate": "D2",
                        "baggage": "D",
                        "delay": null,
                        "scheduled": "2024-03-18T19:05:00+00:00",
                        "estimated": "2024-03-18T19:05:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Qatar Airways",
                        "iata": "QR",
                        "icao": "QTR"
                    },
                    "flight": {
                        "number": "2221",
                        "iata": "QR2221",
                        "icao": "QTR2221",
                        "codeshared": {
                            "airline_name": "american airlines",
                            "airline_iata": "aa",
                            "airline_icao": "aal",
                            "flight_number": "731",
                            "flight_iata": "aa731",
                            "flight_icao": "aal731"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "3",
                        "gate": "24",
                        "delay": 45,
                        "scheduled": "2024-03-18T15:25:00+00:00",
                        "estimated": "2024-03-18T15:25:00+00:00",
                        "actual": "2024-03-18T16:41:00+00:00",
                        "estimated_runway": "2024-03-18T16:41:00+00:00",
                        "actual_runway": "2024-03-18T16:41:00+00:00"
                    },
                    "arrival": {
                        "airport": "Gardermoen",
                        "timezone": "Europe/Oslo",
                        "iata": "OSL",
                        "icao": "ENGM",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": 38,
                        "scheduled": "2024-03-18T18:45:00+00:00",
                        "estimated": "2024-03-18T18:45:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Finnair",
                        "iata": "AY",
                        "icao": "FIN"
                    },
                    "flight": {
                        "number": "5922",
                        "iata": "AY5922",
                        "icao": "FIN5922",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "768",
                            "flight_iata": "ba768",
                            "flight_icao": "baw768"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A24",
                        "delay": 9,
                        "scheduled": "2024-03-18T12:15:00+00:00",
                        "estimated": "2024-03-18T12:15:00+00:00",
                        "actual": "2024-03-18T12:23:00+00:00",
                        "estimated_runway": "2024-03-18T12:23:00+00:00",
                        "actual_runway": "2024-03-18T12:23:00+00:00"
                    },
                    "arrival": {
                        "airport": "Keflavik International",
                        "timezone": "Atlantic/Reykjavik",
                        "iata": "KEF",
                        "icao": "BIKF",
                        "terminal": "S",
                        "gate": null,
                        "baggage": "3",
                        "delay": null,
                        "scheduled": "2024-03-18T15:30:00+00:00",
                        "estimated": "2024-03-18T15:30:00+00:00",
                        "actual": "2024-03-18T15:00:00+00:00",
                        "estimated_runway": "2024-03-18T15:00:00+00:00",
                        "actual_runway": "2024-03-18T15:00:00+00:00"
                    },
                    "airline": {
                        "name": "Icelandair",
                        "iata": "FI",
                        "icao": "ICE"
                    },
                    "flight": {
                        "number": "451",
                        "iata": "FI451",
                        "icao": "ICE451",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A20",
                        "delay": 43,
                        "scheduled": "2024-03-18T12:15:00+00:00",
                        "estimated": "2024-03-18T12:15:00+00:00",
                        "actual": "2024-03-18T12:58:00+00:00",
                        "estimated_runway": "2024-03-18T12:58:00+00:00",
                        "actual_runway": "2024-03-18T12:58:00+00:00"
                    },
                    "arrival": {
                        "airport": "Düsseldorf International Airport",
                        "timezone": "Europe/Berlin",
                        "iata": "DUS",
                        "icao": "EDDL",
                        "terminal": "1",
                        "gate": "A79",
                        "baggage": "5",
                        "delay": 19,
                        "scheduled": "2024-03-18T14:35:00+00:00",
                        "estimated": "2024-03-18T14:35:00+00:00",
                        "actual": "2024-03-18T14:59:00+00:00",
                        "estimated_runway": "2024-03-18T14:59:00+00:00",
                        "actual_runway": "2024-03-18T14:59:00+00:00"
                    },
                    "airline": {
                        "name": "Eurowings",
                        "iata": "EW",
                        "icao": "EWG"
                    },
                    "flight": {
                        "number": "9467",
                        "iata": "EW9467",
                        "icao": "EWG9467",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A22",
                        "delay": 44,
                        "scheduled": "2024-03-18T12:15:00+00:00",
                        "estimated": "2024-03-18T12:15:00+00:00",
                        "actual": "2024-03-18T12:59:00+00:00",
                        "estimated_runway": "2024-03-18T12:59:00+00:00",
                        "actual_runway": "2024-03-18T12:59:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dublin International",
                        "timezone": "Europe/Dublin",
                        "iata": "DUB",
                        "icao": "EIDW",
                        "terminal": "2",
                        "gate": "307",
                        "baggage": "1",
                        "delay": 15,
                        "scheduled": "2024-03-18T13:35:00+00:00",
                        "estimated": "2024-03-18T13:35:00+00:00",
                        "actual": "2024-03-18T13:49:00+00:00",
                        "estimated_runway": "2024-03-18T13:49:00+00:00",
                        "actual_runway": "2024-03-18T13:49:00+00:00"
                    },
                    "airline": {
                        "name": "Aer Lingus",
                        "iata": "EI",
                        "icao": "EIN"
                    },
                    "flight": {
                        "number": "159",
                        "iata": "EI159",
                        "icao": "EIN159",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A22",
                        "delay": 35,
                        "scheduled": "2024-03-18T09:40:00+00:00",
                        "estimated": "2024-03-18T09:40:00+00:00",
                        "actual": "2024-03-18T10:14:00+00:00",
                        "estimated_runway": "2024-03-18T10:14:00+00:00",
                        "actual_runway": "2024-03-18T10:14:00+00:00"
                    },
                    "arrival": {
                        "airport": "Edinburgh",
                        "timezone": "Europe/London",
                        "iata": "EDI",
                        "icao": "EGPH",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "9",
                        "delay": 3,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:10:00+00:00",
                        "estimated_runway": "2024-03-18T11:10:00+00:00",
                        "actual_runway": "2024-03-18T11:10:00+00:00"
                    },
                    "airline": {
                        "name": "Royal Air Maroc",
                        "iata": "AT",
                        "icao": "RAM"
                    },
                    "flight": {
                        "number": "5213",
                        "iata": "AT5213",
                        "icao": "RAM5213",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "1456",
                            "flight_iata": "ba1456",
                            "flight_icao": "baw1456"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": null,
                        "delay": null,
                        "scheduled": "2024-03-18T21:35:00+00:00",
                        "estimated": "2024-03-18T21:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "Suvarnabhumi International",
                        "timezone": "Asia/Bangkok",
                        "iata": "BKK",
                        "icao": "VTBS",
                        "terminal": null,
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T16:00:00+00:00",
                        "estimated": "2024-03-19T16:00:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Thai Airways International",
                        "iata": "TG",
                        "icao": "THA"
                    },
                    "flight": {
                        "number": "917",
                        "iata": "TG917",
                        "icao": "THA917",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T21:40:00+00:00",
                        "estimated": "2024-03-18T21:40:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "arrival": {
                        "airport": "El Nuevo Dorado International",
                        "timezone": "America/Bogota",
                        "iata": "BOG",
                        "icao": "SKBO",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-19T03:40:00+00:00",
                        "estimated": "2024-03-19T03:40:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "SA AVIANCA",
                        "iata": "AV",
                        "icao": "AVA"
                    },
                    "flight": {
                        "number": "121",
                        "iata": "AV121",
                        "icao": "AVA121",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "4",
                        "gate": "20",
                        "delay": 11,
                        "scheduled": "2024-03-18T08:55:00+00:00",
                        "estimated": "2024-03-18T08:55:00+00:00",
                        "actual": "2024-03-18T09:05:00+00:00",
                        "estimated_runway": "2024-03-18T09:05:00+00:00",
                        "actual_runway": "2024-03-18T09:05:00+00:00"
                    },
                    "arrival": {
                        "airport": "Cote D'azur International Airport",
                        "timezone": "Europe/Paris",
                        "iata": "NCE",
                        "icao": "LFMN",
                        "terminal": "2",
                        "gate": "A3",
                        "baggage": "4",
                        "delay": null,
                        "scheduled": "2024-03-18T12:00:00+00:00",
                        "estimated": "2024-03-18T12:00:00+00:00",
                        "actual": "2024-03-18T11:40:00+00:00",
                        "estimated_runway": "2024-03-18T11:40:00+00:00",
                        "actual_runway": "2024-03-18T11:40:00+00:00"
                    },
                    "airline": {
                        "name": "Virgin Atlantic",
                        "iata": "VS",
                        "icao": "VIR"
                    },
                    "flight": {
                        "number": "6083",
                        "iata": "VS6083",
                        "icao": "VIR6083",
                        "codeshared": {
                            "airline_name": "air france",
                            "airline_iata": "af",
                            "airline_icao": "afr",
                            "flight_number": "7551",
                            "flight_iata": "af7551",
                            "flight_icao": "afr7551"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A6",
                        "delay": 30,
                        "scheduled": "2024-03-18T08:35:00+00:00",
                        "estimated": "2024-03-18T08:35:00+00:00",
                        "actual": "2024-03-18T09:04:00+00:00",
                        "estimated_runway": "2024-03-18T09:04:00+00:00",
                        "actual_runway": "2024-03-18T09:04:00+00:00"
                    },
                    "arrival": {
                        "airport": "Berlin Brandenburg Airport",
                        "timezone": "+1",
                        "iata": "BER",
                        "icao": "EDDB",
                        "terminal": "1",
                        "gate": "Y07",
                        "baggage": "B2",
                        "delay": null,
                        "scheduled": "2024-03-18T11:30:00+00:00",
                        "estimated": "2024-03-18T11:30:00+00:00",
                        "actual": "2024-03-18T11:27:00+00:00",
                        "estimated_runway": "2024-03-18T11:27:00+00:00",
                        "actual_runway": "2024-03-18T11:27:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "6708",
                        "iata": "AA6708",
                        "icao": "AAL6708",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "992",
                            "flight_iata": "ba992",
                            "flight_icao": "baw992"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A19",
                        "delay": 16,
                        "scheduled": "2024-03-18T07:50:00+00:00",
                        "estimated": "2024-03-18T07:50:00+00:00",
                        "actual": "2024-03-18T08:06:00+00:00",
                        "estimated_runway": "2024-03-18T08:06:00+00:00",
                        "actual_runway": "2024-03-18T08:06:00+00:00"
                    },
                    "arrival": {
                        "airport": "Edinburgh",
                        "timezone": "Europe/London",
                        "iata": "EDI",
                        "icao": "EGPH",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "9",
                        "delay": null,
                        "scheduled": "2024-03-18T09:10:00+00:00",
                        "estimated": "2024-03-18T09:10:00+00:00",
                        "actual": "2024-03-18T09:06:00+00:00",
                        "estimated_runway": "2024-03-18T09:06:00+00:00",
                        "actual_runway": "2024-03-18T09:06:00+00:00"
                    },
                    "airline": {
                        "name": "Qatar Airways",
                        "iata": "QR",
                        "icao": "QTR"
                    },
                    "flight": {
                        "number": "6270",
                        "iata": "QR6270",
                        "icao": "QTR6270",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "1444",
                            "flight_iata": "ba1444",
                            "flight_icao": "baw1444"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A12",
                        "delay": 25,
                        "scheduled": "2024-03-18T11:55:00+00:00",
                        "estimated": "2024-03-18T11:55:00+00:00",
                        "actual": "2024-03-18T12:19:00+00:00",
                        "estimated_runway": "2024-03-18T12:19:00+00:00",
                        "actual_runway": "2024-03-18T12:19:00+00:00"
                    },
                    "arrival": {
                        "airport": "Geneve-cointrin",
                        "timezone": "Europe/Zurich",
                        "iata": "GVA",
                        "icao": "LSGG",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "7",
                        "delay": null,
                        "scheduled": "2024-03-18T14:40:00+00:00",
                        "estimated": "2024-03-18T14:40:00+00:00",
                        "actual": "2024-03-18T14:33:00+00:00",
                        "estimated_runway": "2024-03-18T14:33:00+00:00",
                        "actual_runway": "2024-03-18T14:33:00+00:00"
                    },
                    "airline": {
                        "name": "Malaysia Airlines",
                        "iata": "MH",
                        "icao": "MAS"
                    },
                    "flight": {
                        "number": "9856",
                        "iata": "MH9856",
                        "icao": "MAS9856",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "730",
                            "flight_iata": "ba730",
                            "flight_icao": "baw730"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A12",
                        "delay": 25,
                        "scheduled": "2024-03-18T11:55:00+00:00",
                        "estimated": "2024-03-18T11:55:00+00:00",
                        "actual": "2024-03-18T12:19:00+00:00",
                        "estimated_runway": "2024-03-18T12:19:00+00:00",
                        "actual_runway": "2024-03-18T12:19:00+00:00"
                    },
                    "arrival": {
                        "airport": "Geneve-cointrin",
                        "timezone": "Europe/Zurich",
                        "iata": "GVA",
                        "icao": "LSGG",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "7",
                        "delay": null,
                        "scheduled": "2024-03-18T14:40:00+00:00",
                        "estimated": "2024-03-18T14:40:00+00:00",
                        "actual": "2024-03-18T14:33:00+00:00",
                        "estimated_runway": "2024-03-18T14:33:00+00:00",
                        "actual_runway": "2024-03-18T14:33:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "6865",
                        "iata": "AA6865",
                        "icao": "AAL6865",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "730",
                            "flight_iata": "ba730",
                            "flight_icao": "baw730"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A12",
                        "delay": 25,
                        "scheduled": "2024-03-18T11:55:00+00:00",
                        "estimated": "2024-03-18T11:55:00+00:00",
                        "actual": "2024-03-18T12:19:00+00:00",
                        "estimated_runway": "2024-03-18T12:19:00+00:00",
                        "actual_runway": "2024-03-18T12:19:00+00:00"
                    },
                    "arrival": {
                        "airport": "Geneve-cointrin",
                        "timezone": "Europe/Zurich",
                        "iata": "GVA",
                        "icao": "LSGG",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "7",
                        "delay": null,
                        "scheduled": "2024-03-18T14:40:00+00:00",
                        "estimated": "2024-03-18T14:40:00+00:00",
                        "actual": "2024-03-18T14:33:00+00:00",
                        "estimated_runway": "2024-03-18T14:33:00+00:00",
                        "actual_runway": "2024-03-18T14:33:00+00:00"
                    },
                    "airline": {
                        "name": "Qatar Airways",
                        "iata": "QR",
                        "icao": "QTR"
                    },
                    "flight": {
                        "number": "5888",
                        "iata": "QR5888",
                        "icao": "QTR5888",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "730",
                            "flight_iata": "ba730",
                            "flight_icao": "baw730"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "B33",
                        "delay": 27,
                        "scheduled": "2024-03-18T08:35:00+00:00",
                        "estimated": "2024-03-18T08:35:00+00:00",
                        "actual": "2024-03-18T09:02:00+00:00",
                        "estimated_runway": "2024-03-18T09:02:00+00:00",
                        "actual_runway": "2024-03-18T09:02:00+00:00"
                    },
                    "arrival": {
                        "airport": "Rinas Mother Teresa",
                        "timezone": "Europe/Tirane",
                        "iata": "TIA",
                        "icao": "LATI",
                        "terminal": "1",
                        "gate": null,
                        "baggage": null,
                        "delay": 2,
                        "scheduled": "2024-03-18T12:35:00+00:00",
                        "estimated": "2024-03-18T12:35:00+00:00",
                        "actual": "2024-03-18T12:21:00+00:00",
                        "estimated_runway": "2024-03-18T12:21:00+00:00",
                        "actual_runway": "2024-03-18T12:21:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "7035",
                        "iata": "AA7035",
                        "icao": "AAL7035",
                        "codeshared": {
                            "airline_name": "finnair",
                            "airline_iata": "ay",
                            "airline_icao": "fin",
                            "flight_number": "380",
                            "flight_iata": "ay380",
                            "flight_icao": "fin380"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A20",
                        "delay": 65,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:49:00+00:00",
                        "estimated_runway": "2024-03-18T09:49:00+00:00",
                        "actual_runway": "2024-03-18T09:49:00+00:00"
                    },
                    "arrival": {
                        "airport": "Stuttgart Echterdingen",
                        "timezone": "Europe/Berlin",
                        "iata": "STR",
                        "icao": "EDDS",
                        "terminal": "3",
                        "gate": null,
                        "baggage": null,
                        "delay": 37,
                        "scheduled": "2024-03-18T11:20:00+00:00",
                        "estimated": "2024-03-18T11:20:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "United Airlines",
                        "iata": "UA",
                        "icao": "UAL"
                    },
                    "flight": {
                        "number": "9635",
                        "iata": "UA9635",
                        "icao": "UAL9635",
                        "codeshared": {
                            "airline_name": "eurowings",
                            "airline_iata": "ew",
                            "airline_icao": "ewg",
                            "flight_number": "2463",
                            "flight_iata": "ew2463",
                            "flight_icao": "ewg2463"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A5",
                        "delay": 40,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:24:00+00:00",
                        "estimated_runway": "2024-03-18T09:24:00+00:00",
                        "actual_runway": "2024-03-18T09:24:00+00:00"
                    },
                    "arrival": {
                        "airport": "Eglinton (City of Derry)",
                        "timezone": "Europe/London",
                        "iata": "LDY",
                        "icao": "EGAE",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": 22,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "KLM",
                        "iata": "KL",
                        "icao": "KLM"
                    },
                    "flight": {
                        "number": "3060",
                        "iata": "KL3060",
                        "icao": "KLM3060",
                        "codeshared": {
                            "airline_name": "loganair",
                            "airline_iata": "lm",
                            "airline_icao": "log",
                            "flight_number": "652",
                            "flight_iata": "lm652",
                            "flight_icao": "log652"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A5",
                        "delay": 40,
                        "scheduled": "2024-03-18T08:45:00+00:00",
                        "estimated": "2024-03-18T08:45:00+00:00",
                        "actual": "2024-03-18T09:24:00+00:00",
                        "estimated_runway": "2024-03-18T09:24:00+00:00",
                        "actual_runway": "2024-03-18T09:24:00+00:00"
                    },
                    "arrival": {
                        "airport": "Eglinton (City of Derry)",
                        "timezone": "Europe/London",
                        "iata": "LDY",
                        "icao": "EGAE",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": 22,
                        "scheduled": "2024-03-18T10:10:00+00:00",
                        "estimated": "2024-03-18T10:10:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "4002",
                        "iata": "BA4002",
                        "icao": "BAW4002",
                        "codeshared": {
                            "airline_name": "loganair",
                            "airline_iata": "lm",
                            "airline_icao": "log",
                            "flight_number": "652",
                            "flight_iata": "lm652",
                            "flight_icao": "log652"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A22",
                        "delay": 35,
                        "scheduled": "2024-03-18T09:40:00+00:00",
                        "estimated": "2024-03-18T09:40:00+00:00",
                        "actual": "2024-03-18T10:14:00+00:00",
                        "estimated_runway": "2024-03-18T10:14:00+00:00",
                        "actual_runway": "2024-03-18T10:14:00+00:00"
                    },
                    "arrival": {
                        "airport": "Edinburgh",
                        "timezone": "Europe/London",
                        "iata": "EDI",
                        "icao": "EGPH",
                        "terminal": "1",
                        "gate": null,
                        "baggage": "9",
                        "delay": 3,
                        "scheduled": "2024-03-18T11:05:00+00:00",
                        "estimated": "2024-03-18T11:05:00+00:00",
                        "actual": "2024-03-18T11:10:00+00:00",
                        "estimated_runway": "2024-03-18T11:10:00+00:00",
                        "actual_runway": "2024-03-18T11:10:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "7118",
                        "iata": "AA7118",
                        "icao": "AAL7118",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "1456",
                            "flight_iata": "ba1456",
                            "flight_icao": "baw1456"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "scheduled",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A10",
                        "delay": 21,
                        "scheduled": "2024-03-18T12:10:00+00:00",
                        "estimated": "2024-03-18T12:10:00+00:00",
                        "actual": "2024-03-18T12:30:00+00:00",
                        "estimated_runway": "2024-03-18T12:30:00+00:00",
                        "actual_runway": "2024-03-18T12:30:00+00:00"
                    },
                    "arrival": {
                        "airport": "Washington Dulles International",
                        "timezone": "America/New_York",
                        "iata": "IAD",
                        "icao": "KIAD",
                        "terminal": null,
                        "gate": null,
                        "baggage": "20",
                        "delay": null,
                        "scheduled": "2024-03-18T16:40:00+00:00",
                        "estimated": "2024-03-18T16:40:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "British Airways",
                        "iata": "BA",
                        "icao": "BAW"
                    },
                    "flight": {
                        "number": "217",
                        "iata": "BA217",
                        "icao": "BAW217",
                        "codeshared": null
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C52",
                        "delay": 43,
                        "scheduled": "2024-03-18T15:15:00+00:00",
                        "estimated": "2024-03-18T15:15:00+00:00",
                        "actual": "2024-03-18T15:57:00+00:00",
                        "estimated_runway": "2024-03-18T15:57:00+00:00",
                        "actual_runway": "2024-03-18T15:57:00+00:00"
                    },
                    "arrival": {
                        "airport": "San Francisco International",
                        "timezone": "America/Los_Angeles",
                        "iata": "SFO",
                        "icao": "KSFO",
                        "terminal": "I",
                        "gate": null,
                        "baggage": "CL7",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "6998",
                        "iata": "AA6998",
                        "icao": "AAL6998",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "287",
                            "flight_iata": "ba287",
                            "flight_icao": "baw287"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Air Canada",
                        "iata": "AC",
                        "icao": "ACA"
                    },
                    "flight": {
                        "number": "5355",
                        "iata": "AC5355",
                        "icao": "ACA5355",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Lufthansa",
                        "iata": "LH",
                        "icao": "DLH"
                    },
                    "flight": {
                        "number": "9342",
                        "iata": "LH9342",
                        "icao": "DLH9342",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "SWISS",
                        "iata": "LX",
                        "icao": "SWR"
                    },
                    "flight": {
                        "number": "3056",
                        "iata": "LX3056",
                        "icao": "SWR3056",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Air New Zealand",
                        "iata": "NZ",
                        "icao": "ANZ"
                    },
                    "flight": {
                        "number": "9835",
                        "iata": "NZ9835",
                        "icao": "ANZ9835",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Austrian",
                        "iata": "OS",
                        "icao": "AUA"
                    },
                    "flight": {
                        "number": "7847",
                        "iata": "OS7847",
                        "icao": "AUA7847",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "B31",
                        "delay": 17,
                        "scheduled": "2024-03-18T15:20:00+00:00",
                        "estimated": "2024-03-18T15:20:00+00:00",
                        "actual": "2024-03-18T15:36:00+00:00",
                        "estimated_runway": "2024-03-18T15:36:00+00:00",
                        "actual_runway": "2024-03-18T15:36:00+00:00"
                    },
                    "arrival": {
                        "airport": "Los Angeles International",
                        "timezone": "America/Los_Angeles",
                        "iata": "LAX",
                        "icao": "KLAX",
                        "terminal": "7",
                        "gate": "74",
                        "baggage": "C",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Brussels Airlines",
                        "iata": "SN",
                        "icao": "BEL"
                    },
                    "flight": {
                        "number": "9097",
                        "iata": "SN9097",
                        "icao": "BEL9097",
                        "codeshared": {
                            "airline_name": "united airlines",
                            "airline_iata": "ua",
                            "airline_icao": "ual",
                            "flight_number": "935",
                            "flight_iata": "ua935",
                            "flight_icao": "ual935"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C52",
                        "delay": 43,
                        "scheduled": "2024-03-18T15:15:00+00:00",
                        "estimated": "2024-03-18T15:15:00+00:00",
                        "actual": "2024-03-18T15:57:00+00:00",
                        "estimated_runway": "2024-03-18T15:57:00+00:00",
                        "actual_runway": "2024-03-18T15:57:00+00:00"
                    },
                    "arrival": {
                        "airport": "San Francisco International",
                        "timezone": "America/Los_Angeles",
                        "iata": "SFO",
                        "icao": "KSFO",
                        "terminal": "I",
                        "gate": null,
                        "baggage": "CL7",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Finnair",
                        "iata": "AY",
                        "icao": "FIN"
                    },
                    "flight": {
                        "number": "5527",
                        "iata": "AY5527",
                        "icao": "FIN5527",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "287",
                            "flight_iata": "ba287",
                            "flight_icao": "baw287"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "active",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "C52",
                        "delay": 43,
                        "scheduled": "2024-03-18T15:15:00+00:00",
                        "estimated": "2024-03-18T15:15:00+00:00",
                        "actual": "2024-03-18T15:57:00+00:00",
                        "estimated_runway": "2024-03-18T15:57:00+00:00",
                        "actual_runway": "2024-03-18T15:57:00+00:00"
                    },
                    "arrival": {
                        "airport": "San Francisco International",
                        "timezone": "America/Los_Angeles",
                        "iata": "SFO",
                        "icao": "KSFO",
                        "terminal": "I",
                        "gate": null,
                        "baggage": "CL7",
                        "delay": null,
                        "scheduled": "2024-03-18T19:35:00+00:00",
                        "estimated": "2024-03-18T19:35:00+00:00",
                        "actual": null,
                        "estimated_runway": null,
                        "actual_runway": null
                    },
                    "airline": {
                        "name": "Aer Lingus",
                        "iata": "EI",
                        "icao": "EIN"
                    },
                    "flight": {
                        "number": "8987",
                        "iata": "EI8987",
                        "icao": "EIN8987",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "287",
                            "flight_iata": "ba287",
                            "flight_icao": "baw287"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "2",
                        "gate": "A22",
                        "delay": 41,
                        "scheduled": "2024-03-18T08:50:00+00:00",
                        "estimated": "2024-03-18T08:50:00+00:00",
                        "actual": "2024-03-18T09:31:00+00:00",
                        "estimated_runway": "2024-03-18T09:31:00+00:00",
                        "actual_runway": "2024-03-18T09:31:00+00:00"
                    },
                    "arrival": {
                        "airport": "Dublin International",
                        "timezone": "Europe/Dublin",
                        "iata": "DUB",
                        "icao": "EIDW",
                        "terminal": "2",
                        "gate": "BUS",
                        "baggage": "1",
                        "delay": 5,
                        "scheduled": "2024-03-18T10:15:00+00:00",
                        "estimated": "2024-03-18T10:15:00+00:00",
                        "actual": "2024-03-18T10:19:00+00:00",
                        "estimated_runway": "2024-03-18T10:19:00+00:00",
                        "actual_runway": "2024-03-18T10:19:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "8035",
                        "iata": "AA8035",
                        "icao": "AAL8035",
                        "codeshared": {
                            "airline_name": "aer lingus",
                            "airline_iata": "ei",
                            "airline_icao": "ein",
                            "flight_number": "153",
                            "flight_iata": "ei153",
                            "flight_icao": "ein153"
                        }
                    },
                    "aircraft": null,
                    "live": null
                },
                {
                    "flight_date": "2024-03-18",
                    "flight_status": "landed",
                    "departure": {
                        "airport": "Heathrow",
                        "timezone": "Europe/London",
                        "iata": "LHR",
                        "icao": "EGLL",
                        "terminal": "5",
                        "gate": "A13",
                        "delay": 13,
                        "scheduled": "2024-03-18T08:15:00+00:00",
                        "estimated": "2024-03-18T08:15:00+00:00",
                        "actual": "2024-03-18T08:27:00+00:00",
                        "estimated_runway": "2024-03-18T08:27:00+00:00",
                        "actual_runway": "2024-03-18T08:27:00+00:00"
                    },
                    "arrival": {
                        "airport": "Cologne/bonn",
                        "timezone": "Europe/Berlin",
                        "iata": "CGN",
                        "icao": "EDDK",
                        "terminal": "2",
                        "gate": null,
                        "baggage": null,
                        "delay": null,
                        "scheduled": "2024-03-18T10:45:00+00:00",
                        "estimated": "2024-03-18T10:45:00+00:00",
                        "actual": "2024-03-18T10:18:00+00:00",
                        "estimated_runway": "2024-03-18T10:18:00+00:00",
                        "actual_runway": "2024-03-18T10:18:00+00:00"
                    },
                    "airline": {
                        "name": "American Airlines",
                        "iata": "AA",
                        "icao": "AAL"
                    },
                    "flight": {
                        "number": "7094",
                        "iata": "AA7094",
                        "icao": "AAL7094",
                        "codeshared": {
                            "airline_name": "british airways",
                            "airline_iata": "ba",
                            "airline_icao": "baw",
                            "flight_number": "996",
                            "flight_iata": "ba996",
                            "flight_icao": "baw996"
                        }
                    },
                    "aircraft": null,
                    "live": null
                }
            ]
        }];
        res.json(exemple_flight_response_api);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la requete d\'exemple api' });
    }

};

module.exports = {
    getAll_api,
    getflight_to_update,
    response_api
};

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordonnées de Paris (peut être remplacé par des coordonnées dynamiques)
const position = [48.8566, 2.3522];

// Infos du vol
const flightInfo = {
  flightNumber: "AF001",
  airline: "Air France",
  departure: "Paris (CDG)",
  arrival: "New York (JFK)",
  departureTime: "12:30",
  arrivalTime: "15:45",
  status: "En vol", // Peut être: "Retardé", "Atterri", "Annulé"
};

// Icône par défaut du marqueur
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapComponent = () => {
  // État pour la progression du vol
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulation d'une progression automatique du vol
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "90%", width: "100vw", position: "relative" }}>
      {/* Carte Leaflet */}
      <MapContainer center={position} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={defaultIcon}>
          <Popup>Vol {flightInfo.flightNumber} - {flightInfo.airline}</Popup>
        </Marker>
      </MapContainer>

      {/* Card avec les infos du vol en overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "20px",
          width: "600px",
        }}
      >
        <Card sx={{ textAlign: "center" }} elevation={3}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{flightInfo.flightNumber}</Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {flightInfo.departure} → {flightInfo.arrival}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
              Départ: {flightInfo.departureTime} | Arrivée: {flightInfo.arrivalTime}
            </Typography>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <LinearProgress sx={{ flexGrow: 1 }} variant="determinate" value={progress} />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "green", marginTop: 1 }}
            >
              Statut: {flightInfo.status}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default MapComponent;

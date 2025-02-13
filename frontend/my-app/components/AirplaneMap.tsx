import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import { Box , Card, CardContent, Typography, LinearProgress } from "@mui/material";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AirplaneMap = () => {
  const position = [48.8566, 2.3522]; // Position initiale (Paris)
  const markerRef = useRef(null);
  const [heading, setHeading] = useState(135); // Angle initial

  const [progress, setProgress] = useState(0);

  //data dans le localStorage
  const [data, setData] = useState("");

  // Icône personnalisée
  const airplaneIcon = L.divIcon({
    html: `<div class="airplane-icon-container"><div class="airplane-icon"></div></div>`,
    className: "", // Empêche Leaflet d'ajouter une classe par défaut
    iconSize: [48, 48],
    iconAnchor: [24, 24],
  });
  

  // Animation d'apparition
  useEffect(() => {
    setTimeout(() => {
      const markerElement = markerRef.current?.getElement();
      if (markerElement) {
        const container = markerElement.querySelector(".airplane-icon-container");
        if (container) {
          container.style.opacity = "1";
          container.style.transform = "scale(1)";
        }
      }
    }, 300);
  }, []);



  // Mise à jour de la rotation
  useEffect(() => {
    const markerElement = markerRef.current?.getElement();
    if (markerElement) {
      const iconElement = markerElement.querySelector(".airplane-icon");
      if (iconElement) {
        iconElement.style.transform = `rotate(${heading}deg)`;
      }
    }
  }, [heading]);

  // Fonction pour tester le changement d'orientation
  useEffect(() => {

    const storedData = localStorage.getItem("flightData");
    if (storedData) {
      try {
        setData(JSON.parse(storedData)); // Convertir en objet
      } catch (error) {
        console.error("Erreur de parsing JSON :", error);
        setData("Erreur de lecture des données");
      }
    } else {
      setData("No data found");
    }
    console.log(data)
    
    const interval = setInterval(() => {
      setHeading((prev) => (prev + 90) % 360); // Rotation toutes les 2s
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div>
      <MapContainer center={position} zoom={7} style={{ height: "800px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        />
        <Marker position={position} icon={airplaneIcon} ref={markerRef} />
      </MapContainer>

      <style>
        {`
          .airplane-icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            
            transform: scale(1);
            transition: transform 0.6s ease-out, opacity 0.6s ease-out;
          }

          .airplane-icon {
            width: 48px;
            height: 48px;
            background-image: url('https://www.freeiconspng.com/uploads/plane-icon--iconshow-14.png');
            background-size: cover;
            transition: transform 1s ease-in-out;
          }
        `}
      </style>

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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{data.flightNumber}</Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {data.departure} → {data.arrival}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
              Départ: {data.departureTime} | Arrivée: {data.arrivalTime}
            </Typography>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <LinearProgress sx={{ flexGrow: 1 }} variant="determinate" value={progress} />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "green", marginTop: 1 }}
            >
              Statut: {data.status}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default AirplaneMap;

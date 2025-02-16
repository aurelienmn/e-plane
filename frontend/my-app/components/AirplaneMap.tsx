import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Box, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AirplaneMap = () => {
  //------------data-----------
  const [data, setData] = useState({});
  const [position, setPosition] = useState([48.8566, 2.3522]); // Position initiale (Paris)
  const markerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [heading, setHeading] = useState(0); // Heading récupéré du track

  // Icône personnalisée
  const airplaneIcon = L.divIcon({
    html: `<div class="airplane-icon-container"><div class="airplane-icon"></div></div>`,
    className: "",
    iconSize: [48, 48],
    iconAnchor: [24, 24],
  });

  // Composant pour recentrer la carte
  const RecenterMap = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
  };

  // Chargement des données depuis le localStorage et fetch
  useEffect(() => {
    const storedData = localStorage.getItem("flightData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        const flightNumber = parsedData.flight_number;
        console.log("Flight number from localStorage:", flightNumber);

        // Fetch des données avec le flight_number récupéré
        fetch(`http://localhost:5252/flightone/${flightNumber}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch flight data");
            }
            return response.json();
          })
          .then((fetchedData) => {
            setData(fetchedData);
            setPosition([fetchedData.lat, fetchedData.lng]);
            if (fetchedData.track !== undefined) {
              setHeading(fetchedData.track);
            }
            console.log("Fetched data:", fetchedData);
          })
          .catch((err) => {
            console.error("Fetch error:", err);
          });
      } catch (error) {
        console.error("Erreur de parsing JSON :", error);
      }
    } else {
      console.log("No flight data found in localStorage");
    }

    // Animation d'apparition
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

  // Mise à jour de la rotation en fonction du heading
  useEffect(() => {
    const markerElement = markerRef.current?.getElement();
    if (markerElement) {
      const iconElement = markerElement.querySelector(".airplane-icon");
      if (iconElement) {
        iconElement.style.transform = `rotate(${heading}deg)`;
      }
    }
  }, [heading]);

  return (
    <div>
      <MapContainer center={position} zoom={7} style={{ height: "100vh", width: "100vw" }}>
        <RecenterMap center={position} />
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
            background-image: url('./img/planeIcon.png');
            background-size: cover;
            background-position: center;
            transition: transform 1s ease-in-out;
            transform: rotate(${heading}deg);
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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {data.flight_number || "N/A"}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {data.dep_iata} → {data.arr_iata}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Départ: {data.dep_iata || "N/A"} | Arrivée: {data.arr_iata || "N/A"}
            </Typography>
            <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
              <LinearProgress
                sx={{ flexGrow: 1 }}
                variant="determinate"
                value={progress}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "green", marginTop: 1 }}
            >
              Statut: {data.status || "Inconnu"}
            </Typography>
            {/* <Typography variant="body2" sx={{ marginTop: 1 }}>
              Heading: {heading}°
            </Typography> */}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default AirplaneMap;

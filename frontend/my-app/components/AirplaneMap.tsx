import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Fab,
  Modal,
  TextField,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AirplaneMap = () => {
    //------------data-----------
  const [data, setData] = useState(""); //localStorage

  const [position, setPosition] = useState([48.8566, 2.3522]); // Position initiale (Paris)
  const markerRef = useRef(null);
  const [heading, setHeading] = useState(135); // Angle initial

  const [progress, setProgress] = useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

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
        const container = markerElement.querySelector(
          ".airplane-icon-container",
        );
        if (container) {
          container.style.opacity = "1";
          container.style.transform = "scale(1)";
        }
      }
    }, 300);
    fetch(`http://localhost:5252/flightsdata/:${data.flight_number}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        // setPosition([data.lat,data.lng])
        console.log("data from fetch is : ", data);
        //setLoading(false);
      })
      .catch((err) => {
        console.log("error is : ", err);
        //setError(err.message);
      });
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
    //---------------- Local Storage --------------------------
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
    console.log(data);

    const interval = setInterval(() => {
      setHeading((prev) => (prev + 90) % 360); // Rotation toutes les 2s
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 10,
    color: "black",
    boxShadow: 24,

    p: 4,
  };

  return (
    <div>
      <MapContainer center={position} zoom={7} style={{ height: "840px" }}>
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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {data.flight_number}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              {data.dep_iata} → {data.arr_iata}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginBottom: 1 }}
            >
              Départ: {data.dep_iata} | Arrivée: {data.arr_iata}
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
              Statut: {data.status}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Fab
        sx={{ position: "absolute", right: 20, bottom: 20 }}
        onClick={() => {
          handleOpen();
        }}
      >
        <AddIcon />
      </Fab>

      {/*-------------------Modal------------------------*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container
            sx={{
              display: "flex",
              flexFlow: "column",
              gap: 4,
              backgroundColor: "gray",
              borderRadius: 10,
              padding: 4,
            }}
          >
            <TextField variant="outlined" label="Numéro de Vol" />
            <TextField variant="outlined" label="Agence" />
          </Container>
          <Container>
            <TextField variant="outlined" />
            <Fab>
              <AddIcon />
            </Fab>
          </Container>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AirplaneMap;

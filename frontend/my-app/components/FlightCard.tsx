"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconButton, Button, TextField, Card, CardContent, Typography, Box } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapIcon from "@mui/icons-material/Map";
import FlightIcon from "@mui/icons-material/Flight";
import BusinessIcon from '@mui/icons-material/Business';
 
/*
const flightsData = Array.from({ length: 20 }, (_, i) => ({
  flight_number: `FL${100 + i}`,
  dep_iata: ["Paris", "Londres", "Tokyo", "New York", "Dubaï"][i % 5],
  arr_iata: ["Los Angeles", "Pékin", "Berlin", "Madrid", "Sydney"][i % 5],
  time: `${10 + i % 12}:00`,
  status: ["À l'heure", "En retard", "Annulé"][i % 3],
  delay: i % 3 === 1 ? `${(10 + i % 12) + 1}:15` : null,
  details: {
    company: ["Air France", "British Airways", "Lufthansa", "Emirates", "Qatar Airways"][i % 5],
    terminal: `T${(i % 3) + 1}`,
    gate: `G${100 + i}`,
    duration: `${6 + (i % 4)}h ${(i % 60)}min`,
  },
}));
*/

function FlightCard({ flight }) {
  const [showDetails, setShowDetails] = useState(false);

  const router = useRouter();

  const HandleSave = (flightData) => {
    console.log(flightData);
    localStorage.setItem("flightData", JSON.stringify(flightData));
    router.push("/map");
  };


  const statusColors = {
    "on-time": "#2196f3",
    "en-route": "#2196f3",
    "landed": "#795548",
    "scheduled": "#4caf50",
    "delayed": "#ff9800",
    "canceled": "#e74c3c"
};

  return (
    <>
    <Card 
    sx={{ mb: 2, p: 2, borderRadius:3 , width:500 , borderLeft: `6px solid ${statusColors[flight.status]}`,
    "&:hover": {
      transform: 'translateY(-5px)', // Slightly enlarge button
      boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.15)", // Add shadow
    }
    }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">
        <FlightIcon color="primary" sx={{verticalAlign: "middle", mr: 1 }} />Vol {flight.flight_number}   
        </Typography>
        <Typography
          sx={{
            backgroundColor: statusColors[flight.status],
            display:'flex',
            alignItems:'center',
            color: "white",
            p: "4px 12px",
            borderRadius: "16px",
            fontSize: "12px",
          }}
        >
          {flight.status}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <FlightTakeoffIcon color="primary" />
        <Typography variant="body2">Départ : {flight.dep_iata}</Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <FlightLandIcon color="primary" />
        <Typography variant="body2">Arrivée : {flight.arr_iata}</Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1} mt={1}>
          <AccessTimeIcon color="primary" />
          {flight.status === "En retard" && flight.delay ? (
            <>
              <Typography variant="body2" sx={{ textDecoration: "line-through", color: "red" }}>
                {new Date(flight.dep_time_utc).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
              </Typography> 
              <p>➡️</p>
              <Typography variant="body2" sx={{ color: "green", fontWeight: "bold" }}>
                {flight.delay}
              </Typography>
            </>
          ) : (
            <Typography variant="body2">
              {new Date(flight.dep_time_utc).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
            </Typography>
          )}
          </Box>

      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Button
          variant="contained"
          color="primary"
          sx={{borderRadius:10}}
          startIcon={<ExpandMoreIcon />}
          onClick={() => setShowDetails(!showDetails)}
        >
          Voir plus
        </Button>
        <Button variant="contained" color="success" sx={{borderRadius:10}} startIcon={<MapIcon />} onClick={() => {HandleSave(flight)}}>
          Voir sur la carte
        </Button>
      </Box>

      {showDetails && (
        <CardContent sx={{ mt: 2, borderTop: "1px dashed #ccc", pt: 1 }}>
          <Typography variant="body2"><BusinessIcon></BusinessIcon> Compagnie : </Typography>
          <Typography variant="body2"> Terminal : {flight.dep_terminal}</Typography>
          <Typography variant="body2">🚪 Porte : {flight.dep_gate}</Typography>
          <Typography variant="body2">⏳ Durée : {flight.duration}</Typography>
        </CardContent>
      )}
    </Card>
    </>
    
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <Box display="flex" justifyContent="center" gap={2} mt={3}>
      <Button disabled={currentPage === 1} onClick={() => onPageChange(-1)}>⬅️ Précédent</Button>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(1)}>Suivant ➡️</Button>
    </Box>
  );
}

function SearchBar({ setSearchTerm }) {
  return (
    <TextField
      placeholder="🔍 Rechercher un vol..."
      variant="outlined"
      onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      sx={{ my: 2 , width: 600 , margin:4, backgroundColor:'white', borderRadius: "40px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "40px",
        },
      }}
    />
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 5;

  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
      console.log("use effect");
      //--------------------Fetch de l'api---------------------
      fetch(`http://localhost:5252/flightsdata`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setFlightData(data);
          console.log("data from fetch is : ", data);
          //setLoading(false);
        })
        .catch((err) => {
          console.log("error is : ", err);
          //setError(err.message);
          // setLoading(false);
        });
    }, []);

  const filteredFlights = flightData.filter(
    (flight) =>
      flight.flight_number.toLowerCase().includes(searchTerm) ||
      flight.dep_iata.toLowerCase().includes(searchTerm) ||
      flight.arr_iata.toLowerCase().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);
  const displayedFlights = filteredFlights.slice((currentPage - 1) * flightsPerPage, currentPage * flightsPerPage);

  return (
    <Box sx={{ p: 3, display:'flex' , flexFlow:'column', alignItems:'center' ,maxWidth: "600px", mx: "auto"}}>
      <SearchBar setSearchTerm={setSearchTerm} />
      {displayedFlights.length === 0 ? (
        <Typography textAlign="center" color="text.secondary">Aucun vol trouvé.</Typography>
      ) : (
        displayedFlights.map((flight) => <FlightCard key={flight.flight_number} flight={flight} />)
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(step) => setCurrentPage(currentPage + step)} />
    </Box>
  );
}

export default App;

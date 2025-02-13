"use client"; // Nécessaire pour un composant client

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import depuis next/navigation
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from "@mui/material";

// Thème personnalisé
const theme = createTheme({
  palette: {
    primary: { main: "#4169E1" },
    background: { default: "#ffffff" },
  },
  typography: { fontFamily: "Arial, sans-serif" },
});

// Données JSON simulées
const flightsData = [
  { flightNumber: "AF123", departure: "Paris (CDG)", arrival: "New York (JFK)", time: "14:30", status: "À l'heure" },
  { flightNumber: "LH456", departure: "Berlin (BER)", arrival: "Tokyo (NRT)", time: "16:00", status: "Retardé" },
  { flightNumber: "BA789", departure: "Londres (LHR)", arrival: "Dubaï (DXB)", time: "18:45", status: "Annulé" },
  { flightNumber: "EK202", departure: "Dubaï (DXB)", arrival: "Sydney (SYD)", time: "21:10", status: "À l'heure" }
];

const FlightsTable = () => {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState(""); 
  const router = useRouter(); // Utilisation correcte avec "use client"

  const HandleSave = (flightData) => {
    console.log(flightData)
    localStorage.setItem("flightData", JSON.stringify(flightData));
    router.push("/map");
};

  useEffect(() => {
    setFlights(flightsData);
  }, []);

  const filteredFlights = flights.filter(flight => 
    flight.flightNumber.toLowerCase().includes(search.toLowerCase()) ||
    flight.departure.toLowerCase().includes(search.toLowerCase()) ||
    flight.arrival.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <TextField 
          label="Rechercher un vol"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "80%", maxWidth: "400px", margin: "3%", fontSize: "1rem",
            borderRadius: "30px", marginBottom: "30px",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              "& fieldset": { borderColor: "#ddd" },
              "&:hover fieldset": { borderColor: "#1e90ff" },
              "&.Mui-focused fieldset": { borderColor: "#1e90ff", boxShadow: "0px 4px 10px rgba(30, 144, 255, 0.3)" },
            },
          }}
        />
      </div>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", mt: 2, boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Numéro de Vol</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Départ</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Arrivée</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Heure</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Statut</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight) => (
                <TableRow key={flight.flightNumber}>
                  <TableCell>{flight.flightNumber}</TableCell>
                  <TableCell>{flight.departure}</TableCell>
                  <TableCell>{flight.arrival}</TableCell>
                  <TableCell>{flight.time}</TableCell>
                  <TableCell sx={{ color: flight.status === "Annulé" ? "red" : flight.status === "Retardé" ? "orange" : "green" }}>
                    {flight.status}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => HandleSave(flight)}>Voir plus</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center", fontWeight: "bold", color: "gray" }}>
                  Aucun vol trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default FlightsTable;
 
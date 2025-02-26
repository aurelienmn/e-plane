const { io } = require("socket.io-client");

// Connexion au serveur avec API Key dans `auth`
const socket = io("http://localhost:6569", {
  auth: {
    apiKey: "4kSxZ1zwISyynF147lkvlFc68BlmGBtO",
  },
});

socket.on("connect", () => {
  console.log("✅ Connecté au serveur WebSocket");

  // Envoyer des données ADS-B après connexion avec le bon format
  socket.emit("adsbData", [
    {
      flight_number: "123",
      flight_icao: "AFR123",
      latitude: 48.8566,
      longitude: 2.3522,
      altitude: 35000,
      speed: 300,
      heading: 90.5,
      squawk: "7500",
    },
    {
      flight_number: "456",
      flight_icao: "BAW456",
      latitude: 51.5074,
      longitude: -0.1278,
      altitude: 38000,
      speed: 470,
      heading: 180.2,
      squawk: "7700",
    },
  ]);
});

socket.on("message", (msg) => {
  console.log("Message du serveur :", msg);
});

socket.on("connect_error", (err) => {
  console.error("❌ Erreur de connexion :", err.message);
});

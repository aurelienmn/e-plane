const { io } = require("socket.io-client");

// Connexion au serveur avec API Key dans `auth`
const socket = io("http://localhost:6569", {
  auth: {
    apiKey: "psVnLDlhGt0XwldhxBUQIHTa0zbWcWXj",
  },
});

socket.on("connect", () => {
  console.log("✅ Connecté au serveur WebSocket");

  // Envoyer des données ADS-B après connexion
  socket.emit("adsbData", [
    { plane: "AF123", altitude: 35000, speed: 450 },
    { plane: "BA456", altitude: 38000, speed: 470 },
  ]);
});

socket.on("message", (msg) => {
  console.log("Message du serveur :", msg);
});

socket.on("connect_error", (err) => {
  console.error("❌ Erreur de connexion :", err.message);
});

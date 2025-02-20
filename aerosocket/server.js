const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

console.log("Port défini dans .env :", process.env.PORT);

const cors = require("cors");
const router = require("./router");
const initializeSocket = require("./socketIo");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Autorise toutes les origines
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
});

// Middleware CORS : permet l'accès depuis n'importe quelle origine
app.use(
  cors({
    origin: "*", // Accepte toutes les URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware JSON pour gérer les requêtes en JSON
app.use(express.json());

// Routes API (sans protection API Key)
app.use("/", router);

// Initialisation de Socket.IO (protégé par API Key)
initializeSocket(io);

// Lancement du serveur
const PORT = process.env.PORT || 6569;
server.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

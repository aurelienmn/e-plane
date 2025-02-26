const { updateADSBData } = require("../controllers/adsbController");

const socketHandlers = (io, socket) => {
  console.log(`Utilisateur connecté : ${socket.id}`);

  // Événement pour les données ADS-B
  socket.on("adsbData", (data) => {
    console.log(`📡 Données ADS-B reçues : ${data.length} avions`);
    updateADSBData(data);
  });

  // Événement pour les messages de chat
  socket.on("message", (msg) => {
    console.log(` Message reçu de ${socket.id} : ${msg}`);
    io.emit("message", `Message relayé : ${msg}`);
  });

  // Déconnexion
  socket.on("disconnect", () => {
    console.log(`Utilisateur déconnecté : ${socket.id}`);
  });
};

module.exports = socketHandlers;

const { verifyApiKey } = require("../models/apiKeyModel");

// Middleware uniquement pour Socket.IO
const socketAuth = async (socket, next) => {
  try {
    // console.log("Headers reçus :", socket.handshake.headers);
    // console.log("Auth reçue :", socket.handshake.auth);

    const apiKey = socket.handshake.auth?.apiKey;
    // console.log("API Key reçue :", apiKey);

    if (!apiKey) {
      return next(new Error("Clé API requise"));
    }

    const isValid = await verifyApiKey(apiKey);
    if (!isValid) {
      return next(new Error("Clé API invalide"));
    }

    next();
  } catch (error) {
    console.error(
      "Erreur dans le middleware d'authentification Socket.IO :",
      error
    );
    next(new Error("Erreur serveur"));
  }
};

module.exports = { socketAuth };

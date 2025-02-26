const { socketAuth } = require("./middlewares/authMiddleware");
const socketHandlers = require("./socketHandlers/socketHandler");

const initializeSocket = (io) => {
  io.use(socketAuth); // Protection des connexions Socket.IO

  io.on("connection", (socket) => {
    socketHandlers(io, socket); // Délègue la gestion des événements
  });
};

module.exports = initializeSocket;

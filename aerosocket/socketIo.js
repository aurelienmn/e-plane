const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`Utilisateur connecté : ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Utilisateur déconnecté : ${socket.id}`);
    });

    socket.on('message', (msg) => {
      console.log(`Message reçu de ${socket.id} : ${msg}`);
      io.emit('message', `Message relayé : ${msg}`);
    });
  });
};

module.exports = initializeSocket;

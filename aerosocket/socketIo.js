const { updateADSBData } = require('./controllers/adsbController');

const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`Utilisateur connecté : ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Utilisateur déconnecté : ${socket.id}`);
    });


    socket.on('adsbData', (data) => {
      console.log(`Données ADS-B reçues : ${data.length} avions`);
      updateADSBData(data);

    });

    socket.on('message', (msg) => {
      console.log(`Message reçu de ${socket.id} : ${msg}`);
      io.emit('message', `Message relayé : ${msg}`);
    });
  });
};

module.exports = initializeSocket;

const luggage = async (req, res) => {
  const luggage_data = [
    {
      id: 1,
      name_of_bag: "petit sac",
      owner: "Aurélien Maury",
      destination: "Paris (CDG)",
      flightNumber: "AF1234",
      flightDate: "2025-03-10",
      qrCodeUrl: "https://via.placeholder.com/150?text=QR1",
    },
    {
      id: 2,
      name_of_bag: "valise moyenne",
      owner: "Aurélien Maury",
      destination: "New York (JFK)",
      flightNumber: "DL5678",
      flightDate: "2025-04-05",
      qrCodeUrl: "https://via.placeholder.com/150?text=QR2",
    },
    {
      id: 3,
      name_of_bag: "grand sac à dos",
      owner: "Aurélien Maury",
      destination: "Tokyo (NRT)",
      flightNumber: "JL9101",
      flightDate: "2025-05-15",
      qrCodeUrl: "https://via.placeholder.com/150?text=QR3",
    },
    {
      id: 4,
      name_of_bag: "valise rigide",
      owner: "Aurélien Maury",
      destination: "Sydney (SYD)",
      flightNumber: "QF1122",
      flightDate: "2025-06-20",
      qrCodeUrl: "https://via.placeholder.com/150?text=QR4",
    },
    {
      id: 5,
      name_of_bag: "sac de voyage",
      owner: "Aurélien Maury",
      destination: "Buenos Aires (EZE)",
      flightNumber: "AR3344",
      flightDate: "2025-07-30",
      qrCodeUrl: "https://via.placeholder.com/150?text=QR5",
    },
  ];

  res.json(luggage_data);
};

module.exports = { luggage };

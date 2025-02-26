const db = require("../config/db");

// Récupérer les données ADS-B depuis la base de données
const fetchADSBData = async () => {
  try {
    const result = await db.query(
      "SELECT * FROM flights_adsb ORDER BY seen DESC LIMIT 100"
    );
    return result.rows;
  } catch (error) {
    console.error("Erreur lors de la récupération des données ADS-B :", error);
    throw error;
  }
};

// Insérer ou mettre à jour les données ADS-B
const insertOrUpdateADSBData = async (data) => {
  try {
    const query = `
          INSERT INTO flights_adsb (flight_number, flight_icao, latitude, longitude, altitude, speed, heading, squawk, seen, created_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
          ON CONFLICT (flight_number, flight_icao) DO UPDATE 
          SET latitude = EXCLUDED.latitude,
              longitude = EXCLUDED.longitude,
              altitude = EXCLUDED.altitude,
              speed = EXCLUDED.speed,
              heading = EXCLUDED.heading,
              squawk = EXCLUDED.squawk,
              seen = NOW();
        `;

    for (const flight of data) {
      console.log(
        `📌 Insertion ou mise à jour pour le vol : ${flight.flight_icao}`
      );
      await db.query(query, [
        flight.flight_number || "N/A",
        flight.flight_icao || "N/A",
        flight.latitude || 0,
        flight.longitude || 0,
        flight.altitude || 0,
        flight.speed || 0,
        flight.heading || 0,
        flight.squawk || "N/A",
      ]);
    }

    console.log("✅ Données insérées ou mises à jour avec succès !");
  } catch (error) {
    console.error(
      "❌ Erreur lors de l'insertion/mise à jour dans PostgreSQL :",
      error
    );
  }
};

module.exports = { fetchADSBData, insertOrUpdateADSBData };

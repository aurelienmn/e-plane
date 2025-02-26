const {
  fetchADSBData,
  insertOrUpdateADSBData,
} = require("../models/adsbModel");

// Récupérer les données ADS-B au format JSON
const getADSBData = async (req, res) => {
  try {
    const data = await fetchADSBData();
    res.json({
      status: "success",
      count: data.length,
      data: data,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données ADS-B :", error);
    res
      .status(500)
      .json({ status: "error", message: "Erreur interne du serveur" });
  }
};

// Mettre à jour les données ADS-B
const updateADSBData = async (data) => {
  try {
    console.log(`📡 Données ADS-B mises à jour : ${data.length} avions`);
    await insertOrUpdateADSBData(data);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données ADS-B :", error);
  }
};

module.exports = { getADSBData, updateADSBData };

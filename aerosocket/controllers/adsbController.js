// controllers/adsbController.js
let adsbData = [];

// Récupérer les données ADS-B au format JSON
exports.getADSBData = (req, res) => {
    res.json({
        status: "success",
        count: adsbData.length,
        data: adsbData
    });
};

// Mettre à jour les données ADS-B
exports.updateADSBData = (data) => {
    adsbData = data;
    console.log(`📡 Données ADS-B mises à jour : ${data.length} avions`);
};

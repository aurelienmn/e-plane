const Adsb = require('../models/adsb_Models');


const getAll_adsb = async (req, res) => {
    try {
        const adsb_list = await Adsb.getAlladsblist();
        res.json(adsb_list);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des API' });
    }
};

module.exports = { getAll_adsb }
const Adsb = require('../models/adsb_Models');


const getAll_adsb = async (req, res) => {
    try {
        // const adsb_list = await Adsb.getAlladsblist();
        const adsbList = [
            { id: 1, url: 'http://adsb1.example.com' },
            { id: 2, url: 'http://adsb2.example.com' },
            { id: 3, url: 'http://adsb3.example.com' }
        ];
        res.json(adsbList);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des récepteur adsb.' });
    }
};

module.exports = { getAll_adsb }
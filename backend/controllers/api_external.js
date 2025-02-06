const Api_external = require('../models/api_extenalModels');

const getAll_api = async (req, res) => {
    try {
        const api_externe = await Api_external.getAll();
        res.json(api_externe);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
};


module.exports = {
    getAll_api
}


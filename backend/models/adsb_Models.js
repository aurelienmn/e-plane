const pool = require('../config/db');

const getAlladsblist = async () => {
    try {
        const result = await pool.query(`
            SELECT *;

        `);

        return result.rows;
    } catch (error) {
        console.error("Erreur lors de la récupération des Adsb disponible:", error);
        throw error;
    }
};

module.exports = { getAlladsblist }
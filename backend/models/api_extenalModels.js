const pool = require('../config/db');

const Api_external = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM api_external');
        return result.rows;
    }
};

module.exports = { Api_external };
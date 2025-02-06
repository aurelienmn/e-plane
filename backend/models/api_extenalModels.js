const pool = require('../config/db');

const getAll = async () => {
    try {
        const result = await pool.query(`
            SELECT 
                ai.id AS api_id,
                ai.name_api,
                ai.base_url,
                COALESCE(json_agg(
                    json_build_object(
                        'mapping_id', am.id,
                        'db_field', am.db_field,
                        'api_path', am.api_path
                    )
                ) FILTER (WHERE am.id IS NOT NULL), '[]') AS mappings
            FROM api_info ai
            LEFT JOIN api_mapping am ON ai.id = am.api_id
            GROUP BY ai.id, ai.name_api, ai.base_url;
        `);

        return result.rows;
    } catch (error) {
        console.error("Erreur lors de la récupération des API externes:", error);
        throw error;
    }
};

module.exports = { getAll };

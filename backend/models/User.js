const db = require("../config/db");
const bcrypt = require("bcrypt");

const findUserByEmail = async (email) => {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await db.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    throw error;
  }
};

const createUser = async ({ email, password, phone }) => {
  try {
    const query = `
            INSERT INTO users (email, password, phone, created_at, updated_at)
            VALUES ($1, $2, $3, NOW(), NOW())
            RETURNING id
        `;
    const values = [email, password, phone];
    const result = await db.query(query, values);
    return result.rows[0].id;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    throw error;
  }
};

const updateUser = async (id, { email, password, phone }) => {
  try {
    let hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    const query = `
            UPDATE users
            SET email = COALESCE($1, email),
                password = COALESCE($2, password),
                phone = COALESCE($3, phone),
                updated_at = NOW()
            WHERE id = $4
            RETURNING *
        `;
    const values = [email, hashedPassword, phone, id];
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE id = $1 RETURNING id";
    const values = [id];
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur :", error);
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};

const db = require("../config/db");
const bcrypt = require("bcryptjs"); // Assure-toi d'utiliser bcryptjs comme dans authController

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

const createUser = async ({
  email,
  password,
  first_name,
  last_name,
  phone,
}) => {
  try {
    const query = `
      INSERT INTO users (email, password, first_name, last_name, phone, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
      RETURNING id
    `;
    const values = [email, password, first_name, last_name, phone];
    const result = await db.query(query, values);
    return result.rows[0].id;
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    throw error;
  }
};

const updateUser = async (
  id,
  { email, password, first_name, last_name, phone }
) => {
  try {
    let hashedPassword = null;

    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const query = `
      UPDATE users
      SET email = COALESCE($1, email),
          ${password ? "password = $2," : ""} 
          first_name = COALESCE($3, first_name),
          last_name = COALESCE($4, last_name),
          phone = COALESCE($5, phone),
          updated_at = NOW()
      WHERE id = $6
      RETURNING *;
    `;

    const values = password
      ? [email, hashedPassword, first_name, last_name, phone, id]
      : [email, first_name, last_name, phone, id];

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

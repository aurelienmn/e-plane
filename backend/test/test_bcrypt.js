const bcrypt = require("bcryptjs");

const password = "newuser@example.com"; // Mot de passe en clair
const hash = "$2b$10$p/IO/OokhwtxRpQJE/kdaOKSdABkGcJUemMD1ZfKaWVJSLIWPl/eC"; // Hash récupéré

bcrypt.compare(password, hash, (err, result) => {
  if (err) {
    console.error("Erreur lors de la comparaison :", err);
  } else {
    console.log("Mot de passe valide :", result); // Doit afficher true si c'est correct
  }
});

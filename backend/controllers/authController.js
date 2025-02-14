const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User');

// Fonction pour vérifier les champs vides
const validateFields = (email, phone, password, verif_password) => {
    if (!email) {
        return 'Veuillez saisir un email.';
    }
    if (!phone) {
        return 'Veuillez saisir un numéro de téléphone.';
    }
    if (!password) {
        return 'Veuillez saisir un mot de passe.';
    }
    if (!verif_password) {
        return 'Veuillez confirmer le mot de passe.';
    }
    return null;
};

// Fonction pour vérifier le format de l'email
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Fonction pour vérifier la complexité du mot de passe
const validatePasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 caractères, une lettre et un chiffre
    return passwordRegex.test(password);
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Connexion réussie', token, user });
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        return res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};

const register = async (req, res) => {
    const { email, phone, password, verif_password } = req.body;

    try {
        // Vérification des champs vides
        const fieldError = validateFields(email, phone, password, verif_password);
        if (fieldError) {
            return res.status(400).json({ message: fieldError });
        }

        // Vérification du format de l'email
        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Email invalide.' });
        }

        // Vérification de la complexité du mot de passe
        if (!validatePasswordStrength(password)) {
            return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caractères, dont une lettre et un chiffre.' });
        }

        // Vérification des mots de passe
        if (password !== verif_password) {
            return res.status(400).json({ message: 'Les mots de passe ne correspondent pas.' });
        }

        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.createUser({
            email,
            password: hashedPassword,
            phone,
        });

        return res.status(201).json({ message: 'Inscription réussie' });
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        return res.status(500).json({ message: 'Erreur interne du serveur' });
    }
};

const logout = (req, res) => {
    return res.status(200).json({ message: 'Déconnexion réussie' });
};

module.exports = { login, register, logout };
